import classNames from 'classnames';
import { Component } from 'solid-js';

interface Props {
  index: number;
  title: string;
  active: boolean;
}

export const SidebarStep: Component<Props> = (props) => {
  return (
    <div class="flex items-center mb-8">
      <div
        class={classNames('sidebar-step', {
          'sidebar-step--active': props.active,
        })}
      >
        {props.index}
      </div>

      <div>
        <p class="uppercase text-light-gray text-sm">Step {props.index}</p>
        <p class="uppercase text-white font-medium">{props.title}</p>
      </div>
    </div>
  );
};
