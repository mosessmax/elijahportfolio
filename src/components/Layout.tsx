import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-mono">
      <div className="sm:fixed top-0 left-0 right-0 z-50">
        <div className="h-8 bg-white"></div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="origin-top h-[52px] sm:bg-[#FBFBFB] sm:border-[1px] border-[rgba(0,0,0,0.1)] max-w-[720px] mx-auto"
        >
          <div className="max-w-[720px] h-full mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 p-4">
            <img 
              alt="logo" 
              loading="lazy" 
              src="/sign.png"
              className="h-6 w-auto"
            />
            <Navigation />
          </div>
        </motion.div>
      </div>

      <main>
        <div className="my-6 mt-[180px] sm:mt-[160px] w-full max-w-full md:max-w-[720px] mx-auto px-4">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
