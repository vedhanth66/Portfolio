import React, { useState } from 'react';
import { Code2, Database, Wrench, BookOpen, Brain, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { skills } from '../mock';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Zap, gradient: 'from-cyan-400 to-blue-500' },
    { id: 'languages', label: 'Languages', icon: Code2, gradient: 'from-blue-400 to-purple-500' },
    { id: 'frameworks', label: 'Frameworks', icon: Wrench, gradient: 'from-purple-400 to-pink-500' },
    { id: 'databases', label: 'Databases', icon: Database, gradient: 'from-pink-400 to-red-500' },
    { id: 'tools', label: 'Tools', icon: Wrench, gradient: 'from-orange-400 to-yellow-500' },
    { id: 'concepts', label: 'Concepts', icon: BookOpen, gradient: 'from-green-400 to-cyan-500' },
    { id: 'aiml', label: 'AI/ML', icon: Brain, gradient: 'from-cyan-400 to-purple-500' }
  ];

  const getSkillsByCategory = () => {
    if (activeCategory === 'all') {
      return Object.entries(skills).flatMap(([key, items]) =>
        items.map(item => ({ name: item, category: key }))
      );
    }
    return skills[activeCategory]?.map(item => ({ name: item, category: activeCategory })) || [];
  };

  const displayedSkills = getSkillsByCategory();

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg hover:scale-105`
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <Card
              key={category}
              className="p-6 md:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02] group"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {category === 'languages' && <Code2 className="w-5 h-5 text-cyan-400" />}
                    {category === 'frameworks' && <Wrench className="w-5 h-5 text-purple-400" />}
                    {category === 'databases' && <Database className="w-5 h-5 text-pink-400" />}
                    {category === 'tools' && <Wrench className="w-5 h-5 text-orange-400" />}
                    {category === 'concepts' && <BookOpen className="w-5 h-5 text-green-400" />}
                    {category === 'aiml' && <Brain className="w-5 h-5 text-purple-400" />}
                  </div>
                  <h3 className="text-xl font-bold text-white capitalize">
                    {category === 'aiml' ? 'AI/ML' : category}
                  </h3>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <Badge
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500 hover:scale-105 transition-all duration-300 cursor-default font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Count Display */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30">
            <p className="text-gray-400">
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {Object.values(skills).flat().length}+
              </span>
              <span className="ml-2">Technologies Mastered</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
