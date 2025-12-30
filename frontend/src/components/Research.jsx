import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, ExternalLink, Quote, FileText, Users, FilePen} from 'lucide-react';
import { research, researchStats } from '../mock';
import { Pen } from 'lucide-react';

const Research = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

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
      id="research"
      ref={sectionRef}
      className="relative py-32 bg-charcoal-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-sage/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-sand/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-16 h-px bg-sand" />
            <span className="text-sand font-medium tracking-wider text-sm uppercase">Academic Work</span>
            <span className="w-16 h-px bg-sand" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-cream">
            Research<br />
            <span className="text-ash italic font-light">Publications</span>
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto"
        >
          {[
            { value: researchStats.publications, label: 'Publications', icon: FileText },
            { value: researchStats.publicationsreviewed, label: 'Publications reviewed', icon: FilePen },
            { value: researchStats.citations, label: 'Citations', icon: Quote },
            { value: researchStats.hIndex, label: 'h-index', icon: Users }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-charcoal border border-ash/10 hover:border-sand/30 transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              <stat.icon className="w-5 h-5 text-sand mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="block font-display text-3xl md:text-4xl font-semibold text-sand">
                {stat.value}
              </span>
              <span className="text-ash text-sm mt-1 block">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Publications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {research.map((paper, index) => (
            <motion.article
              key={paper.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="relative p-8 md:p-10 rounded-3xl bg-charcoal border border-ash/10 hover:border-sand/30 transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                {/* Paper Number */}
                <span className="absolute top-6 right-6 font-display text-5xl font-bold text-sand/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="space-y-6">
                  {/* Venue Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-sand/10 border border-sand/20 rounded-full">
                    <BookOpen className="w-4 h-4 text-sand" />
                    <span className="text-sand text-sm font-medium">
                      {paper.venue} • {paper.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-cream group-hover:text-sand transition-colors duration-300 max-w-4xl">
                    {paper.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-ash">
                    <span className="text-sage">Authors:</span> {paper.authors}
                  </p>

                  {/* Summary */}
                  <p className="text-ash/80 leading-relaxed max-w-4xl">
                    {paper.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.slice(0, 8).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-charcoal-light text-ash border border-ash/10 rounded-full hover:border-sage/30 hover:text-sage transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {paper.tags.length > 8 && (
                      <span className="px-3 py-1 text-xs text-ash/60">
                        +{paper.tags.length - 8} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4">
                    <motion.a
                      href={paper.paperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-sand text-charcoal font-medium rounded-full hover:bg-sand-light transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <BookOpen className="w-4 h-4" />
                      Read Paper
                    </motion.a>
                    <div className="flex items-center gap-2 text-ash">
                      <Quote className="w-4 h-4 text-sand" />
                      <span className="font-medium">{paper.citations} citations</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
