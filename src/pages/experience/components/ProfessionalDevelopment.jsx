import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalDevelopment = () => {
  const [activeCategory, setActiveCategory] = useState('industry');

  const developmentCategories = {
    industry: {
      title: 'Industry Involvement',
      icon: 'Users',
      color: 'bg-conversion',
      activities: [
        {
          name: 'Indianapolis Digital Marketing Association',
          role: 'Active Member',
          period: '2018 - Present',
          description: 'Participate in monthly networking events and educational seminars focused on emerging marketing technologies',
          contributions: ['Guest speaker on marketing automation', 'Panel participant on AI in marketing']
        },
        {
          name: 'HubSpot User Group Indianapolis',
          role: 'Community Leader',
          period: '2020 - Present',
          description: 'Lead local HubSpot user group meetings, sharing best practices and advanced implementation strategies',
          contributions: ['Monthly presentation hosting', 'Advanced workflow training sessions']
        },
        {
          name: 'MarTech Conference',
          role: 'Annual Attendee',
          period: '2019 - Present',
          description: 'Stay current with marketing technology trends, tools, and industry best practices',
          contributions: ['Technology evaluation reports', 'Implementation strategy sharing']
        }
      ]
    },
    mentorship: {
      title: 'Mentorship & Teaching',
      icon: 'GraduationCap',
      color: 'bg-trust-builder',
      activities: [
        {
          name: 'Marketing Technology Mentorship Program',
          role: 'Senior Mentor',
          period: '2021 - Present',
          description: 'Mentor junior marketing professionals in marketing automation and systems integration',
          contributions: ['15+ professionals mentored', '90% promotion rate among mentees']
        },
        {
          name: 'Indiana University Guest Lectures',
          role: 'Guest Lecturer',
          period: '2022 - Present',
          description: 'Annual guest lectures on digital marketing trends and marketing technology careers',
          contributions: ['Student career guidance', 'Industry insights sharing']
        },
        {
          name: 'Internal Training Programs',
          role: 'Program Developer',
          period: '2019 - Present',
          description: 'Develop and deliver training programs for marketing teams on automation and analytics',
          contributions: ['Custom training curricula', 'Hands-on workshop facilitation']
        }
      ]
    },
    innovation: {
      title: 'Innovation & Research',
      icon: 'Lightbulb',
      color: 'bg-primary',
      activities: [
        {
          name: 'AI Marketing Applications Research',
          role: 'Independent Researcher',
          period: '2023 - Present',
          description: 'Research practical applications of AI and machine learning in marketing automation',
          contributions: ['Guardian AI system development', 'Predictive analytics models']
        },
        {
          name: 'Marketing Technology Blog',
          role: 'Technical Writer',
          period: '2020 - Present',
          description: 'Regular publication of technical articles on marketing automation and systems architecture',
          contributions: ['25+ published articles', '10K+ monthly readers']
        },
        {
          name: 'Open Source Contributions',
          role: 'Contributor',
          period: '2022 - Present',
          description: 'Contribute to open-source marketing technology tools and documentation',
          contributions: ['WordPress plugins', 'Integration libraries']
        }
      ]
    }
  };

  const upcomingGoals = [
    {
      goal: 'AI Marketing Certification',
      target: 'Q2 2024',
      description: 'Complete advanced certification in AI-powered marketing automation',
      icon: 'Brain',
      color: 'text-conversion'
    },
    {
      goal: 'Conference Speaking',
      target: '2024',
      description: 'Speak at major marketing technology conference on systems architecture',
      icon: 'Mic',
      color: 'text-trust-builder'
    },
    {
      goal: 'Certification Program',
      target: 'Q3 2024',
      description: 'Launch certification program for marketing automation specialists',
      icon: 'Award',
      color: 'text-primary'
    },
    {
      goal: 'Technical Publication',
      target: '2024',
      description: 'Publish comprehensive guide to marketing technology integration',
      icon: 'BookOpen',
      color: 'text-accent'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Professional <span className="text-conversion">Development</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Active engagement with the marketing technology community through mentorship, 
            industry involvement, and continuous innovation. Giving back while staying ahead 
            of emerging trends and technologies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object?.keys(developmentCategories)?.map((category) => {
            const cat = developmentCategories?.[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg border transition-all ${
                  activeCategory === category
                    ? `${cat?.color} text-white border-transparent shadow-lg`
                    : 'bg-background text-text-secondary border-border hover:border-conversion hover:text-conversion'
                }`}
              >
                <Icon name={cat?.icon} size={18} />
                <span className="font-medium">{cat?.title}</span>
              </button>
            );
          })}
        </div>

        {/* Development Activities */}
        <div className="bg-surface border border-border rounded-xl p-8 brand-shadow mb-16">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 rounded-lg ${developmentCategories?.[activeCategory]?.color} flex items-center justify-center`}>
                <Icon name={developmentCategories?.[activeCategory]?.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">
                {developmentCategories?.[activeCategory]?.title}
              </h3>
            </div>
          </div>

          <div className="space-y-8">
            {developmentCategories?.[activeCategory]?.activities?.map((activity, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-text-primary mb-1">
                          {activity?.name}
                        </h4>
                        <div className="flex items-center space-x-3 text-sm mb-2">
                          <span className="bg-conversion/10 text-conversion px-2 py-1 rounded-full font-medium">
                            {activity?.role}
                          </span>
                          <span className="text-text-secondary">
                            {activity?.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-4">
                      {activity?.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-text-primary mb-2">Key Contributions:</h5>
                      <div className="space-y-2">
                        {activity?.contributions?.map((contribution, contributionIndex) => (
                          <div key={contributionIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-conversion rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-text-secondary">
                              {contribution}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Goals */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              2024 Development Goals
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Continuous growth through strategic learning objectives and community engagement initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingGoals?.map((goal, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-6 text-center brand-shadow hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={goal?.icon} size={24} className={goal?.color} />
                </div>
                
                <h4 className="font-bold text-text-primary mb-2">
                  {goal?.goal}
                </h4>
                
                <div className="text-sm font-medium text-conversion mb-3">
                  Target: {goal?.target}
                </div>
                
                <p className="text-sm text-text-secondary leading-relaxed">
                  {goal?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Impact Statement */}
        <div className="mt-16 bg-background border border-border rounded-xl p-8 brand-shadow text-center">
          <h3 className="text-xl font-bold text-text-primary mb-4">
            Community Impact Philosophy
          </h3>
          <p className="text-text-secondary leading-relaxed max-w-4xl mx-auto">
            Professional growth isn't just about individual advancement—it's about elevating 
            the entire marketing technology community. Through mentorship, knowledge sharing, 
            and active industry participation, I contribute to the collective advancement of 
            marketing technology practices while staying at the forefront of innovation myself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;