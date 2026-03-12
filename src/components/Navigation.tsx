import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/projects.json';

const Navigation: React.FC = () => {
  const navItems = [
    { href: data.links.linkedin, label: 'LinkedIn', external: true },
    { href: `mailto:${data.links.email}`, label: 'Email', external: false },
    { href: data.links.github, label: 'GitHub', external: true },
    { href: data.links.resume, label: 'Resume', external: true },
    { href: data.links.twitter, label: 'Twitter', external: true },
  ];

  return (
    <motion.ul 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="hidden sm:flex flex-row gap-4 text-xs"
    >
      {navItems.map((item, index) => (
        <li key={index}>
          {item.external ? (
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href={item.href}
              className="hover:underline underline-offset-2 transition-all"
            >
              {item.label}
            </a>
          ) : (
            <a 
              href={item.href}
              className="hover:underline underline-offset-2 transition-all"
            >
              {item.label}
            </a>
          )}
        </li>
      ))}
    </motion.ul>
  );
};

export default Navigation;
