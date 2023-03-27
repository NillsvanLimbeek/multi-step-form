import { CurrentSection } from '@/lib/types';
import classNames from 'classnames';
import { Component } from 'solid-js';

interface Props {
  index: number;
  title: string;
  active: boolean;
}

export const SidebarStep: Component<Props> = (props) => {
  return (
    <div class="mb-8 flex items-center">
      <div
        class={classNames('sidebar-step', {
          'sidebar-step--active': props.active,
        })}
      >
        {props.index}
      </div>

      <div>
        <p class="text-sm uppercase text-light-gray">Step {props.index}</p>
        <p class="font-medium uppercase text-white">{props.title}</p>
      </div>
    </div>
  );
};
