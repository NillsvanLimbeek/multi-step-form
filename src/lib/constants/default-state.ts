import { FormContextState } from '../types';

export const defaultState: FormContextState = {
  currentSection: 1,
  personal: {
    name: '',
    email: '',
    phoneNumber: '',
  },
  errors: {},
};
