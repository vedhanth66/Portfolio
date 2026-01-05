import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, Target, Sparkles } from 'lucide-react';
import { currentFocus } from '../mock';

const About = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start']
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

const timeline = [
  { year: '2024', event: 'Started B.Tech in Computer Science & Engineering at MIT Bengaluru' },
  { year: '2024', event: 'Completed IBM Data Science Specialization & built multiple end-to-end projects' },
  { year: '2025', event: 'Completed Meta Full-Stack Development Specialization'},
  { year: '2025', event: 'Entered research: data pruning → first conference publication (ICCCNT 2025)' },
  { year: '2025', event: 'Published journal paper in IEEE Access & placed Top 10 at Honeywell × SDG Hackathon' },
  { year: '2025', event: 'Joined SHREE KARA KALAGRUHA as Founding Full-Stack Developer' },
  { year: '2026', event: 'Built & deployed commercial production websites' }
];


  const stats = [
    { value: '10+', label: 'Projects Built', color: 'sage' },
    { value: '2', label: 'Publications', color: 'sand' },
    { value: '9.19', label: 'CGPA', color: 'sage' },
    { value: '6+', label: 'Achievements', color: 'sand' },
    { value: '10+', label: 'Publications Reviewed', color: 'sage' }
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
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-charcoal overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-sage/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-sand/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-16 h-px bg-sage" />
            <span className="text-sage font-medium tracking-wider text-sm uppercase">About Me</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-cream">
            The Journey<br />
            <span className="text-ash italic font-light">So Far</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Timeline Section */}
          <motion.div
            ref={timelineRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-5 h-5 text-sage" />
              <h3 className="font-display text-2xl text-cream">Timeline</h3>
            </div>
            
            {/* Timeline Line */}
            <div className="absolute left-[11px] top-20 bottom-0 w-px bg-charcoal-light">
              <motion.div
                className="w-full bg-gradient-to-b from-sage to-sand origin-top"
                style={{ height: lineHeight }}
              />
            </div>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-6 group"
                >
                  <div className="relative">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-charcoal border-2 border-ash/30 group-hover:border-sage group-hover:bg-sage/20 transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-sage opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>
                  <div className="flex-1 pb-6">
                    <span className="text-sage font-medium text-sm">{item.year}</span>
                    <p className="text-ash group-hover:text-cream transition-colors duration-300 mt-1">
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Focus & Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            {/* Current Focus */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-5 h-5 text-sand" />
                <h3 className="font-display text-2xl text-cream">Current Focus</h3>
              </div>
              
              <div className="space-y-6">
                {currentFocus.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group p-6 bg-charcoal-light/50 border border-ash/10 rounded-2xl hover:border-sage/30 transition-all duration-500 hover:shadow-glow-sage"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-5 h-5 text-sage mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-sage font-medium mb-2">{item.label}</h4>
                        <p className="text-ash text-sm leading-relaxed group-hover:text-cream/80 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border ${
                    stat.color === 'sage'
                      ? 'bg-sage/5 border-sage/20 hover:border-sage/50'
                      : 'bg-sand/5 border-sand/20 hover:border-sand/50'
                  } transition-all duration-300 group`}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <span className={`block font-display text-4xl font-semibold ${
                    stat.color === 'sage' ? 'text-sage' : 'text-sand'
                  } group-hover:scale-110 transition-transform origin-left`}>
                    {stat.value}
                  </span>
                  <span className="text-ash text-sm mt-2 block">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
