import { Component, For } from 'solid-js';
import { SectionHeader } from '../SectionHeader';

import { ADD_ONS } from '@/lib/constants';
import { useForm } from '@/lib/context/use-form';

import { AddOnSelection } from '../AddOnSelection';

export const AddOnSection: Component = () => {
  const [form, { updateCurrentSection, updateAddOns }] = useForm();

  function getActiveAddOns() {
    return form.addOns.map((addOn) => addOn.title);
  }

  return (
    <section class="flex flex-col px-28 pt-10">
      <SectionHeader
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience"
      />

      <div class="flex flex-col">
        <For each={ADD_ONS}>
          {(addOn) => (
            <AddOnSelection
              addOn={addOn}
              period={form.plan.period}
              active={getActiveAddOns().includes(addOn.title)}
              addAddOn={(e) => updateAddOns(e)}
            />
          )}
        </For>
      </div>

      <div class="flex w-full grow items-end justify-between">
        <button
          class="font-semibold text-marine-blue hover:text-blue-800"
          onClick={() => updateCurrentSection('plan')}
        >
          Go Back
        </button>
        <button
          class="btn bg-marine-blue hover:bg-blue-900"
          onClick={() => updateCurrentSection('summary')}
        >
          Next Step
        </button>
      </div>
    </section>
  );
};
