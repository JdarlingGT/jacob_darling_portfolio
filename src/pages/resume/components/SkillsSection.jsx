import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsSection = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Marketing Technology",
      icon: "Target",
      color: "conversion",
      skills: [
        { name: "Salesforce Marketing Cloud", level: 95, endorsements: 24 },
        { name: "HubSpot", level: 92, endorsements: 18 },
        { name: "Marketo", level: 88, endorsements: 15 },
        { name: "Adobe Experience Cloud", level: 85, endorsements: 12 },
        { name: "Google Analytics 4", level: 90, endorsements: 21 },
        { name: "Marketing Automation", level: 94, endorsements: 28 }
      ]
    },
    {
      id: 2,
      title: "Technical Skills",
      icon: "Code",
      color: "trust-builder",
      skills: [
        { name: "Python", level: 85, endorsements: 16 },
        { name: "SQL", level: 88, endorsements: 19 },
        { name: "JavaScript", level: 82, endorsements: 14 },
        { name: "API Integration", level: 90, endorsements: 22 },
        { name: "Data Analysis", level: 92, endorsements: 25 },
        { name: "Machine Learning", level: 78, endorsements: 11 }
      ]
    },
    {
      id: 3,
      title: "Analytics & Reporting",
      icon: "BarChart3",
      color: "cta-warm",
      skills: [
        { name: "Tableau", level: 89, endorsements: 17 },
        { name: "Google Analytics", level: 93, endorsements: 26 },
        { name: "Power BI", level: 84, endorsements: 13 },
        { name: "Attribution Modeling", level: 87, endorsements: 15 },
        { name: "A/B Testing", level: 91, endorsements: 20 },
        { name: "Conversion Optimization", level: 88, endorsements: 18 }
      ]
    },
    {
      id: 4,
      title: "Leadership & Strategy",
      icon: "Users",
      color: "accent",
      skills: [
        { name: "Team Leadership", level: 92, endorsements: 31 },
        { name: "Project Management", level: 89, endorsements: 23 },
        { name: "Strategic Planning", level: 87, endorsements: 19 },
        { name: "Cross-functional Collaboration", level: 94, endorsements: 29 },
        { name: "Stakeholder Management", level: 90, endorsements: 22 },
        { name: "Process Optimization", level: 86, endorsements: 16 }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      conversion: 'bg-conversion text-conversion-foreground',
      'trust-builder': 'bg-trust-builder text-trust-builder-foreground',
      'cta-warm': 'bg-cta-warm text-cta-warm-foreground',
      accent: 'bg-accent text-accent-foreground'
    };
    return colorMap?.[color] || 'bg-primary text-primary-foreground';
  };

  const getProgressColor = (color) => {
    const colorMap = {
      conversion: 'bg-conversion',
      'trust-builder': 'bg-trust-builder',
      'cta-warm': 'bg-cta-warm',
      accent: 'bg-accent'
    };
    return colorMap?.[color] || 'bg-primary';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-8 mb-8">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
          <Icon name="Zap" size={20} className="text-accent-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary">Core Competencies</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories?.map((category) => (
          <div key={category?.id} className="space-y-6">
            {/* Category Header */}
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getColorClasses(category?.color)}`}>
                <Icon name={category?.icon} size={16} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{category?.title}</h3>
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              {category?.skills?.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-text-primary">{skill?.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-text-secondary">{skill?.level}%</span>
                      <div className="flex items-center space-x-1 text-xs text-text-secondary">
                        <Icon name="ThumbsUp" size={12} />
                        <span>{skill?.endorsements}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full smooth-transition ${getProgressColor(category?.color)}`}
                      style={{ width: `${skill?.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* LinkedIn Integration Note */}
      <div className="mt-8 p-4 bg-muted rounded-lg border border-border">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} className="text-accent mt-0.5" />
          <div>
            <p className="text-sm text-text-secondary">
              <span className="font-medium text-text-primary">LinkedIn Endorsements:</span> 
              {" "}Skill endorsements are synchronized with LinkedIn profile and updated in real-time. 
              Connect on LinkedIn to endorse skills and view detailed recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;