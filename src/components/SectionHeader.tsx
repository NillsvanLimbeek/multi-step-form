import { Component } from 'solid-js';

interface Props {
  title: string;
  subtitle: string;
}

export const SectionHeader: Component<Props> = (props) => {
  return (
    <div class="mb-12">
      <h1 class="mb-1 text-3xl font-bold text-marine-blue">{props.title}</h1>
      <p class="text-cool-gray">{props.subtitle}</p>
    </div>
  );
};
