import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExperienceHero = () => {
  const careerHighlights = [
    {
      metric: '15+',
      label: 'Years Experience',
      description: 'Marketing & Technology'
    },
    {
      metric: '5',
      label: 'Major Roles',
      description: 'Leadership Positions'
    },
    {
      metric: '50%',
      label: 'Revenue Growth',
      description: 'Contributed Increase'
    },
    {
      metric: '400+',
      label: 'Automated Workflows',
      description: 'Systems Optimized'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-white rounded-lg rotate-12 animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center space-x-2 px-4 py-2 bg-conversion/10 border border-conversion/20 rounded-full text-conversion text-sm font-medium">
                <Icon name="Briefcase" size={16} />
                <span>Professional Experience</span>
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Career <span className="text-conversion">Journey</span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Fifteen years of progressive growth in marketing technology, from coordinator 
              to systems architect. Each role built upon the last, creating a unique blend 
              of strategic marketing vision and deep technical implementation expertise.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document?.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
                iconName="Clock"
                iconPosition="left"
                iconSize={18}
              >
                View Career Timeline
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => document?.getElementById('download-resume')?.scrollIntoView({ behavior: 'smooth' })}
                iconName="Download"
                iconPosition="left"
                iconSize={18}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Career Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {careerHighlights?.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-conversion mb-2">
                  {highlight?.metric}
                </div>
                <div className="text-white font-semibold mb-1">
                  {highlight?.label}
                </div>
                <div className="text-blue-200 text-sm">
                  {highlight?.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Role Highlight */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-conversion rounded-full animate-pulse"></div>
                <span className="text-conversion font-semibold text-sm">CURRENT POSITION</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Marketing Director & Systems Architect
              </h3>
              
              <p className="text-blue-100 mb-4">
                <span className="font-semibold">Graston Technique®</span> • Indianapolis, IN • Aug 2023 – Present
              </p>
              
              <p className="text-blue-200 leading-relaxed">
                Leading full-stack digital transformation for a national healthcare education platform, 
                operating as both brand strategist and systems architect to build scalable marketing 
                ecosystems from the ground up.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Button
                variant="secondary"
                onClick={() => window?.open('https://grastontechnique.com', '_blank')}
                iconName="ExternalLink"
                iconPosition="right"
                iconSize={16}
              >
                Visit Graston Technique®
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHero;