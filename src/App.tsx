import type { Component } from 'solid-js';
import { Sidebar } from './components/Sidebar';

const App: Component = () => {
  return (
    <main class="w-full h-full flex justify-center items-center bg-magnolia">
      <div class="bg-white p-5 rounded-xl">
        <Sidebar />
      </div>
    </main>
  );
};

export default App;
