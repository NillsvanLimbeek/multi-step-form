import { createContext, useContext, ParentComponent } from 'solid-js';
import { createStore } from 'solid-js/store';

import { defaultState } from '@lib/constants';
import {
  Field,
  FormContextState,
  FormContextValue,
  Personal,
  PersonalSchema,
} from '@lib/types';
import { setPersonalErrors, clearPersonalErrors } from '@lib/data';

const FormContext = createContext<FormContextValue>([
  defaultState,
  {
    updateCurrentSection: () => undefined,
    updatePersonalField: () => undefined,
    handlePersonalSubmit: () => undefined,
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
  });

  function updateCurrentSection(e: number) {
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
      setState('currentSection', 2);
    }
  }

  return (
    <FormContext.Provider
      value={[
        state,
        { updateCurrentSection, updatePersonalField, handlePersonalSubmit },
      ]}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
