import { Personal } from './personal';
import { PeriodType, PlanInput, PlanType } from './plan';

type FormContextState = {
  currentSection: CurrentSection;
  personal: Personal;
  errors: Partial<Personal>;
  plan: {
    period: boolean; // true : 'year' ? 'month'
    type: PlanType;
  };
};

type FormContextValue = [
  state: FormContextState,
  actions: {
    updateCurrentSection: (e: CurrentSection) => void;
    updatePersonalField: (field: Field, value: string) => void;
    handlePersonalSubmit: (values: Personal) => void;
    updateCurrentPlan: (plan: PlanInput) => void;
  }
];

type Field = 'name' | 'email' | 'phoneNumber';
type CurrentSection = 'personal' | 'plan' | 'add-ons' | 'summary';

export type { FormContextState, FormContextValue, Field, CurrentSection };
