import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedCaseStudies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const caseStudies = [
    {
      icon: '🚀',
      title: 'The Launchpad',
      hook: 'From concept to $2.4M ARR through strategic automation and product positioning.',
      tags: ['Product Vision', 'Revenue Automation', 'Go-to-Market Strategy'],
      image: '/assets/images/ChatGPT_Image_Sep_29_2025_12_16_05_AM-1759119580701.png',
      path: '/case-studies/launchpad'
    },
    {
      icon: '🧭',
      title: 'The Compass',
      hook: 'Transformed fragmented data into a unified analytics engine driving 200% lead growth.',
      tags: ['Analytics Engineering', 'Marketing ROI', 'Data Integration'],
      image: '/assets/images/Evidence-Based_Approach_Infographic-1759119540923.png',
      path: '/case-studies/compass'
    },
    {
      icon: '🛡️',
      title: 'The Fortress',
      hook: 'Built an impenetrable security architecture that blocks 85K+ threats monthly.',
      tags: ['Infrastructure Security', 'Performance Optimization', 'Risk Management'],
      image: '/assets/images/Gemini_Generated_Image_klonsaklonsaklon-1759116279741.png',
      path: '/case-studies/fortress'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Featured <span className="text-conversion">Deep Dives</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore detailed case studies that showcase the strategic thinking, 
            technical execution, and measurable results behind my most impactful work.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies?.map((study, index) => (
            <div
              key={index}
              className={`bg-background border border-border rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:brand-shadow ${
                hoveredCard === index ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleNavigation(study?.path)}
              style={{
                transform: hoveredCard === index 
                  ? 'perspective(1000px) rotateX(-5deg) rotateY(5deg) translateY(-8px)' 
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study?.image}
                  alt={`${study?.title} case study preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-3xl">{study?.icon}</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-10 h-10 bg-conversion/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon name="ArrowUpRight" size={20} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {study?.title}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {study?.hook}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study?.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-conversion/10 text-conversion text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => handleNavigation('/case-studies')}
            className="inline-flex items-center px-6 py-3 bg-conversion hover:bg-conversion/90 text-conversion-foreground font-medium rounded-lg transition-colors duration-200"
          >
            View All Case Studies
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;