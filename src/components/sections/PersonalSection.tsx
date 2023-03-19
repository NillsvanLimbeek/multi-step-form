import { Component } from 'solid-js';

import { useForm } from '@lib/context/use-form';

import { InputField } from '../InputField';
import { SectionHeader } from '../SectionHeader';

export const PersonalSection: Component = () => {
  const [form, { updatePersonalField, handlePersonalSubmit }] = useForm();

  return (
    <section class="px-28 pt-10">
      <SectionHeader
        title="Personal Info"
        subtitle="Please provide your name, email and phone number."
      />

      <form
        class="form-height"
        onSubmit={(e) => {
          e.preventDefault();
          handlePersonalSubmit(form.personal);
        }}
      >
        <InputField
          label="name"
          value={form.personal.name}
          error={form.errors.name}
          setValue={(e) => updatePersonalField('name', e)}
        />
        <InputField
          label="email"
          value={form.personal.email}
          error={form.errors.email}
          setValue={(e) => updatePersonalField('email', e)}
        />
        <InputField
          label="phone number"
          value={form.personal.phoneNumber}
          error={form.errors.phoneNumber}
          setValue={(e) => updatePersonalField('phoneNumber', e)}
        />

        <div class="flex h-[33%] items-end justify-end">
          <input
            type="submit"
            class="btn bg-marine-blue hover:bg-blue-900"
            value="Next step"
          />
        </div>
      </form>
    </section>
  );
};
