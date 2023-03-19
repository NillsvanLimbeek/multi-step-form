import { Personal } from '../types';

type Input = {
  name?: string[] | undefined;
  email?: string[] | undefined;
  phoneNumber?: string[] | undefined;
};

export function setPersonalErrors(err: Input): Partial<Personal> {
  return {
    name: err.name && String(err.name),
    email: err.email && String(err.email),
    phoneNumber: err.phoneNumber && String(err.phoneNumber),
  };
}

export function clearPersonalErrors(): Partial<Personal> {
  return {
    name: undefined,
    email: undefined,
    phoneNumber: undefined,
  };
}
