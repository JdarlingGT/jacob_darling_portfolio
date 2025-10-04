import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementMetrics = () => {
  const metrics = [
    {
      category: 'Revenue Impact',
      icon: 'DollarSign',
      color: 'bg-conversion',
      achievements: [
        { metric: '50%', description: 'Annual revenue increase at RBE Law', period: '2015-2023' },
        { metric: '40%', description: 'E-commerce conversion improvement', period: '2023-2024' },
        { metric: '45%', description: 'Patient visit growth average', period: '2009-2013' }
      ]
    },
    {
      category: 'Operational Excellence',
      icon: 'TrendingUp',
      color: 'bg-trust-builder',
      achievements: [
        { metric: '70%', description: 'Support ticket reduction', period: '2023-2024' },
        { metric: '400+', description: 'Automated workflows created', period: '2023-2024' },
        { metric: '86%', description: 'Cache-hit ratio achieved', period: '2023-2024' }
      ]
    },
    {
      category: 'Cost Optimization',
      icon: 'Zap',
      color: 'bg-primary',
      achievements: [
        { metric: '40%', description: 'Marketing expense reduction', period: '2015-2023' },
        { metric: '40%', description: 'Campaign production time improvement', period: '2023' },
        { metric: '85K+', description: 'Monthly malicious attacks neutralized', period: '2023-2024' }
      ]
    },
    {
      category: 'Growth & Reach',
      icon: 'Users',
      color: 'bg-accent',
      achievements: [
        { metric: '35%', description: 'Qualified client inquiry increase', period: '2015-2023' },
        { metric: '15%', description: 'Client referral improvement', period: '2013-2015' },
        { metric: '99.9%', description: 'System uptime maintained', period: '2023-2024' }
      ]
    }
  ];

  const timelineHighlights = [
    {
      year: '2024',
      title: 'AI Integration Milestone',
      description: 'Deployed Guardian AI system with 400+ automated workflows',
      icon: 'Brain',
      color: 'text-conversion'
    },
    {
      year: '2023',
      title: 'Security Architecture',
      description: 'Implemented multi-layered defense neutralizing 85K+ attacks monthly',
      icon: 'Shield',
      color: 'text-trust-builder'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Led RBE Law through complete digital marketing evolution',
      icon: 'Zap',
      color: 'text-primary'
    },
    {
      year: '2015',
      title: 'Strategic Leadership',
      description: 'Promoted to Marketing Manager, began decade of growth',
      icon: 'TrendingUp',
      color: 'text-accent'
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Measurable <span className="text-conversion">Impact</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Fifteen years of delivering quantifiable business results through strategic marketing 
            technology implementation. Every project is measured by its impact on revenue, 
            efficiency, and organizational growth.
          </p>
        </div>

        {/* Achievement Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {metrics?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-background border border-border rounded-xl overflow-hidden brand-shadow">
              {/* Category Header */}
              <div className={`${category?.color} p-6 text-center`}>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={category?.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category?.category}
                </h3>
              </div>

              {/* Achievements List */}
              <div className="p-6 space-y-6">
                {category?.achievements?.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="text-center">
                    <div className="text-3xl font-bold text-text-primary mb-2">
                      {achievement?.metric}
                    </div>
                    <div className="text-sm font-medium text-text-primary mb-1">
                      {achievement?.description}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {achievement?.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Highlights */}
        <div className="bg-background border border-border rounded-xl p-8 brand-shadow">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Career Milestones Timeline
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Key achievements and breakthrough moments that defined my professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineHighlights?.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={highlight?.icon} size={24} className={highlight?.color} />
                  </div>
                  
                  {/* Year badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-conversion text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {highlight?.year?.slice(-2)}
                  </div>
                </div>

                <h4 className="font-bold text-text-primary mb-2">
                  {highlight?.title}
                </h4>
                
                <p className="text-sm text-text-secondary leading-relaxed">
                  {highlight?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-conversion/10 to-trust-builder/10 border border-conversion/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Cumulative Business Impact
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-4xl mx-auto mb-8">
              Over 15 years of strategic marketing technology implementation, my work has directly 
              contributed to millions in revenue growth, hundreds of thousands in cost savings, 
              and immeasurable improvements in operational efficiency across diverse industries.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-conversion mb-1">$5M+</div>
                <div className="text-sm text-text-secondary">Revenue Impact</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-trust-builder mb-1">$2M+</div>
                <div className="text-sm text-text-secondary">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-text-secondary">Hours Automated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-text-secondary">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementMetrics;