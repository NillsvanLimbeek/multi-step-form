import { Component, createSignal } from 'solid-js';
import classNames from 'classnames';

import { AddOn, AddOnTitle } from '@/lib/types';

interface Props {
  addOn: AddOn;
  active: boolean;
  yearly: boolean;
  addAddOn: (e: AddOnTitle) => void;
}

export const AddOnSelection: Component<Props> = (props) => {
  const [checked, setChecked] = createSignal(false);

  function formatTitle(title: string) {
    const formatted = title.split('-').join(' ');
    return `${title.charAt(0).toUpperCase()}${formatted.slice(1)}`;
  }

  function formatPrice(price: number) {
    return props.yearly ? price * 10 : price;
  }

  return (
    <div
      class={classNames(
        'mb-4 flex w-[400px] items-center justify-between rounded-md border border-light-gray p-5',
        { 'border-purple-blue bg-alabaster': checked() }
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

      <p class="text-purple-blue">+€{formatPrice(props.addOn.price)}/yr</p>
    </div>
  );
};
