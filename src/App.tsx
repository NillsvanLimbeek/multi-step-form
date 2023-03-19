import { Component, createEffect, Show } from 'solid-js';

import { useForm } from '@lib/context/use-form';

import { PersonalSection } from '@components/sections/PersonalSection';
import { Sidebar } from '@components/Sidebar';

const App: Component = () => {
  const [form] = useForm();

  return (
    <main class="flex h-full w-full items-center justify-center bg-magnolia">
      <div class="flex rounded-xl bg-white p-5">
        <Sidebar activeSection={form.currentSection} />

        <PersonalSection />
      </div>
    </main>
  );
};

export default App;
