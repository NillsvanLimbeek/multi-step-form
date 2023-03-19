import { Personal } from './personal';

export type FormContextState = {
  currentSection: number;
  personal: Personal;
};

export type FormContextValue = [
  state: FormContextState,
  actions: {
    updateCurrentSection: (e: number) => void;
    updatePersonalField: (field: Field, value: string) => void;
  }
];

export type Field = 'name' | 'email' | 'phoneNumber';
