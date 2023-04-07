import { Component } from 'solid-js';

import { formatPeriod, formatPrice, formatTitle } from '@/lib/utils';
import { PeriodType } from '@/lib/types';

interface Props {
  title: string;
  price: number;
  period: PeriodType;
}

export const AddOnSummary: Component<Props> = (props) => {
  return (
    <div class="mb-2 flex justify-between">
      <p class="text-cool-gray">{formatTitle(props.title)}</p>
      <p class="text-marine-blue">
        +${formatPrice(props.period, props.price)}/{formatPeriod(props.period)}
      </p>
    </div>
  );
};
