import { FormContextState } from '../types';

export const defaultState: FormContextState = {
  currentSection: 'personal',
  personal: {
    name: '',
    email: '',
    phoneNumber: '',
  },
  errors: {},
  plan: {
    period: true,
    type: 'advanced',
  },
};
