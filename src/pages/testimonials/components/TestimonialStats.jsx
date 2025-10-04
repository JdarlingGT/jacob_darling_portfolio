import React from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialStats = () => {
  const stats = [
    {
      icon: 'TrendingUp',
      value: '50+',
      label: 'LinkedIn Recommendations',
      description: 'Professional endorsements from clients and colleagues',
      color: 'text-conversion'
    },
    {
      icon: 'Users',
      value: '95%',
      label: 'Client Satisfaction Rate',
      description: 'Based on post-project surveys and feedback',
      color: 'text-trust-builder'
    },
    {
      icon: 'Award',
      value: '100%',
      label: 'Project Success Rate',
      description: 'All projects delivered on time and within scope',
      color: 'text-primary'
    },
    {
      icon: 'Target',
      value: '2.8M+',
      label: 'Professional Connections',
      description: 'Network reach across LinkedIn and industry platforms',
      color: 'text-accent'
    }
  ];

  const socialProofMetrics = [
    {
      platform: 'LinkedIn',
      icon: 'ExternalLink',
      value: '2,500+',
      metric: 'Connections',
      growth: '+15%'
    },
    {
      platform: 'Industry',
      icon: 'Award',
      value: '8',
      metric: 'Certifications',
      growth: 'Active'
    },
    {
      platform: 'Projects',
      icon: 'Briefcase',
      value: '120+',
      metric: 'Completed',
      growth: '100%'
    },
    {
      platform: 'Experience',
      icon: 'Clock',
      value: '15+',
      metric: 'Years',
      growth: 'Growing'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats?.map((stat, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-xl p-8 text-center brand-shadow hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${stat?.color?.replace('text-', '')}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon name={stat?.icon} size={32} className={stat?.color} />
              </div>
              
              <div className="text-3xl font-bold text-text-primary mb-2">
                {stat?.value}
              </div>
              
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {stat?.label}
              </h3>
              
              <p className="text-sm text-text-secondary leading-relaxed">
                {stat?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof Metrics */}
        <div className="bg-background border border-border rounded-xl p-8 brand-shadow">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              Professional <span className="text-conversion">Credibility</span>
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Real-time metrics demonstrating industry recognition, professional network reach, 
              and ongoing engagement within the marketing technology community
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {socialProofMetrics?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Icon name={metric?.icon} size={18} className="text-conversion" />
                  <span className="text-sm font-medium text-text-secondary">
                    {metric?.platform}
                  </span>
                </div>
                
                <div className="text-2xl font-bold text-text-primary mb-1">
                  {metric?.value}
                </div>
                
                <div className="text-sm text-text-secondary mb-2">
                  {metric?.metric}
                </div>
                
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-2 h-2 bg-conversion rounded-full"></div>
                  <span className="text-xs text-conversion font-medium">
                    {metric?.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-conversion/10 border border-conversion/20 rounded-full">
            <Icon name="Shield" size={16} className="text-conversion" />
            <span className="text-sm font-medium text-conversion">
              All testimonials are verified and linked to original LinkedIn recommendations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialStats;