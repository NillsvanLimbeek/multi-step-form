import { Component, Match, Switch } from 'solid-js';

import { useForm } from '@lib/context/use-form';

import { PersonalSection } from '@components/sections/PersonalSection';
import { Sidebar } from '@components/Sidebar';
import { PlanSection } from '@components/sections/PlanSection';

const App: Component = () => {
  const [form] = useForm();

  return (
    <main class="flex h-full w-full items-center justify-center bg-magnolia">
      <div class="flex rounded-xl bg-white p-5">
        <Sidebar activeSection={form.currentSection} />

        <Switch>
          <Match when={form.currentSection === 'personal'}>
            <PersonalSection />
          </Match>

          <Match when={form.currentSection === 'plan'}>
            <PlanSection />
          </Match>
        </Switch>
      </div>
    </main>
  );
};

export default App;
