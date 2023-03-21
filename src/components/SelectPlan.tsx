import { Component, Match, Switch } from 'solid-js';

import { Plan } from '@/lib/types';
import { Arcade } from './icon/Advanced';
import { Advanced } from './icon/Arcade';
import { Pro } from './icon/Pro';

interface Props {
  plan: Plan;
}

export const SelectPlan: Component<Props> = ({ plan }) => {
  return (
    <button class="flex h-40 w-32 flex-col justify-between rounded-md border border-gray-300 p-4 hover:border-purple-blue">
      {/* TODO icon component */}
      <Switch>
        <Match when={plan.icon === 'arcade'}>
          <Arcade />
        </Match>
        <Match when={plan.icon === 'advanced'}>
          <Advanced />
        </Match>
        <Match when={plan.icon === 'pro'}>
          <Pro />
        </Match>
      </Switch>

      <div class="flex w-full flex-col items-start">
        <h1 class="font-semibold capitalize text-marine-blue">{plan.title}</h1>
        <p class="text-sm text-cool-gray">${plan.price}/mo</p>
      </div>
    </button>
  );
};
