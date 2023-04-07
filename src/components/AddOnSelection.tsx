import { Component } from 'solid-js';
import classNames from 'classnames';

import { AddOn, AddOnTitle, PeriodType } from '@/lib/types';
import { formatPeriod, formatPrice, formatTitle } from '@/lib/utils';

interface Props {
  addOn: AddOn;
  active: boolean;
  period: PeriodType;
  addAddOn: (e: AddOnTitle) => void;
}

export const AddOnSelection: Component<Props> = (props) => {
  return (
    <div
      class={classNames(
        'mb-4 flex w-[400px] items-center justify-between rounded-md border border-light-gray p-5',
        { 'border-purple-blue bg-alabaster': props.active }
      )}
    >
      <div class="flex items-center">
        <input
          type="checkbox"
          checked={props.active}
          onChange={() => props.addAddOn(props.addOn.title)}
          class="checkbox-primary checkbox checkbox-sm mr-5 rounded-md"
        />
        <div class="">
          <h1 class="font-semibold text-marine-blue">
            {formatTitle(props.addOn.title)}
          </h1>
          <p class="text-sm text-cool-gray">{props.addOn.subtitle}</p>
        </div>
      </div>

      <p class="text-purple-blue">
        +€{formatPrice(props.period, props.addOn.price)}/
        {formatPeriod(props.period)}
      </p>
    </div>
  );
};
