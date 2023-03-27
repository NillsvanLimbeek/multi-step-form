import { createContext, useContext, ParentComponent } from 'solid-js';
import { createStore } from 'solid-js/store';

import { defaultState } from '@lib/constants';
import {
  CurrentSection,
  Field,
  FormContextState,
  FormContextValue,
  Personal,
  PersonalSchema,
  PlanInput,
} from '@lib/types';
import { setPersonalErrors, clearPersonalErrors } from '@lib/data';

const FormContext = createContext<FormContextValue>([
  defaultState,
  {
    updateCurrentSection: () => undefined,
    updatePersonalField: () => undefined,
    handlePersonalSubmit: () => undefined,
    updateCurrentPlan: () => undefined,
  },
]);

export const FormProvider: ParentComponent<FormContextState> = (props) => {
  const [state, setState] = createStore<FormContextState>({
    personal: {
      name: props.personal.name ?? defaultState.personal.name,
      email: props.personal.email ?? defaultState.personal.email,
      phoneNumber:
        props.personal.phoneNumber ?? defaultState.personal.phoneNumber,
    },
    errors: {},
    currentSection: props.currentSection ?? defaultState.currentSection,
    plan: {
      period: props.plan.period ?? defaultState.plan.period,
      type: props.plan.type ?? defaultState.plan.type,
    },
  });

  function updateCurrentSection(e: CurrentSection) {
    setState('currentSection', e);
  }

  function updatePersonalField(field: Field, value: string) {
    setState('personal', field, value);
  }

  function handlePersonalSubmit(values: Personal) {
    const test = PersonalSchema.safeParse(values);

    if (!test.success) {
      const err = test.error.flatten().fieldErrors;
      setState('errors', setPersonalErrors(err));
    } else {
      setState('errors', clearPersonalErrors());
      setState('currentSection', 'plan');
    }
  }

  function updateCurrentPlan(e: PlanInput) {
    if (e.field === 'type') {
      setState('plan', 'type', e.value);
    } else {
      setState('plan', 'period', e.value);
    }
  }

  return (
    <FormContext.Provider
      value={[
        state,
        {
          updateCurrentSection,
          updatePersonalField,
          handlePersonalSubmit,
          updateCurrentPlan,
        },
      ]}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
