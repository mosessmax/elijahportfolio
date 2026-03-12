import React from 'react';
import { motion } from 'framer-motion';
import SpotifyNowPlaying from '../components/SpotifyNowPlaying';
import data from '../data/projects.json';

const asciiArt = `
███████╗██╗     ██╗     ██╗ █████╗ ██╗  ██╗
██╔════╝██║     ██║     ██║██╔══██╗██║  ██║
█████╗  ██║     ██║     ██║███████║███████║
██╔══╝  ██║     ██║██   ██║██╔══██║██╔══██║
███████╗███████╗██║╚█████╔╝██║  ██║██║  ██║
╚══════╝╚══════╝╚═╝ ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
`;
const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="font-mono animation-delay-1000 fade-in-element"
    >
      {/* ASCII Art Header */}
      <pre className="text-[5px] sm:text-[7px] leading-[1] mb-4 text-black overflow-x-auto">
        {asciiArt}
      </pre>

      {/* Hero Section */}
      <section className="flex flex-col gap-2 mb-6">
        <h1 className="text-[16px] sm:text-lg font-semibold flex flex-col sm:flex-row sm:gap-2 gap-1">
          {data.name}
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="inline-block self-start px-2 py-0.5 my-0.5 text-xs bg-black text-white transition-colors duration-300 w-auto whitespace-nowrap"
          >
            {data.title}_
          </motion.span>
        </h1>
        {data.bio.map((paragraph, index) => (
          <p key={index} className="text-xs leading-relaxed text-gray-700 sm:text-sm">
            {paragraph}
          </p>
        ))}
      </section>

      {/* Current / Availability */}
      <section className="mb-5 text-left">
        <h2 className="mb-1 text-sm font-semibold sm:text-base">now_</h2>
        <div className="flex flex-col gap-0.5 text-xs sm:text-sm">
          <p>
            currently building at <span className="font-semibold">{data.current}</span>
          </p>
          <p className="text-[#6A7282]">open to full-time projects or contract work</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-5 text-left">
        <h2 className="mb-1 text-sm font-semibold sm:text-base">projects_</h2>
        <div className="flex flex-col items-start text-left">
          {data.projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-start gap-0 mb-2 cursor-default"
            >
              <h3 className="text-xs transition cursor-pointer sm:text-sm hover:opacity-60 hover:underline">
                {project.title}
              </h3>
              <p className="text-[#6A7282] text-[10px] sm:text-xs">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Stack Section */}
      <section className="mb-5 text-left">
        <h2 className="mb-1 text-sm font-semibold sm:text-base">stack_</h2>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs sm:text-sm text-[#6A7282]">
          {data.stack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </section>

      {/* Spotify Now Playing */}
      <section className="mb-5">
        <SpotifyNowPlaying />
      </section>

      {/* Mobile Social Links */}
      <div className="sm:hidden flex flex-wrap gap-3 text-xs text-[#6A7282] mb-4">
        <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        <a href={`mailto:${data.links.email}`} className="hover:underline">Email</a>
        <a href={data.links.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        <a href={data.links.resume} target="_blank" rel="noopener noreferrer" className="hover:underline">Resume</a>
        <a href={data.links.twitter} target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
      </div>
    </motion.div>
  );
};

export default Home;
