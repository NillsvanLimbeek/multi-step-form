import { Component, createSignal } from 'solid-js';
import classNames from 'classnames';

import { PLANS } from '@/lib/constants';
import { useForm } from '@/lib/context/use-form';

import { SectionHeader } from '../SectionHeader';
import { SelectPlan } from '../SelectPlan';

export const PlanSection: Component = () => {
  const [form, { updateCurrentSection, updateCurrentPlan }] = useForm();

  return (
    <section class="px-28 pt-10">
      <SectionHeader
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing"
      />

      <div class="mb-7 grid grid-cols-3 gap-4">
        {PLANS.map((plan) => (
          <SelectPlan
            plan={plan}
            active={plan.title === form.plan.type}
            updatePlan={(e) => updateCurrentPlan(e)}
            showMonthly={!form.plan.period}
          />
        ))}
      </div>

      <div class="flex items-center justify-center gap-4 rounded-md bg-alabaster p-4">
        <p
          class={classNames('font-semibold text-cool-gray', {
            'text-marine-blue': !form.plan.period,
          })}
        >
          Monthly
        </p>
        <input
          checked={form.plan.period}
          type="checkbox"
          class="toggle toggle-md bg-marine-blue checked:bg-marine-blue"
          onChange={() =>
            updateCurrentPlan({ field: 'period', value: !form.plan.period })
          }
        />
        <p
          class={classNames('font-semibold text-cool-gray', {
            'text-marine-blue': form.plan.period!,
          })}
        >
          Yearly
        </p>
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
