import { PeriodType } from '../types';

export function formatPeriod(period: PeriodType) {
  return period === 'month' ? 'mo' : 'yr';
}
