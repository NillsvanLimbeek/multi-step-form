/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import { FormProvider } from '@lib/context/use-form';
import { defaultState } from '@lib/constants/default-state';

import './index.css';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  );
}

render(
  () => (
    <FormProvider {...defaultState}>
      <App />
    </FormProvider>
  ),
  root!
);
