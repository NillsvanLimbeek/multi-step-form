export type PlanType = 'arcade' | 'advanced' | 'pro';
export type PeriodType = 'month' | 'year';

export interface Plan {
  icon: PlanType;
  title: PlanType;
  price: number;
}

export type PlanInput =
  | {
      field: 'type';
      value: PlanType;
    }
  | { field: 'period'; value: boolean };
