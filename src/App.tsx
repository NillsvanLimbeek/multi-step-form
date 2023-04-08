import { Component, Match, Switch } from 'solid-js';

import { useForm } from '@lib/context/use-form';

import { PersonalSection } from '@components/sections/PersonalSection';
import { Sidebar } from '@components/Sidebar';
import { PlanSection } from '@components/sections/PlanSection';
import { AddOnSection } from './components/sections/AddOnSection';
import { SummarySection } from './components/sections/SummarySection';
import { FinalSection } from './components/sections/FinalSection';

const App: Component = () => {
  const [form] = useForm();

  return (
    <main class="flex h-full w-full items-center justify-center bg-magnolia">
      <div class="flex h-[600px] w-[945px] rounded-xl bg-white p-5">
        <Sidebar activeSection={form.currentSection} />

        <Switch>
          <Match when={form.currentSection === 'personal'}>
            <PersonalSection />
          </Match>

          <Match when={form.currentSection === 'plan'}>
            <PlanSection />
          </Match>

          <Match when={form.currentSection === 'add-ons'}>
            <AddOnSection />
          </Match>

          <Match when={form.currentSection === 'summary'}>
            <SummarySection />
          </Match>

          <Match when={form.currentSection === 'thank-you'}>
            <FinalSection />
          </Match>
        </Switch>
      </div>
    </main>
  );
};

export default App;
