import { Component } from 'solid-js';

import { ThankYou } from '../icon/ThankYou';

export const FinalSection: Component = () => {
  return (
    <section class="flex flex-col items-center justify-center px-10">
      <div class="mb-7">
        <ThankYou />
      </div>

      <h1 class="mb-7 text-4xl font-semibold text-marine-blue">Thank you!</h1>
      <p class="text-center text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </section>
  );
};
