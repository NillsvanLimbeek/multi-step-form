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
    period: 'month',
    type: 'advanced',
    price: 12,
  },
  addOns: [],
};
