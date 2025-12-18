import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, GraduationCap } from 'lucide-react';
import { personalInfo } from '../mock';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.04,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const name = personalInfo.name.split('');

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-charcoal"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large morphing shape */}
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-sage/10 to-transparent rounded-full animate-morph"
          style={{ y }}
        />
        {/* Floating geometric shapes */}
        {/* <motion.div
          className="absolute top-1/4 left-[10%] w-20 h-20 border border-sage/20 rotate-45"
          animate={{ rotate: [45, 90, 45], y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        /> */}
        <motion.div
          className="absolute bottom-1/3 right-[15%] w-32 h-32 border border-sand/20 rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-sage rounded-full"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Horizontal lines */}
        <div className="absolute top-[20%] left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
        <div className="absolute bottom-[30%] right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-sand/30 to-transparent" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20"
        style={{ opacity, scale }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content - Text */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3"
            >
              <span className="w-12 h-px bg-sage" />
              <span className="text-sage font-medium tracking-wider text-sm uppercase">
                Portfolio 2025
              </span>
            </motion.div>

            {/* Main Title - Character by Character Animation */}
            <div className="overflow-hidden">
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-semibold text-cream leading-[0.9] tracking-tight">
                {name.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Subtitle with gradient */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-ash italic">
                {personalInfo.title}
              </p>
              <p className="text-lg md:text-xl text-sage font-medium">
                {personalInfo.tagline}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-ash/80 text-lg leading-relaxed max-w-2xl"
            >
              {personalInfo.bio.slice(0, 200)}...
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 pt-4"
            >
              {[
                { value: '10+', label: 'Projects' },
                { value: '45+', label: 'Certifications' },
                { value: '2', label: 'Publications' }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <span className="block font-display text-4xl md:text-5xl font-semibold text-cream group-hover:text-sage transition-colors duration-300">
                    {stat.value}
                  </span>
                  <span className="text-ash text-sm uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: GraduationCap, href: personalInfo.scholar, label: 'Scholar' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 border border-ash/30 rounded-full hover:border-sage hover:bg-sage/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-ash group-hover:text-sage transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Artistic Photo */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative frame elements */}
              <motion.div
                className="absolute -inset-4 border border-sage/30 rounded-3xl"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -inset-8 border border-sand/20 rounded-3xl"
                animate={{ rotate: [0, -2, 0, 2, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              />
              
              {/* Main image container*/}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                
                {/* The Image */}
                <img
                  src="/profile.JPG"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover filter contrast-[0.8]"
                />
                
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-sage z-20" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-sand z-20" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 px-6 py-3 bg-sage text-charcoal rounded-full font-medium text-sm shadow-editorial"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                Available for work
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => scrollToSection('#about')}
      >
        <span className="text-ash text-xs uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 text-sage" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
