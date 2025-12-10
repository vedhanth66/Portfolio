import React from 'react';
import { ArrowRight, Github, Linkedin, GraduationCap, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mock';
import profileImg from '../assets/profile.JPG';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm animate-slide-up">
                From prototypes to papers — building with purpose
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {''}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold text-gray-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {personalInfo.title}
              </p>
              
              <p className="text-xl text-cyan-400 font-medium animate-slide-up" style={{ animationDelay: '0.3s' }}>
                {personalInfo.tagline}
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
                {personalInfo.bio}
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
                <span className="text-cyan-400 font-semibold">10+ Projects</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg backdrop-blur-sm">
                <span className="text-blue-400 font-semibold">45+ certifications</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg backdrop-blur-sm">
                <span className="text-purple-400 font-semibold">IEEE access Journal paper</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 group"
                onClick={() => scrollToSection('#projects')}
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 group"
                onClick={() => window.open(personalInfo.resumeLink, '_blank')}
              >
                <FileText className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Me
              </Button>
            </div>

            <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500 rounded-lg transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-500 rounded-lg transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href={personalInfo.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500 rounded-lg transition-all duration-300 hover:scale-110 group"
              >
                <GraduationCap className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Your Photo */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative w-full max-w-lg flex items-center justify-center">
              {/* Glowing orbs background (Keep this for the cool effect) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Photo Container */}
              <div className="relative z-10 group">

                {/* Main Image Frame */}
                <div className="relative w-100 h-100 rounded-3xl border-2 border-cyan-500/30 backdrop-blur-sm shadow-2xl shadow-cyan-500/20 overflow-hidden group-hover:border-cyan-500/60 transition-all duration-500 group-hover:scale-105">
                  {/* The Image */}
                  <img 
                    src={profileImg} 
                    alt="Vedhanth" 
                    className="w-full h-full object-cover object-center" 
                  />
                  
                  {/* Overlay Gradient (Optional: Adds a subtle tint to match the theme) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
