import { createContext, useContext, ParentComponent } from 'solid-js';
import { createStore } from 'solid-js/store';

import { ADD_ONS, defaultState } from '@lib/constants';
import {
  AddOn,
  AddOnTitle,
  CurrentSection,
  Field,
  FormContextState,
  FormContextValue,
  Personal,
  PersonalSchema,
  PlanInput,
  PlanType,
} from '@lib/types';
import { setPersonalErrors, clearPersonalErrors } from '@lib/data';

const FormContext = createContext<FormContextValue>([
  defaultState,
  {
    updateCurrentSection: () => undefined,
    updatePersonalField: () => undefined,
    handlePersonalSubmit: () => undefined,
    updateCurrentPlan: () => undefined,
    updateAddOns: () => undefined,
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
      price: props.plan.price ?? defaultState.plan.price,
    },
    addOns: props.addOns ?? defaultState.addOns,
  });

  // PERSONAL SECTION
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

  // PLANS SECTION
  function getPlanPrice(plan: PlanType) {
    switch (plan) {
      case 'arcade':
        return state.plan.period === 'month' ? 9 : 90;
      case 'advanced':
        return state.plan.period === 'month' ? 12 : 120;
      case 'pro':
        return state.plan.period === 'month' ? 15 : 150;
    }
  }

  function updateCurrentPlan(e: PlanInput) {
    if (e.field === 'type') {
      setState('plan', 'type', e.value);
      setState('plan', 'price', getPlanPrice(e.value));
    } else {
      setState('plan', 'period', e.value === 'year' ? 'month' : 'year');
      setState('plan', 'price', getPlanPrice(state.plan.type));
    }
  }

  // ADD ONS SECTION
  function updateAddOns(e: AddOnTitle) {
    const addOn = ADD_ONS.find((addOn) => addOn.title === e);
    const selectedAddons = state.addOns.map((addOn) => addOn.title);

    if (addOn && !selectedAddons.includes(addOn.title)) {
      setState('addOns', [...state.addOns, addOn]);
    } else {
      const addOns = state.addOns.filter((addOn) => addOn.title !== e);
      setState('addOns', addOns);
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
          updateAddOns,
        },
      ]}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
