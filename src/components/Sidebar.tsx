import { Component, createSignal } from 'solid-js';
import bg from '../assets/images/bg-sidebar-desktop.svg';
import { SidebarStep } from './SidebarStep';

interface Props {
  activeSection: number;
}

const STEPS: { index: number; title: string }[] = [
  { index: 1, title: 'your info' },
  { index: 2, title: 'select plan' },
  { index: 3, title: 'add-ons' },
  { index: 4, title: 'summary' },
];

export const Sidebar: Component<Props> = (props) => {
  // const [active, setActive] = createSignal(1);

  return (
    <aside class="relative">
      <img src={bg} alt="sidebar background" />

      <div class="absolute top-10 left-10">
        {STEPS.map(({ index, title }) => (
          <SidebarStep
            index={index}
            title={title}
            active={index === props.activeSection}
          />
        ))}
      </div>
    </aside>
  );
};
