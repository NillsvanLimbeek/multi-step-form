import { Personal } from './personal';

export type FormContextState = {
  currentSection: number;
  personal: Personal;
  errors: Partial<Personal>;
};

export type FormContextValue = [
  state: FormContextState,
  actions: {
    updateCurrentSection: (e: number) => void;
    updatePersonalField: (field: Field, value: string) => void;
    handlePersonalSubmit: (values: Personal) => void;
  }
];

export type Field = 'name' | 'email' | 'phoneNumber';
