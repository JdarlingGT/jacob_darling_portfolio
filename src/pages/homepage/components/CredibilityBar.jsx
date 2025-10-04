import React from 'react';
import Icon from '../../../components/AppIcon';

const CredibilityBar = () => {
  const metrics = [
    {
      icon: 'TrendingDown',
      title: 'Dramatic Reduction in Support Tickets',
      description: '85% decrease in customer support volume'
    },
    {
      icon: 'ShoppingCart',
      title: 'Significant E-commerce Conversion Lift',
      description: '35% boost in conversion rates'
    },
    {
      icon: 'Users',
      title: 'Substantial Growth in Qualified Leads',
      description: '200% increase in marketing qualified leads'
    }
  ];

  return (
    <section className="py-16 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metrics?.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-conversion/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-conversion/20 transition-colors duration-300">
                <Icon name={metric?.icon} size={28} className="text-conversion" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2 text-lg">
                {metric?.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {metric?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background border border-border rounded-2xl p-8 brand-shadow">
            <div className="flex justify-center mb-6">
              {[...Array(5)]?.map((_, i) => (
                <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-text-primary font-medium mb-6 leading-relaxed">
              "Jacob is that rare hybrid of a creative marketer and a brilliant systems thinker. 
              He didn't just redesign our brand; he rebuilt our entire marketing engine from the ground up."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-conversion/20">
                <img 
                  src="/assets/images/download-1759120020924.png" 
                  alt="Jacob Darling - Professional Bio Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-text-primary">Sarah Johnson</p>
                <p className="text-sm text-text-secondary">VP of Marketing, TechStart Inc.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Partners */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-2">Current Role & Strategic Partnerships</h3>
            <p className="text-text-secondary">Healthcare marketing innovation and transformation leadership</p>
          </div>
          <div className="flex justify-center items-center space-x-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <img 
                src="/assets/images/GT_Logo_RGB-1759610986907.png"
                alt="Graston Technique® - Current Role as Marketing Director & Systems Architect"
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <img 
                src="/assets/images/Primary_Care_Logo-1759610860809.png"
                alt="Primary Care Indy - Healthcare Marketing Partner"
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilityBar;