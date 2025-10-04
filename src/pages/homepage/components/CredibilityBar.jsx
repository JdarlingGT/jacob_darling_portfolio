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
      </div>
    </section>
  );
};

export default CredibilityBar;