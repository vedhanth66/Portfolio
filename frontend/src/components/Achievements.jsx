import React from 'react';
import { Trophy, Award, Star, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { achievements } from '../mock';

const Achievements = () => {
  const icons = [Trophy, Award, Star, Sparkles];
  const gradients = [
    'from-yellow-400 to-orange-500',
    'from-cyan-400 to-blue-500',
    'from-purple-400 to-pink-500',
    'from-green-400 to-cyan-500'
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition and milestones throughout my journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            const gradient = gradients[index % gradients.length];
            
            return (
              <Card
                key={achievement.id}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105"
              >
                {/* Glowing background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-6 space-y-4">
                  {/* Icon */}
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 bg-gradient-to-br ${gradient} opacity-20 rounded-lg flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
