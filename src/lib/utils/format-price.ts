import { PeriodType } from '@/lib/types';

export function formatPrice(period: PeriodType, price: number) {
  return period === 'year' ? price * 10 : price;
}
