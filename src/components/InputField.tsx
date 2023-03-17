import { Component } from 'solid-js';
import classNames from 'classnames';

interface Props {
  label: string;
  value: string;
  error?: string;
  setValue: (e: string) => void;
}

export const InputField: Component<Props> = (props) => {
  return (
    <div class="flex flex-col mb-5">
      <label class="label pt-0" for={props.label}>
        <span class="label-text capitalize text-marine-blue">
          {props.label}
        </span>
        {props.error && (
          <span class="label-text-alt text-strawberry-red font-semibold">
            {props.error}
          </span>
        )}
      </label>

      <input
        class={classNames('input input-bordered input-md', {
          'input-error': props.error,
        })}
        type="text"
        id={props.label}
        value={props.value}
        onInput={(e) => props.setValue(e.currentTarget.value)}
      />
    </div>
  );
};
