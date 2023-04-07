import { Component, For } from 'solid-js';

import { useForm } from '@/lib/context/use-form';
import { formatPeriod, formatPrice, formatTitle } from '@/lib/utils';

import { SectionHeader } from '../SectionHeader';
import { AddOnSummary } from '../AddOnSummary';

export const SummarySection: Component = () => {
  const [form, { updateCurrentSection }] = useForm();

  function totalPrice() {
    return form.addOns.reduce(
      (acc, addOn) => acc + formatPrice(form.plan.period, addOn.price),
      form.plan.price
    );
  }

  return (
    <section class="px-28 pt-10">
      <SectionHeader
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming"
      />

      <div class="mb-5 rounded-md bg-alabaster p-5">
        <div class="flex items-center justify-between">
          <div class="">
            <h2 class="font-semibold capitalize text-marine-blue">
              {form.plan.type} ({form.plan.period})
            </h2>

            <p>Change</p>
          </div>

          <p class="font-semibold text-marine-blue">
            ${form.plan.price}/{formatPeriod(form.plan.period)}
          </p>
        </div>

        <div class="divider" />

        <For each={form.addOns}>
          {(addOn) => (
            <AddOnSummary
              title={addOn.title}
              price={addOn.price}
              period={form.plan.period}
            />
          )}
        </For>
      </div>

      <div class="flex justify-between px-5">
        <p class="text-cool-gray">Total (per {form.plan.period})</p>
        <p class="text-xl font-semibold text-purple-blue">
          +${totalPrice}/{formatPeriod(form.plan.period)}
        </p>
      </div>

      <div class="flex h-[20%] w-full items-end justify-between">
        <button
          class="font-semibold text-marine-blue hover:text-blue-800"
          onClick={() => updateCurrentSection('add-ons')}
        >
          Go Back
        </button>
        {/* <button
          class="btn bg-marine-blue hover:bg-blue-900"
          onClick={() => updateCurrentSection('summary')}
        >
          Next Step
        </button> */}
      </div>
    </section>
  );
};
