import { z } from 'zod';

const PersonalSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email(),
  phoneNumber: z.string().min(1, { message: 'Phone number is required' }),
});

export type Personal = z.infer<typeof PersonalSchema>;
