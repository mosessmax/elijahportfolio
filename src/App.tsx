import React from 'react'

const Header: React.FC = () => (
  <header className="flex flex-col sm:text-sm text-base dark:text-slate-12 gap-1 mb-10 text-slate-light-12">
    <h1>Remilkeun Elijah</h1>
    <h2>fullstack developer from Lagos NGA.</h2>
  </header>
);

const AboutSection: React.FC = () => (
  <section className="flex flex-col gap-6">
    <h3 className="dark:text-slate-11 dark:opacity-[0.66] sm:text-xs text-slate-light-11 text-sm uppercase">About</h3>
    <div className="sm:text-sm text-base text-balance">
      hello world, i'm the developer who turns complex ideas into sleek, functional realities. whether it’s architecting robust backends or crafting intuitive frontends, i thrive on solving problems and building things that just work. code is my tool, but delivering real-world results is my game. let’s turn your vision into something tangible and awesome.
    </div>
  </section>
);


// app  
const App: React.FC = () => (
  <body className="dark:text-slate-11 bg-slate-light-1 dark:bg-slate-1 dark:selection:bg-slate-light-1 dark:selection:text-light-slate-12 font-neueMontreal p-16 px-8 selection:bg-slate-1 selection:text-slate-12 sm:px-16 text-slate-light-12">
    <main className="flex flex-col gap-16 max-w-[460px]">
      <Header />
      <AboutSection />
    </main>
  </body>
);

export default App;
