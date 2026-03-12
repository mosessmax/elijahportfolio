import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const backendTech = [
    "Node.js & Express.js", "Python & Django/FastAPI", "PostgreSQL & MongoDB", 
    "Redis & Caching", "Docker & Kubernetes", "AWS & Cloud Architecture", "Microservices & APIs"
  ];

  const frontendTech = [
    "React & TypeScript", "Next.js & SSR", "Tailwind CSS", 
    "Git & Version Control", "Testing & TDD", "CI/CD Pipelines", "System Design"
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-5xl"
    >
      {/* Header */}
      <motion.section variants={itemVariants} className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">About Me</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Backend engineer with a passion for building scalable systems
        </p>
      </motion.section>

      {/* Main Grid Layout */}
      <div className="grid gap-8 lg:gap-12">
        
        {/* Background Story - Full Width */}
        <motion.section 
          variants={cardVariants}
          className="bg-gray-50/50 dark:bg-gray-800/30 rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50"
        >
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
            Background
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            I'm a backend engineer based in Lagos, Nigeria, with a deep passion for architecting robust, 
            scalable systems that handle real-world complexity. My journey in software development has been 
            driven by a fascination with how data flows through systems and how to optimize every layer 
            for performance and reliability.
          </p>
        </motion.section>

        {/* Technical Skills - Grid */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">
            Technical Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="bg-gray-50/50 dark:bg-gray-800/30 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Backend Technologies</h3>
              <div className="grid grid-cols-1 gap-2">
                {backendTech.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/30 transition-colors"
                  >
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="bg-gray-50/50 dark:bg-gray-800/30 rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Frontend & Tools</h3>
              <div className="grid grid-cols-1 gap-2">
                {frontendTech.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/30 transition-colors"
                  >
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Philosophy & Personal - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.section 
            variants={cardVariants}
            className="bg-gray-50/50 dark:bg-gray-800/30 rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50"
          >
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
              Philosophy
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              I believe great backend systems are invisible to end users but fundamental to great user experiences. 
              My approach focuses on writing clean, maintainable code, designing for scale from day one, 
              and building systems that can evolve with changing business needs.
            </p>
          </motion.section>

          <motion.section 
            variants={cardVariants}
            className="bg-gray-50/50 dark:bg-gray-800/30 rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50"
          >
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
              When I'm Not Coding
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              When I'm not architecting backend systems or optimizing database queries, you'll find me exploring 
              new technologies, contributing to open source projects, or diving deep into system design patterns 
              and performance optimization techniques.
            </p>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default About;