import React, { useState, useEffect } from 'react'
import { Sun, Moon } from '@phosphor-icons/react';
import SpotifyNowPlaying from './SpotifyNowPlaying';

const Header: React.FC = () => (
  <header className="flex flex-col sm:text-sm text-base dark:text-slate-12 gap-1 mb-10 text-slate-light-12">
    <h1 className="font-geist font-bold text-2xl">Remilekun Elijah</h1> 
    <h2>fullstack developer from Lagos NGA.</h2>
    <SpotifyNowPlaying />
  </header>
);

const AboutSection: React.FC = () => (
  <section className="flex flex-col gap-6">
    <h3 className="dark:text-slate-11 dark:opacity-[0.66] sm:text-xs text-slate-light-11 text-sm uppercase">~/ About</h3>
    <div className="sm:text-sm text-base text-balance">
      hello world, i'm the developer who turns complex ideas into sleek, functional realities. whether it’s architecting robust backends or crafting intuitive frontends, i thrive on solving problems and building things that just work. code is my tool, but delivering real-world results is my game. let’s turn your vision into something tangible and awesome.
    </div>
  </section>
);

const AvailabilitySection: React.FC = () => (
  <section className="flex flex-col gap-6">
    <h3 className="dark:text-slate-11 dark:opacity-[0.66] sm:text-xs text-slate-light-11 text-sm uppercase">~/ Skills & Availability</h3>
    <div className="sm:text-sm text-base text-balance">
      I’m fluent in modern technologies like JS/TS, React, Node.js, MySQL, Express.js, and more. whether it’s full-time projects or contract work, i bring a strong command of the latest tools to every challenge. currently, i'm making things happen at
      <span className="px-[3px] relative">
        <a className="border-b-[0.5px] dark:border-b-slate-11 dark:hover:text-slate-12 transition-all border-b-slate-light-11 dark:hover:border-b-slate-12 group-hover:border-b-slate-light-12 hover:text-slate-light-12 underline" href="https://inovantics.com" rel="noopener noreferrer" target="_blank">Innovanctics Limited </a>
      </span>
      let’s build something great together.<a className="border-b-[0.5px] dark:border-b-slate-11 dark:hover:text-slate-12 transition-all border-b-slate-light-11 dark:hover:border-b-slate-12 group-hover:border-b-slate-light-12 hover:text-slate-light-12"></a>
    </div>
  </section>
);

const Footer: React.FC = () => {
  const handleCopyEmail = () => {
    const email = "remilekunelijah21997@gmail.com";
    navigator.clipboard.writeText(email);
  };

  return (
    <footer className="flex flex-col gap-6 max-w-[442px]">
      <h3 className="sm:text-xs text-sm uppercase opacity-[0.66]">~/ On the internet</h3>
      <ul className="flex flex-col sm:text-sm text-base gap-3">
        <li className="flex group justify-between">
          <span>Email</span>
          <button className="flex group dark:hover:text-slate-12 flex-row gap-1 hover:text-slate-light-11 items-center sm:text-sm text-base transition-all" type="button" onClick={handleCopyEmail}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 1 }}>
              <title>Copy</title>
              <path d="M10 6V3.5C10 2.67157 9.32843 2 8.5 2H3.5C2.67157 2 2 2.67157 2 3.5V8.5C2 9.32843 2.67157 10 3.5 10H6M7.5 6H12.5C13.3284 6 14 6.67157 14 7.5V12.5C14 13.3284 13.3284 14 12.5 14H7.5C6.67157 14 6 13.3284 6 12.5V7.5C6 6.67157 6.67157 6 7.5 6Z" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-slate-11 stroke-slate-light-12 dark:group-hover:stroke-slate-12 group-hover:stroke-slate-light-11"></path>
            </svg>
            <span className="border-b-[0.5px] dark:border-b-slate-11 border-b-slate-light-12 dark:group-hover:border-b-slate-12 group-hover:border-b-slate-light-11">remilekunelijah21997@gmail.com</span>
          </button>
        </li>
        <li className="flex group justify-between">
          <span>Github</span>
          <a className="border-b-[0.5px] dark:border-b-slate-11 dark:hover:text-slate-12 transition-all border-b-slate-light-12 dark:group-hover:border-b-slate-12 group-hover:border-b-slate-light-11 hover:text-slate-light-11" href="https://github.com/Remilekun-Elijah" rel="noopener noreferrer" target="_blank">/remilekun-elijah</a>
        </li>
        <li className="flex group justify-between">
          <span>Resume (read.cv)</span>
          <a className="border-b-[0.5px] dark:border-b-slate-11 dark:hover:text-slate-12 transition-all border-b-slate-light-12 dark:group-hover:border-b-slate-12 group-hover:border-b-slate-light-11 hover:text-slate-light-11" href="https://read.cv/mosess" rel="noopener noreferrer" target="_blank">@mosess</a>
        </li>
        <li className="flex group justify-between">
          <span>LinkedIn</span>
          <a className="border-b-[0.5px] dark:border-b-slate-11 dark:hover:text-slate-12 transition-all border-b-slate-light-12 dark:group-hover:border-b-slate-12 group-hover:border-b-slate-light-11 hover:text-slate-light-11" href="https://www.linkedin.com/in/remilekunelijah/" rel="noopener noreferrer" target="_blank">/in/remilekunelijah</a>
        </li>
        <li className="flex group justify-between">
          <span>Twitter (X)</span>
          <a className="border-b-[0.5px] dark:border-b-slate-11 dark:hover:text-slate-12 transition-all border-b-slate-light-12 dark:group-hover:border-b-slate-12 group-hover:border-b-slate-light-11 hover:text-slate-light-11" href="https://x.com/remilekunelijah" rel="noopener noreferrer" target="_blank">@remilekunelijah</a>
        </li>
      </ul>
    </footer>
  );
};


// app  
const App: React.FC = () => {
const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // useEffect(() => {
  //   const hour = new Date().getHours();
  //   if (hour >= 18 || hour < 6) {
  //     setIsDarkMode(true);
  //   } else {
  //     setIsDarkMode(false);
  //   }
  // }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : '';
  }, [isDarkMode]);

  return (
    <div className={`dark:text-slate-11 bg-slate-light-1 dark:bg-slate-1 dark:selection:bg-slate-light-1 dark:selection:text-light-slate-12 font-geist p-16 px-8 selection:bg-slate-1 selection:text-slate-12 sm:px-16 text-slate-light-12 ${isDarkMode ? 'dark' : ''}`}>
      {/* <button onClick={toggleDarkMode} className="mb-4 p-2 border rounded">Toggle Dark Mode</button> */}
      <button onClick={toggleDarkMode}>
  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
</button>
    <main className="flex flex-col gap-16 max-w-[460px]">
      <Header />
      <AboutSection />
      <AvailabilitySection />
      <Footer />
    </main>
  </div>
);
}

export default App;
