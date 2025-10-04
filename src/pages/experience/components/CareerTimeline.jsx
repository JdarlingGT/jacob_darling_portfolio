import React from 'react';
import Icon from '../../../components/AppIcon';

const CareerTimeline = ({ activeItem, setActiveItem }) => {
  const experiences = [
    {
      title: 'Marketing Director & Systems Architect',
      company: 'Graston Technique®',
      location: 'Indianapolis, IN',
      period: 'Aug 2023 – Present',
      type: 'current',
      description: 'Led a full-stack digital transformation for a national healthcare education platform, operating as both brand strategist and systems architect to build a scalable marketing ecosystem from the ground up.',
      achievements: [
        'Architected "Guardian" AI assistant and over 400 automated workflows, reducing manual data entry by hours per week and decreasing support tickets by 70%',
        'Engineered "Launchpad" provider directory and innovative e-commerce checkout system, transforming static assets into automated revenue engine with 40% conversion increase',
        'Overhauled entire analytics pipeline ("The Compass"), implementing new GTM architecture and reconfiguring Google Ads conversions for precise attribution and maximized marketing ROI',
        'Hardened web infrastructure ("The Fortress"), deploying multi-layered Cloudflare defense neutralizing ~85,000 malicious bot hits monthly',
        'Tuned server performance ("The Engine Room") to eliminate downtime and achieve 86% cache-hit ratio',
        'Designed "The Conductor" data pipeline integrating five disparate platforms (WooCommerce, LearnDash, Gravity Forms, FluentCRM) for unified customer data management'
      ],
      technologies: ['AI/ML', 'Cloudflare', 'WooCommerce', 'LearnDash', 'Google Analytics', 'CRM Integration'],
      icon: 'Crown'
    },
    {
      title: 'Interim Director of Marketing',
      company: 'Ultimate Technologies Group',
      location: 'Fishers, IN',
      period: 'Mar 2023 – Jul 2023',
      type: 'leadership',
      description: 'Stabilized marketing operations during a critical leadership transition. Streamlined lead generation workflows, improved GTM tracking, and implemented new CRM efficiencies.',
      achievements: [
        'Stabilized marketing operations during critical leadership transition',
        'Streamlined lead generation workflows and improved GTM tracking',
        'Implemented new CRM efficiencies resulting in 40% improvement in campaign production timelines'
      ],
      technologies: ['CRM Systems', 'GTM', 'Lead Generation', 'Campaign Management'],
      icon: 'Users'
    },
    {
      title: 'Marketing Manager & Administrator',
      company: 'Riley Bennett Egloff, LLP',
      location: 'Indianapolis, IN',
      period: 'Jun 2015 – Mar 2023',
      type: 'growth',
      description: 'Directed a decade of marketing evolution, from traditional outreach to a fully digital operation. Led comprehensive firm-wide digital rebrand and technical SEO overhaul.',
      achievements: [
        'Directed decade of marketing evolution from traditional outreach to fully digital operation',
        'Led comprehensive firm-wide digital rebrand and technical SEO overhaul resulting in 35% increase in qualified client inquiries',
        'Contributed to 50% increase in firm\'s annual revenue through strategic marketing planning and execution',
        'Transitioned firm from traditional to digital-first marketing, achieving 40% cost savings while increasing reach and impact',
        'Created and managed quarterly publication RBE Magazine, establishing key channel for thought leadership and community involvement'
      ],
      technologies: ['SEO', 'Digital Marketing', 'Content Management', 'Brand Strategy'],
      icon: 'TrendingUp'
    },
    {
      title: 'Marketing Coordinator',
      company: 'Deerfield Financial Advisors',
      location: 'Indianapolis, IN',
      period: 'Jun 2013 – Jun 2015',
      type: 'development',
      description: 'Implemented integrated marketing campaigns for a financial services firm, ensuring all materials met strict FINRA and SEC compliance standards.',
      achievements: [
        'Implemented integrated marketing campaigns for financial services firm ensuring strict FINRA and SEC compliance',
        'Planned and executed over 20 client seminars, leading to 15% increase in client referrals'
      ],
      technologies: ['Compliance Marketing', 'Event Management', 'Client Relations'],
      icon: 'Shield'
    },
    {
      title: 'Marketing Coordinator',
      company: 'Pike Medical Consultants',
      location: 'Indianapolis, IN',
      period: 'Sep 2009 – Jun 2013',
      type: 'foundation',
      description: 'Directed all marketing initiatives, delivering an average of 45% growth in patient visits over a three-year period while consistently maintaining a positive ROI.',
      achievements: [
        'Directed all marketing initiatives, delivering average of 45% growth in patient visits over three-year period while maintaining positive ROI',
        'Led design, development, and marketing strategy for UrgentCare Indy website, building digital presence from ground up',
        'Integrated Clockwise MD online check-in system to reduce wait times and streamline patient onboarding'
      ],
      technologies: ['Healthcare Marketing', 'Website Development', 'Patient Management Systems'],
      icon: 'Heart'
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      current: 'bg-conversion text-white',
      leadership: 'bg-trust-builder text-white',
      growth: 'bg-primary text-white',
      development: 'bg-accent text-white',
      foundation: 'bg-muted text-text-primary'
    };
    
    return colors?.[type] || colors?.foundation;
  };

  const getConnectorColor = (type) => {
    const colors = {
      current: 'bg-conversion',
      leadership: 'bg-trust-builder',
      growth: 'bg-primary',
      development: 'bg-accent',
      foundation: 'bg-muted'
    };
    
    return colors?.[type] || colors?.foundation;
  };

  return (
    <section id="timeline" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
          Professional <span className="text-conversion">Timeline</span>
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          A progressive journey through marketing technology roles, each building upon 
          the last to create a unique blend of strategic marketing vision and deep technical expertise
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-0.5 w-0.5 h-full bg-border"></div>

          {experiences?.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex flex-col lg:flex-row lg:items-center mb-12 transition-all duration-300 ${
                activeItem === index ? 'lg:scale-105' : ''
              }`}
              onClick={() => setActiveItem(index)}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background ${
                getConnectorColor(exp?.type)
              } z-10`}></div>

              {/* Content Card */}
              <div className={`ml-20 lg:ml-0 lg:w-5/12 ${
                index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
              }`}>
                <div className={`bg-background border border-border rounded-xl p-8 brand-shadow cursor-pointer hover:shadow-lg transition-all duration-300 ${
                  activeItem === index ? 'border-conversion shadow-lg' : ''
                }`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        getTypeColor(exp?.type)
                      }`}>
                        <Icon name={exp?.icon} size={12} />
                        <span className="capitalize">{exp?.type}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        {exp?.title}
                      </h3>
                      
                      <div className="text-conversion font-semibold mb-1">
                        {exp?.company}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-text-secondary">
                        <span className="flex items-center space-x-1">
                          <Icon name="MapPin" size={14} />
                          <span>{exp?.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="Calendar" size={14} />
                          <span>{exp?.period}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {exp?.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp?.achievements?.slice(0, activeItem === index ? exp?.achievements?.length : 3)?.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-conversion rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-text-secondary leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {exp?.achievements?.length > 3 && activeItem !== index && (
                      <button
                        onClick={(e) => {
                          e?.stopPropagation();
                          setActiveItem(index);
                        }}
                        className="text-sm text-conversion hover:text-conversion-dark mt-2 flex items-center space-x-1"
                      >
                        <span>Show {exp?.achievements?.length - 3} more achievements</span>
                        <Icon name="ChevronDown" size={14} />
                      </button>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp?.technologies?.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;