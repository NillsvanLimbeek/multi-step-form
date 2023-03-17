import { Component, createEffect, createSignal } from 'solid-js';
import { InputField } from './components/InputField';
import { Sidebar } from './components/Sidebar';
import { useForm } from './stores/use-form';

const App: Component = () => {
  const { form, errors, updateField, handleSubmit } = useForm();

  return (
    <main class="w-full h-full flex justify-center items-center bg-magnolia">
      <div class="bg-white p-5 rounded-xl flex">
        <Sidebar />

        <div class="px-28 pt-10">
          <h1 class="text-3xl font-bold text-marine-blue mb-1">
            Personal Info
          </h1>
          <p class="mb-12 text-cool-gray">
            Please provide your name, email and phone number.
          </p>

          <form
            class="form-height"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(form);
            }}
          >
            <InputField
              label="name"
              value={form.name}
              error={errors.name}
              setValue={(e) => updateField('name', e)}
            />
            <InputField
              label="email"
              value={form.email}
              error={errors.email}
              setValue={(e) => updateField('email', e)}
            />
            <InputField
              label="phone number"
              value={form.phoneNumber}
              error={errors.phoneNumber}
              setValue={(e) => updateField('phoneNumber', e)}
            />

            <div class="h-[33%] flex justify-end items-end">
              <input
                type="submit"
                class="btn bg-marine-blue hover:bg-blue-900"
                value="Next step"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default App;
