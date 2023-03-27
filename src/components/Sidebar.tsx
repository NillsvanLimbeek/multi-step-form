import { CurrentSection } from '@/lib/types';
import { Component, createSignal } from 'solid-js';

import bg from '../assets/images/bg-sidebar-desktop.svg';
import { STEPS } from '@/lib/constants/steps';

import { SidebarStep } from './SidebarStep';

interface Props {
  activeSection: CurrentSection;
}

export const Sidebar: Component<Props> = (props) => {
  return (
    <aside class="relative">
      <img src={bg} alt="sidebar background" />

      <div class="absolute top-10 left-10">
        {STEPS.map((step, index) => (
          <SidebarStep
            index={index + 1}
            title={step.title}
            active={step.section === props.activeSection}
          />
        ))}
      </div>
    </aside>
  );
};
