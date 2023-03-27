import { Component, Match, Switch } from 'solid-js';
import classNames from 'classnames';

import { Plan, PlanInput, PlanType } from '@/lib/types';
import { Arcade } from './icon/Advanced';
import { Advanced } from './icon/Arcade';
import { Pro } from './icon/Pro';

interface Props {
  plan: Plan;
  active: boolean;
  showMonthly: boolean;
  updatePlan: (e: PlanInput) => void;
}

export const SelectPlan: Component<Props> = (props) => {
  return (
    <button
      class={classNames(
        'flex h-40 w-32 flex-col justify-between rounded-md border border-gray-300 p-4 hover:border-purple-blue',
        { 'bg-magnolia': props.active }
      )}
      onClick={() =>
        props.updatePlan({ field: 'type', value: props.plan.title })
      }
    >
      {/* TODO icon component */}
      <Switch>
        <Match when={props.plan.icon === 'arcade'}>
          <Arcade />
        </Match>
        <Match when={props.plan.icon === 'advanced'}>
          <Advanced />
        </Match>
        <Match when={props.plan.icon === 'pro'}>
          <Pro />
        </Match>
      </Switch>

      <div class="flex w-full flex-col items-start">
        <h1 class="font-semibold capitalize text-marine-blue">
          {props.plan.title}
        </h1>
        {props.showMonthly && (
          <p class="text-sm text-cool-gray">${props.plan.price}/mo</p>
        )}
      </div>
    </button>
  );
};
