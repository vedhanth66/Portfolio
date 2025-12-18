import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Star, ChevronRight } from 'lucide-react';
import { projects } from '../mock';

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 bg-cream overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-16 h-px bg-charcoal" />
            <span className="text-charcoal font-medium tracking-wider text-sm uppercase">Selected Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-charcoal">
              Featured<br />
              <span className="text-ash-dark italic font-light">Projects</span>
            </h2>
            <p className="text-charcoal max-w-md text-lg">
              A showcase of technical work spanning full-stack applications to AI-powered tools
            </p>
          </div>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className={`group relative ${
                project.featured && index === 0 ? 'md:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className={`relative h-full p-8 md:p-10 rounded-3xl border transition-all duration-500 cursor-pointer ${
                  project.featured
                    ? 'bg-charcoal border-charcoal hover:border-sage'
                    : 'bg-white border-ash/20 hover:border-sage/50 hover:shadow-editorial'
                }`}
                whileHover={{ y: -8 }}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sage text-charcoal text-xs font-medium rounded-full">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Project Number */}
                <span className={`font-display text-6xl md:text-7xl font-bold opacity-15 absolute top-4 left-6 ${
                  project.featured ? 'text-sage-light' : 'text-charcoal'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative pt-12 space-y-6">
                  {/* Title */}
                  <h3 className={`font-display text-2xl md:text-3xl font-semibold transition-colors duration-300 ${
                    project.featured
                      ? 'text-cream group-hover:text-sage'
                      : 'text-charcoal group-hover:text-sage-dark'
                  }`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-base leading-relaxed ${
                    project.featured ? 'text-ash' : 'text-charcoal'
                  }`}>
                    {project.description.slice(0, 150)}...
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                          project.featured
                            ? 'bg-sage/20 text-sage border border-sage/30'
                            : 'bg-charcoal/5 text-charcoal border border-charcoal/10'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        project.featured ? 'text-ash' : 'text-charcoal-light'
                      }`}>
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Expandable Highlights */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className={`pt-4 border-t ${
                          project.featured ? 'border-ash/20' : 'border-charcoal/10'
                        }`}>
                          <h4 className={`text-sm font-medium uppercase tracking-wider mb-3 ${
                            project.featured ? 'text-sage' : 'text-charcoal'
                          }`}>
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {project.highlights.slice(0, 3).map((highlight, i) => (
                              <li key={i} className={`flex items-start gap-2 text-sm ${
                                project.featured ? 'text-ash' : 'text-charcoal'
                              }`}>
                                <ChevronRight className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                        project.featured
                          ? 'text-sage hover:text-sage-light'
                          : 'text-charcoal hover:text-sage-dark'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ x: 4 }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-sage text-charcoal text-sm font-medium rounded-full hover:bg-sage-light transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Live Demo
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Effect Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 rounded-b-3xl ${
                    project.featured ? 'bg-sage' : 'bg-sage-dark'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: hoveredProject === project.id ? '100%' : 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                />
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
