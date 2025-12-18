import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award, Star, Medal, Sparkles } from 'lucide-react';
import { achievements } from '../mock';

const Achievements = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const icons = [Trophy, Award, Star, Medal];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-32 bg-charcoal-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated sparkles */}
        <motion.div
          className="absolute top-20 left-[20%] text-sand/30"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-[15%] text-sage/30"
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-[30%] text-sand/20"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Star className="w-4 h-4" />
        </motion.div>
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
            <span className="w-16 h-px bg-sand" />
            <span className="text-sand font-medium tracking-wider text-sm uppercase">Recognition</span>
            <span className="w-16 h-px bg-sand" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-cream">
            Awards &<br />
            <span className="text-ash italic font-light">Achievements</span>
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="group relative"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                    isEven
                      ? 'bg-gradient-to-br from-sage/10 to-transparent border-sage/20 hover:border-sage/50'
                      : 'bg-gradient-to-br from-sand/10 to-transparent border-sand/20 hover:border-sand/50'
                  }`}
                  whileHover={{ 
                    y: -8,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isEven ? 'shadow-glow-sage' : 'shadow-glow-sand'
                  }`} />
                  
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                      isEven ? 'bg-sage/20' : 'bg-sand/20'
                    }`}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`w-7 h-7 ${
                      isEven ? 'text-sage' : 'text-sand'
                    }`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className={`font-display text-xl md:text-2xl font-semibold mb-3 transition-colors duration-300 ${
                    isEven
                      ? 'text-cream group-hover:text-sage'
                      : 'text-cream group-hover:text-sand'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className="text-ash leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Decorative number */}
                  <span className={`absolute top-4 right-4 font-display text-6xl font-bold opacity-15 ${
                    isEven ? 'text-sage-light' : 'text-sand-light'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Corner accent */}
                  <div className={`absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 rounded-br-xl ${
                    isEven ? 'border-sage/30' : 'border-sand/30'
                  }`} />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-sand animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-sage animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
