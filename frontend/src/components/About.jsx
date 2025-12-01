import React from 'react';
import { Calendar, Target, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { personalInfo, currentFocus } from '../mock';

const About = () => {
  const timeline = [
    { year: '2023', event: 'Started B.Tech CSE at University' },
    { year: '2024', event: 'Began building full-stack projects' },
    { year: '2024', event: 'Started research in AI/ML' },
    { year: '2025', event: 'Currently in 2nd year, exploring opportunities' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Bio & Timeline */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-cyan-400" />
                Journey So Far
              </h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-24 text-cyan-400 font-bold text-lg group-hover:text-cyan-300 transition-colors">
                      {item.year}
                    </div>
                    <div className="flex-1 relative">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-500 rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform"></div>
                      <div className="pl-8 pb-6 border-l-2 border-gray-700 group-hover:border-cyan-500/50 transition-colors">
                        <p className="text-gray-300 group-hover:text-white transition-colors">{item.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Current Focus */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white flex items-center">
                <Target className="w-6 h-6 mr-3 text-purple-400" />
                Current Focus
              </h3>
              <div className="space-y-4">
                {currentFocus.map((item, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
                          <TrendingUp className="w-6 h-6 text-cyan-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">{item.label}</h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:scale-105 group">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    10+
                  </div>
                  <p className="text-gray-400 font-medium">Projects Built</p>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 group">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <p className="text-gray-400 font-medium">Publications</p>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:scale-105 group">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    9.5
                  </div>
                  <p className="text-gray-400 font-medium">CGPA</p>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-pink-500/30 hover:border-pink-500 transition-all duration-300 hover:scale-105 group">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    6+
                  </div>
                  <p className="text-gray-400 font-medium">Achievements</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
