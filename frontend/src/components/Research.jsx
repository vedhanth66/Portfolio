import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BookOpen,
  Quote,
  FileText,
  Users,
  FilePen
} from 'lucide-react';
import { research, researchStats } from '../mock';

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
      className="relative py-20 sm:py-32 bg-charcoal-dark overflow-hidden"
    >
      {/* Background Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-sage/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-sand/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-6">
            <span className="w-10 sm:w-16 h-px bg-sand" />
            <span className="text-sand font-medium tracking-wider text-xs sm:text-sm uppercase">
              Academic Work
            </span>
            <span className="w-10 sm:w-16 h-px bg-sand" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-tight">
            Research
            <span className="block text-ash italic font-light">
              Publications
            </span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          {[
            { value: researchStats.publications, label: 'Publications', icon: FileText },
            { value: researchStats.publicationsreviewed, label: 'Publications Reviewed', icon: FilePen },
            { value: researchStats.citations, label: 'Citations', icon: Quote },
            { value: researchStats.hIndex, label: 'h-index', icon: Users }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="text-center p-4 sm:p-6 rounded-2xl bg-charcoal border border-ash/10 hover:border-sand/30 transition-all"
            >
              <stat.icon className="w-5 h-5 text-sand mx-auto mb-2 sm:mb-3" />
              <span className="block font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-sand">
                {stat.value}
              </span>
              <span className="text-ash text-xs sm:text-sm mt-1 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Publications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-6 sm:space-y-8"
        >
          {research.map((paper, index) => (
            <motion.article
              key={paper.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-charcoal border border-ash/10 hover:border-sand/30 transition-all"
              >
                {/* Index */}
                <span className="absolute top-4 right-4 sm:top-6 sm:right-6 font-display text-3xl sm:text-5xl font-bold text-sand/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="space-y-5 sm:space-y-6">

                  {/* Venue */}
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-sand/10 border border-sand/20 rounded-full">
                    <BookOpen className="w-4 h-4 text-sand" />
                    <span className="text-sand text-xs sm:text-sm font-medium">
                      {paper.venue} • {paper.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-cream group-hover:text-sand transition-colors max-w-full sm:max-w-4xl">
                    {paper.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-ash text-sm sm:text-base">
                    <span className="text-sage">Authors:</span> {paper.authors}
                  </p>

                  {/* Summary */}
                  <p className="text-ash/80 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-4xl">
                    {paper.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.slice(0, 8).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-charcoal-light text-ash border border-ash/10 rounded-full"
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
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-4">
                    <motion.a
                      href={paper.paperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sand text-charcoal font-medium rounded-full hover:bg-sand-light transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      Read Paper
                    </motion.a>

                    <div className="flex items-center gap-2 text-ash justify-center sm:justify-start">
                      <Quote className="w-4 h-4 text-sand" />
                      <span className="font-medium text-sm sm:text-base">
                        {paper.citations} citations
                      </span>
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
