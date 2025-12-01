import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { experience } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey and leadership roles
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Connecting Line */}
              {index < experience.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-transparent hidden md:block"></div>
              )}

              <Card className="group overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02]">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Briefcase className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400">
                          <p className="text-lg font-semibold text-cyan-400">{exp.organization}</p>
                          <span className="hidden sm:inline text-gray-600">•</span>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start text-gray-400">
                            <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="group-hover:text-gray-300 transition-colors">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
