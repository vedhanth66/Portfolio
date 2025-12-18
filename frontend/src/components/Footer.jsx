import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-charcoal-dark overflow-hidden">
      {/* Top Border Gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-sage/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block"
              whileHover={{ scale: 1.02 }}
            >
              <span className="font-display text-3xl font-semibold text-cream">
                <span className="text-sage">V</span>edhanth M
              </span>
            </motion.a>
            <p className="text-ash max-w-sm leading-relaxed">
              {personalInfo.title}. Building innovative solutions and contributing to technology advancement through research and development.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: personalInfo.github },
                { icon: Linkedin, href: personalInfo.linkedin },
                { icon: Mail, href: `mailto:${personalInfo.email}` }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-charcoal border border-ash/10 hover:border-sage/50 hover:bg-sage/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-ash group-hover:text-sage transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display text-lg font-semibold text-cream mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-ash hover:text-sage transition-colors duration-300 hover-underline inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="font-display text-lg font-semibold text-cream mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-ash hover:text-sage transition-colors"
              >
                {personalInfo.email}
              </a>
              <p className="text-ash">
                MIT Bengaluru, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ash/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ash/60 text-sm text-center md:text-left">
              © {currentYear} {personalInfo.name}. Crafted with
              <Heart className="w-4 h-4 inline-block mx-1 text-sage" fill="currentColor" />
              and dedication.
            </p>
            
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-ash hover:text-sage transition-colors"
              whileHover={{ y: -2 }}
            >
              <span className="text-sm">Back to top</span>
              <motion.div
                className="p-2 rounded-full border border-ash/20 group-hover:border-sage/50 transition-colors"
                whileHover={{ y: -4 }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="font-display text-[14.8vw] font-bold text-charcoal-light/5 whitespace-nowrap leading-none translate-y-1/4 opacity-5">
          VEDHANTH M
        </div>
      </div>
    </footer>
  );
};

export default Footer;
