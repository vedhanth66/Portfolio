import React from 'react';
import { Mail, Github, Linkedin, GraduationCap, Copy, Check } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { personalInfo } from '../mock';

const Contact = () => {
  const [emailCopied, setEmailCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.github,
      color: 'from-gray-400 to-gray-600',
      hoverColor: 'hover:border-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.linkedin,
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:border-blue-400'
    },
    {
      name: 'Google Scholar',
      icon: GraduationCap,
      url: personalInfo.scholar,
      color: 'from-green-400 to-green-600',
      hoverColor: 'hover:border-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to internships, research positions, and collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Email Card */}
          <Card className="p-8 md:p-12 mb-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 text-center group">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-500/30 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Email Me</h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  {personalInfo.email}
                </a>
              </div>

              <Button
                onClick={handleCopyEmail}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Email
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Card
                  key={social.name}
                  className={`p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 ${social.hoverColor} transition-all duration-500 hover:shadow-xl hover:scale-105 group cursor-pointer`}
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <div className="text-center space-y-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${social.color} opacity-20 rounded-lg flex items-center justify-center border border-gray-600 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {social.name}
                      </h4>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Availability Banner */}
          <div className="mt-12">
            <Card className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30 text-center">
              <p className="text-lg text-gray-300">
                <span className="inline-flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Currently available for opportunities
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Looking for internships, research positions, and interesting projects to collaborate on
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
