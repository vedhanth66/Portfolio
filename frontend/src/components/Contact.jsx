import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, GraduationCap, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { personalInfo } from '../mock';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.github,
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.linkedin,
      description: 'Connect professionally'
    },
    {
      name: 'Google Scholar',
      icon: GraduationCap,
      url: personalInfo.scholar,
      description: 'View my research'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 bg-cream overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-1/3 h-1/2 bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/4 h-1/3 bg-sand/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-16 h-px bg-charcoal" />
            <span className="text-charcoal font-medium tracking-wider text-sm uppercase">Get In Touch</span>
            <span className="w-16 h-px bg-charcoal" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-charcoal">
            Let's Work<br />
            <span className="text-ash-dark italic font-light">Together</span>
          </h2>
          <p className="mt-6 text-charcoal text-lg max-w-xl mx-auto">
            Open to internships, research positions, and collaborations on exciting projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Email Card - Main CTA */}
          <motion.div
            variants={itemVariants}
            className="relative p-10 md:p-16 rounded-[2rem] bg-charcoal mb-8 overflow-hidden group"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage/10 via-transparent to-sand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative text-center">
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage/20 mb-8"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="w-10 h-10 text-sage" />
              </motion.div>

              {/* Email */}
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-4">
                Say Hello
              </h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xl md:text-2xl text-sage hover:text-sage-light transition-colors font-medium"
              >
                {personalInfo.email}
              </a>

              {/* Copy Button */}
              <motion.button
                onClick={handleCopyEmail}
                className="ml-3 mt-8 inline-flex items-center gap-2 px-6 py-3 bg-sage text-charcoal font-medium rounded-full hover:bg-sage-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {emailCopied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Email
                  </>
                )}
              </motion.button>

              {/* Or send directly */}
              <div className="mt-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-ash hover:text-cream transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Or send directly
                </a>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-sage/30 rounded-tl-2xl" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-sand/30 rounded-br-2xl" />
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-2xl bg-white border border-ash/10 hover:border-sage/30 transition-all duration-300 hover:shadow-editorial"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-charcoal/5 flex items-center justify-center group-hover:bg-sage/10 transition-colors">
                      <Icon className="w-6 h-6 text-charcoal group-hover:text-sage transition-colors" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-ash group-hover:text-sage group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-charcoal mb-1">
                    {social.name}
                  </h4>
                  <p className="text-charcoal text-sm">
                    {social.description}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Availability Banner */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 rounded-2xl bg-sage/10 border border-sage/20 text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sage"></span>
              </span>
              <p className="text-charcoal font-medium">
                Currently available for opportunities
              </p>
            </div>
            <p className="text-charcoal text-sm mt-2">
              Looking for internships, research positions, and interesting projects to collaborate on
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
