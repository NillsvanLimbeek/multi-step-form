export type PlanType = 'arcade' | 'advanced' | 'pro';
export type PlanPrice = 9 | 12 | 15;
export type PeriodType = 'month' | 'year';

export interface Plan {
  icon: PlanType;
  title: PlanType;
  price: PlanPrice;
}

export type PlanInput =
  | {
      field: 'type';
      value: PlanType;
    }
  | { field: 'period'; value: PeriodType };
