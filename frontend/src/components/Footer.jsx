import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Brand */}
          <div className="space-y-4">
            <h3
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
            >
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {personalInfo.title}
            </p>
            <p className="text-gray-500 text-sm">
              Building innovative solutions and contributing to technology advancement.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Research', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Social */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500 rounded-lg transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-500 rounded-lg transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-gray-800 hover:bg-purple-500/20 border border-gray-700 hover:border-purple-500 rounded-lg transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
