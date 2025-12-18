import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { experience } from '../mock';

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 bg-cream overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-sand/5 rounded-full blur-3xl" />
      
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
            <span className="text-charcoal font-medium tracking-wider text-sm uppercase">Professional Journey</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-charcoal">
            Work<br />
            <span className="text-ash-dark italic font-light">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative max-w-4xl"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-ash/20">
            <motion.div
              className="w-full bg-gradient-to-b from-sage via-sage to-sand origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-12 md:pl-24 group"
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-cream border-4 border-sage group-hover:border-sand group-hover:scale-125 transition-all duration-300 z-10"
                  whileHover={{ scale: 1.3 }}
                />

                {/* Content Card */}
                <motion.div
                  className="relative p-8 md:p-10 bg-white rounded-3xl border border-ash/10 hover:border-sage/30 transition-all duration-500 hover:shadow-editorial"
                  whileHover={{ x: 8 }}
                >
                  {/* Role Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/10 border border-sage/20 rounded-full mb-6">
                    <Briefcase className="w-4 h-4 text-sage" />
                    <span className="text-sage text-sm font-medium">{exp.role}</span>
                  </div>

                  {/* Organization & Duration */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-charcoal mb-2">
                      {exp.organization}
                    </h3>
                    <div className="flex items-center gap-2 text-ash">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3 text-charcoal"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <ArrowRight className="w-4 h-4 text-sage flex-shrink-0 mt-1" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-sage/20 rounded-tr-xl" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-sand/20 rounded-bl-xl" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-charcoal text-lg mb-6">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-cream font-medium rounded-full hover:bg-charcoal-light transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Connect
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
