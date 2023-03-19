import { createContext, useContext, ParentComponent } from 'solid-js';
import { createStore } from 'solid-js/store';

import { defaultState } from '../constants/default-state';
import { Field, FormContextState, FormContextValue } from '../types';

const FormContext = createContext<FormContextValue>([
  defaultState,
  {
    updateCurrentSection: () => undefined,
    updatePersonalField: () => undefined,
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
    currentSection: props.currentSection ?? defaultState.currentSection,
  });

  function updateCurrentSection(e: number) {
    setState('currentSection', e);
  }

  function updatePersonalField(field: Field, value: string) {
    setState('personal', field, value);
  }

  return (
    <FormContext.Provider
      value={[state, { updateCurrentSection, updatePersonalField }]}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
