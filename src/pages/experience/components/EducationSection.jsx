import React from 'react';
import Icon from '../../../components/AppIcon';

const EducationSection = () => {
  const education = [
    {
      type: 'formal',
      degree: 'Bachelor of Science in Business Administration',
      institution: 'Indiana University',
      location: 'Bloomington, IN',
      year: '2009',
      focus: 'Marketing & Information Systems',
      description: 'Foundational education in business principles with specialized focus on marketing strategy and information technology systems.',
      achievements: [
        'Marketing Strategy Concentration',
        'Information Systems Minor',
        'Business Analytics Coursework'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      year: '2024',
      status: 'Current',
      icon: 'BarChart3',
      color: 'bg-conversion'
    },
    {
      name: 'Google Ads Certified',
      issuer: 'Google',
      year: '2024',
      status: 'Current',
      icon: 'Target',
      color: 'bg-trust-builder'
    },
    {
      name: 'HubSpot Marketing Software',
      issuer: 'HubSpot',
      year: '2023',
      status: 'Current',
      icon: 'Settings',
      color: 'bg-primary'
    },
    {
      name: 'Cloudflare Certified',
      issuer: 'Cloudflare',
      year: '2023',
      status: 'Current',
      icon: 'Shield',
      color: 'bg-accent'
    }
  ];

  const continuingEducation = [
    {
      category: 'AI & Machine Learning',
      courses: [
        'Machine Learning for Marketing Applications',
        'AI-Powered Marketing Automation',
        'Large Language Model Integration',
        'Predictive Analytics for Customer Journey'
      ],
      icon: 'Brain',
      color: 'text-conversion'
    },
    {
      category: 'Systems Architecture',
      courses: [
        'Cloud Infrastructure Design',
        'API Integration Strategies',
        'Database Optimization Techniques',
        'Microservices Architecture'
      ],
      icon: 'Network',
      color: 'text-trust-builder'
    },
    {
      category: 'Digital Marketing',
      courses: [
        'Advanced Attribution Modeling',
        'Conversion Rate Optimization',
        'Marketing Data Science',
        'Customer Data Platform Management'
      ],
      icon: 'TrendingUp',
      color: 'text-primary'
    },
    {
      category: 'Leadership & Strategy',
      courses: [
        'Digital Transformation Leadership',
        'Agile Project Management',
        'Change Management Strategies',
        'Executive Communication'
      ],
      icon: 'Users',
      color: 'text-accent'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Education & <span className="text-conversion">Development</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A foundation in business and information systems, enhanced by continuous professional 
            development and industry certifications. Learning never stops in the rapidly evolving 
            world of marketing technology.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Formal Education
          </h3>
          
          {education?.map((edu, index) => (
            <div key={index} className="bg-background border border-border rounded-xl p-8 brand-shadow max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="GraduationCap" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-text-primary">
                        {edu?.degree}
                      </h4>
                      <p className="text-conversion font-semibold">
                        {edu?.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-text-secondary mb-4">
                    <span className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{edu?.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} />
                      <span>Graduated {edu?.year}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="BookOpen" size={14} />
                      <span>{edu?.focus}</span>
                    </span>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {edu?.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-text-primary mb-2">Key Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu?.achievements?.map((achievement, achievementIndex) => (
                        <span 
                          key={achievementIndex}
                          className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full border border-border"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-6 text-center brand-shadow hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 rounded-full ${cert?.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={cert?.icon} size={24} className="text-white" />
                </div>
                
                <h4 className="font-bold text-text-primary mb-2">
                  {cert?.name}
                </h4>
                
                <p className="text-sm text-conversion font-semibold mb-2">
                  {cert?.issuer}
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
                  <span>{cert?.year}</span>
                  <span>•</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    cert?.status === 'Current' ? 'bg-conversion/10 text-conversion' : 'bg-muted text-text-secondary'
                  }`}>
                    {cert?.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuing Education */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Continuing Education
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {continuingEducation?.map((category, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-8 brand-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <Icon name={category?.icon} size={24} className={category?.color} />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary">
                    {category?.category}
                  </h4>
                </div>
                
                <div className="space-y-3">
                  {category?.courses?.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-conversion rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 bg-background border border-border rounded-xl p-8 brand-shadow text-center">
          <h3 className="text-xl font-bold text-text-primary mb-4">
            Commitment to Lifelong Learning
          </h3>
          <p className="text-text-secondary leading-relaxed max-w-4xl mx-auto mb-8">
            The marketing technology landscape evolves at breakneck speed. My educational approach 
            combines formal learning with hands-on experimentation, ensuring I stay ahead of 
            industry trends while maintaining deep expertise in foundational principles. Every 
            new tool, platform, or methodology is evaluated not just for novelty, but for its 
            potential to drive measurable business outcomes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-conversion/10 text-conversion rounded-full text-sm font-medium">
              Self-Directed Learning
            </span>
            <span className="px-4 py-2 bg-trust-builder/10 text-trust-builder rounded-full text-sm font-medium">
              Industry Engagement
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Hands-on Experimentation
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Peer Collaboration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;