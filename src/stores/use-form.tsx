import { createStore } from 'solid-js/store';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email(),
  phoneNumber: z.string().min(1, { message: 'Phone number is required' }),
});

type Form = z.infer<typeof FormSchema>;

export function useForm() {
  const [form, setForm] = createStore<Form>({
    name: '',
    email: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = createStore<Partial<Form>>();

  function updateField(fieldName: string, value: string) {
    setForm({ [fieldName]: value });
  }

  function handleSubmit(values: Form) {
    const submit = FormSchema.safeParse(values);

    if (!submit.success) {
      const zodErrors = submit.error.flatten().fieldErrors;

      // TODO
      setErrors({
        name: zodErrors.name && String(zodErrors.name),
        email: zodErrors.email && String(zodErrors.email),
        phoneNumber: zodErrors.phoneNumber && String(zodErrors.phoneNumber),
      });
    } else {
      setErrors({ name: undefined, email: undefined, phoneNumber: undefined });
      console.log(submit);
    }
  }

  return { form, errors, updateField, handleSubmit };
}
