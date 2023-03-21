import { Component } from 'solid-js';

import { PLANS } from '@/lib/constants';
import { useForm } from '@/lib/context/use-form';

import { SectionHeader } from '../SectionHeader';
import { SelectPlan } from '../SelectPlan';

export const PlanSection: Component = () => {
  const [_, { updateCurrentSection }] = useForm();

  return (
    <section class="px-28 pt-10">
      <SectionHeader
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing"
      />

      <div class="mb-7 grid grid-cols-3 gap-4">
        {PLANS.map((plan) => (
          <SelectPlan plan={plan} />
        ))}
      </div>

      <div class="flex items-center justify-center gap-4 rounded-md bg-alabaster p-4">
        <p class="font-semibold text-marine-blue">Monhtly</p>
        <input type="checkbox" class="bg-red toggle toggle-md" checked />
        <p class="font-semibold text-cool-gray">Yearly</p>
      </div>

      <div class="flex h-[33%] w-full items-end justify-between">
        <button
          class="font-semibold text-marine-blue hover:text-blue-800"
          onClick={() => updateCurrentSection(1)}
        >
          Go Back
        </button>
        <button class="btn bg-marine-blue hover:bg-blue-900">Next Step</button>
      </div>
    </section>
  );
};
