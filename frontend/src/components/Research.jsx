import React from 'react';
import { BookOpen, ExternalLink, Github, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { research, researchStats } from '../mock';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Publications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Contributing to the advancement of computer science through research
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-12 max-w-3xl mx-auto">
          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {researchStats.publications}
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">Publications</p>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-pink-500/30 hover:border-pink-500 transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {researchStats.citations}
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">Citations</p>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30 hover:border-blue-500 transition-all duration-300 hover:scale-105 group">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {researchStats.hIndex}
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">h-index</p>
            </div>
          </Card>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {research.map((paper) => (
            <Card
              key={paper.id}
              className="group overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.01]"
            >
              <div className="p-6 md:p-8 space-y-4">
                {/* Title */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 flex-1">
                    {paper.title}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                      <Quote className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 font-semibold">{paper.citations}</span>
                    </div>
                  </div>
                </div>

                {/* Authors & Venue */}
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm md:text-base">
                    <span className="font-medium text-gray-300">Authors:</span> {paper.authors}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base">
                    <span className="font-medium text-gray-300">Published in:</span> {paper.venue} • {paper.year}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-gray-400 leading-relaxed">
                  {paper.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 group/btn"
                    onClick={() => window.open(paper.paperLink, '_blank')}
                  >
                    <BookOpen className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Read Paper
                  </Button>
                  {paper.codeLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-pink-500 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300 group/btn"
                      onClick={() => window.open(paper.codeLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
