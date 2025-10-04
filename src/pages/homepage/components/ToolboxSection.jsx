import React, { useEffect, useState } from 'react';

const ToolboxSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const technologies = [
    'Cloudflare', 'WordPress', 'React', 'Google Tag Manager', 'FluentCRM', 'PHP', 
    'JavaScript', 'Node.js', 'MongoDB', 'Express.js', 'WooCommerce', 'LearnDash',
    'Gravity Forms', 'GA4', 'Stripe', 'Zapier', 'HubSpot', 'Mailchimp',
    'Python', 'MySQL', 'Docker', 'AWS', 'Figma', 'Photoshop'
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => {
        const newPosition = prev + 1;
        // Reset when we've scrolled through one complete set
        return newPosition >= technologies?.length * 120 ? 0 : newPosition;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [technologies?.length]);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            My <span className="text-conversion">Toolbox</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A curated selection of the technologies, platforms, and tools I leverage 
            to build scalable marketing ecosystems and deliver exceptional results.
          </p>
        </div>

        {/* Infinite Scrolling Tech Banner */}
        <div className="relative">
          {/* Fade gradients on the edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div 
              className="flex space-x-8 py-8 transition-transform duration-75 ease-linear"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {duplicatedTechs?.map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="flex-shrink-0 px-6 py-3 bg-surface border border-border rounded-lg hover:border-conversion/50 hover:bg-conversion/5 transition-all duration-300 group cursor-default"
                >
                  <span className="text-text-primary font-medium whitespace-nowrap group-hover:text-conversion transition-colors duration-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group">
              <div className="text-2xl font-bold text-conversion mb-1">24+</div>
              <div className="text-sm text-text-secondary">Technologies</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold text-conversion mb-1">15+</div>
              <div className="text-sm text-text-secondary">Platforms</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold text-conversion mb-1">8+</div>
              <div className="text-sm text-text-secondary">Programming Languages</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold text-conversion mb-1">100+</div>
              <div className="text-sm text-text-secondary">Integrations Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolboxSection;