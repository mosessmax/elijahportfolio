import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Distributed E-commerce API",
      description: "Microservices-based e-commerce platform built with Node.js, handling 10k+ concurrent users. Features order processing, inventory management, and payment integration with Redis caching and PostgreSQL.",
      tech: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      type: "Backend",
      link: "https://github.com/remilekun-elijah",
      status: "Production"
    },
    {
      title: "Real-time Analytics Engine",
      description: "High-performance data processing pipeline that ingests and processes millions of events per day. Built with Python, Kafka, and ClickHouse for real-time dashboard analytics.",
      tech: ["Python", "Kafka", "ClickHouse", "Docker", "Kubernetes"],
      type: "Data Engineering",
      link: "https://github.com/remilekun-elijah",
      status: "Production"
    },
    {
      title: "Multi-tenant SaaS Platform",
      description: "Scalable multi-tenant application architecture with role-based access control, automated billing, and resource isolation. Supports thousands of organizations with 99.9% uptime.",
      tech: ["Node.js", "PostgreSQL", "Redis", "AWS", "TypeScript"],
      type: "Backend",
      link: "https://github.com/remilekun-elijah",
      status: "Production"
    },
    {
      title: "GraphQL API Gateway",
      description: "Unified GraphQL gateway that aggregates multiple microservices, implements caching strategies, and provides real-time subscriptions. Reduced client queries by 60%.",
      tech: ["GraphQL", "Node.js", "Apollo", "Redis", "Docker"],
      type: "API",
      link: "https://github.com/remilekun-elijah",
      status: "Production"
    },
    {
      title: "Chat Application Backend",
      description: "Real-time messaging system with WebSocket connections, message encryption, file sharing, and push notifications. Handles 50k+ concurrent connections.",
      tech: ["Node.js", "Socket.io", "MongoDB", "Redis", "AWS S3"],
      type: "Real-time",
      link: "https://github.com/remilekun-elijah",
      status: "Production"
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, Spotify integration, and optimized performance.",
      tech: ["React", "TypeScript", "Tailwind", "Vite", "Spotify API"],
      type: "Frontend",
      link: "https://github.com/remilekun-elijah/portfolio",
      status: "Live"
    }
  ];

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

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl"
    >
      {/* Header */}
      <motion.section variants={itemVariants} className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Projects</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Backend systems and full-stack applications I've built
        </p>
      </motion.section>

      {/* Featured Projects Grid */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-8">
          Featured Work
        </h2>
        
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="group bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 hover:border-gray-300/50 dark:hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                        {project.type}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1"
                >
                  <ArrowUpRight size={20} />
                </motion.a>
              </div>
              
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + techIndex * 0.05 }}
                    className="text-xs px-2 py-1 bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-300/80 dark:hover:bg-gray-600/80 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Open Source */}
      <motion.section 
        variants={itemVariants}
        className="bg-gray-50/50 dark:bg-gray-800/30 rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50"
      >
        <h2 className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
          Open Source
        </h2>
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          I contribute to various open source projects and maintain several packages related to backend development. 
          Check out my{' '}
          <motion.a 
            href="https://github.com/remilekun-elijah" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ x: 2 }}
            className="text-gray-900 dark:text-white hover:underline inline-flex items-center gap-1"
          >
            GitHub profile
            <ArrowUpRight size={12} />
          </motion.a>
          {' '}for more projects and contributions.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default Projects;