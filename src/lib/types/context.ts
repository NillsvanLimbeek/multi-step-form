import { AddOnTitle } from './add-on';
import { Personal } from './personal';
import { PlanInput, PlanType } from './plan';

type FormContextState = {
  currentSection: CurrentSection;
  personal: Personal;
  errors: Partial<Personal>;
  plan: {
    period: boolean; // true : 'year' ? 'month'
    type: PlanType;
  };
  addOns: AddOnTitle[];
};

type FormContextValue = [
  state: FormContextState,
  actions: {
    updateCurrentSection: (e: CurrentSection) => void;
    updatePersonalField: (field: Field, value: string) => void;
    handlePersonalSubmit: (values: Personal) => void;
    updateCurrentPlan: (plan: PlanInput) => void;
    updateAddOns: (addOn: AddOnTitle) => void;
  }
];

type Field = 'name' | 'email' | 'phoneNumber';
type CurrentSection = 'personal' | 'plan' | 'add-ons' | 'summary';

export type { FormContextState, FormContextValue, Field, CurrentSection };
