import { Personal } from './personal';
import { PeriodType, PlanInput, PlanType } from './plan';

export type FormContextState = {
  currentSection: number;
  personal: Personal;
  errors: Partial<Personal>;
  plan: {
    period: boolean; // true : 'year' ? 'month'
    type: PlanType;
  };
};

export type FormContextValue = [
  state: FormContextState,
  actions: {
    updateCurrentSection: (e: number) => void;
    updatePersonalField: (field: Field, value: string) => void;
    handlePersonalSubmit: (values: Personal) => void;
    updateCurrentPlan: (plan: PlanInput) => void;
  }
];

export type Field = 'name' | 'email' | 'phoneNumber';
