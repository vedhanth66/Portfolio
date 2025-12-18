import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Code2, Database, Wrench, BookOpen, Brain, Layers } from 'lucide-react';
import { skills } from '../mock';

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { id: 'all', label: 'All', icon: Layers },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frameworks', label: 'Frameworks', icon: Wrench },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'concepts', label: 'Concepts', icon: BookOpen },
    { id: 'aiml', label: 'AI/ML', icon: Brain }
  ];

  const getAllSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skills).flatMap(([category, items]) =>
        items.map(skill => ({ name: skill, category }))
      );
    }
    return (skills[activeCategory] || []).map(skill => ({
      name: skill,
      category: activeCategory
    }));
  };

  const displayedSkills = getAllSkills();
  const totalSkills = Object.values(skills).flat().length;

  const getCategoryColor = (category) => {
    const colors = {
      languages: 'sage',
      frameworks: 'sand',
      databases: 'sage',
      tools: 'sand',
      concepts: 'sage',
      aiml: 'sand'
    };
    return colors[category] || 'sage';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 bg-charcoal overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sand/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-16 h-px bg-sage" />
            <span className="text-sage font-medium tracking-wider text-sm uppercase">Technical Arsenal</span>
            <span className="w-16 h-px bg-sage" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-cream">
            Skills &<br />
            <span className="text-ash italic font-light">Technologies</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-sage text-charcoal'
                    : 'bg-charcoal-light text-ash border border-ash/20 hover:border-sage/50 hover:text-cream'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Cloud */}
        <motion.div
          className="relative min-h-[300px]"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-wrap justify-center gap-3"
            >
              {displayedSkills.map((skill, index) => {
                const color = getCategoryColor(skill.category);
                return (
                  <motion.div
                    key={`${skill.category}-${skill.name}`}
                    variants={skillVariants}
                    layout
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`relative px-5 py-2.5 rounded-full font-medium text-sm cursor-default transition-all duration-300 ${
                      hoveredSkill === skill.name
                        ? color === 'sage'
                          ? 'bg-sage text-charcoal shadow-glow-sage'
                          : 'bg-sand text-charcoal shadow-glow-sand'
                        : 'bg-charcoal-light text-ash border border-ash/20 hover:border-sage/30'
                    }`}
                    whileHover={{ scale: 1.1, y: -4 }}
                  >
                    {skill.name}
                    {hoveredSkill === skill.name && (
                      <motion.span
                        className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${
                          color === 'sage' ? 'bg-sage' : 'bg-sand'
                        }`}
                        layoutId="skillIndicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Skill Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-charcoal-light rounded-full border border-ash/10">
            <span className="font-display text-4xl font-semibold text-gradient">
              {totalSkills}+
            </span>
            <span className="text-ash">
              Technologies in the toolkit
            </span>
          </div>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([category, items], index) => {
            const categoryData = categories.find(c => c.id === category);
            const Icon = categoryData?.icon || Code2;
            const isHovered = activeCategory === category;
            
            return (
              <motion.div
                key={category}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? 'bg-sage/10 border-sage/30'
                    : 'bg-charcoal-light/50 border-ash/10 hover:border-sage/20'
                }`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    index % 2 === 0 ? 'bg-sage/20' : 'bg-sand/20'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      index % 2 === 0 ? 'text-sage' : 'text-sand'
                    }`} />
                  </div>
                  <h3 className="font-display text-xl text-cream capitalize">
                    {category === 'aiml' ? 'AI/ML' : category}
                  </h3>
                </div>
                <p className="text-ash text-sm">
                  {items.length} skills
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
