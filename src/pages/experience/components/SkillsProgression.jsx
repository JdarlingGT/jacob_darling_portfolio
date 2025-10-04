import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsProgression = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      title: 'Technical Skills',
      icon: 'Code',
      color: 'bg-conversion',
      skills: [
        { name: 'Marketing Automation', level: 95, years: '10+', description: 'Expert-level implementation of complex automation workflows' },
        { name: 'AI Integration', level: 90, years: '3+', description: 'Advanced AI assistant development and ML implementation' },
        { name: 'Systems Architecture', level: 88, years: '8+', description: 'Multi-platform integration and data pipeline design' },
        { name: 'Performance Optimization', level: 92, years: '12+', description: 'Server tuning, caching, and infrastructure optimization' },
        { name: 'Security Engineering', level: 85, years: '6+', description: 'Multi-layered defense systems and threat mitigation' },
        { name: 'Analytics Implementation', level: 93, years: '15+', description: 'GTM architecture and attribution modeling' }
      ]
    },
    strategic: {
      title: 'Strategic Skills',
      icon: 'Target',
      color: 'bg-trust-builder',
      skills: [
        { name: 'Digital Transformation', level: 94, years: '12+', description: 'End-to-end business process modernization' },
        { name: 'Revenue Optimization', level: 91, years: '15+', description: 'ROI-focused campaign and system design' },
        { name: 'Brand Strategy', level: 87, years: '10+', description: 'Comprehensive brand positioning and messaging' },
        { name: 'Project Management', level: 89, years: '15+', description: 'Complex technical project delivery and team leadership' },
        { name: 'Change Management', level: 86, years: '8+', description: 'Organizational transformation and adoption strategies' },
        { name: 'Stakeholder Relations', level: 92, years: '15+', description: 'Cross-functional collaboration and executive communication' }
      ]
    },
    leadership: {
      title: 'Leadership Skills',
      icon: 'Users',
      color: 'bg-primary',
      skills: [
        { name: 'Team Development', level: 88, years: '10+', description: 'Mentoring and developing technical marketing talent' },
        { name: 'Strategic Planning', level: 91, years: '12+', description: 'Long-term vision development and execution roadmaps' },
        { name: 'Cross-functional Leadership', level: 89, years: '15+', description: 'Leading diverse teams across departments and disciplines' },
        { name: 'Innovation Management', level: 87, years: '8+', description: 'Driving adoption of emerging technologies and methodologies' },
        { name: 'Vendor Management', level: 90, years: '10+', description: 'Strategic technology partnerships and procurement' },
        { name: 'Budget Management', level: 85, years: '12+', description: 'ROI-focused resource allocation and cost optimization' }
      ]
    }
  };

  const getProficiencyColor = (level) => {
    if (level >= 90) return 'bg-conversion';
    if (level >= 80) return 'bg-trust-builder';
    if (level >= 70) return 'bg-primary';
    return 'bg-accent';
  };

  const getProficiencyText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    return 'Developing';
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Skills <span className="text-conversion">Progression</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Fifteen years of continuous skill development across technical implementation, 
            strategic planning, and leadership. Each competency has been refined through 
            real-world application and measurable business outcomes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object?.keys(skillCategories)?.map((category) => {
            const cat = skillCategories?.[category];
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
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeCategory === category
                    ? 'bg-white/20 text-white' :'bg-muted text-text-secondary'
                }`}>
                  {cat?.skills?.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="bg-surface border border-border rounded-xl p-8 brand-shadow">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 rounded-lg ${skillCategories?.[activeCategory]?.color} flex items-center justify-center`}>
                <Icon name={skillCategories?.[activeCategory]?.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">
                {skillCategories?.[activeCategory]?.title}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories?.[activeCategory]?.skills?.map((skill, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-1">
                      {skill?.name}
                    </h4>
                    <div className="flex items-center space-x-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-white ${getProficiencyColor(skill?.level)}`}>
                        {getProficiencyText(skill?.level)}
                      </span>
                      <span className="text-text-secondary">
                        {skill?.years} years
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-conversion">
                      {skill?.level}%
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProficiencyColor(skill?.level)} transition-all duration-1000`}
                      style={{ width: `${skill?.level}%` }}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {skill?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Development Philosophy */}
        <div className="mt-16 bg-background border border-border rounded-xl p-8 brand-shadow">
          <div className="text-center">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Continuous Learning Philosophy
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-4xl mx-auto">
              My approach to skill development is rooted in practical application and measurable outcomes. 
              Each competency listed has been developed through real-world projects, refined through 
              iteration, and validated through business results. The technology landscape evolves rapidly, 
              and I maintain proficiency through continuous learning, industry engagement, and hands-on 
              experimentation with emerging tools and methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-conversion/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={24} className="text-conversion" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Learn</h4>
              <p className="text-sm text-text-secondary">
                Continuous education through courses, certifications, and industry research
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-trust-builder/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={24} className="text-trust-builder" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Apply</h4>
              <p className="text-sm text-text-secondary">
                Hands-on implementation in real business environments with measurable outcomes
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Share2" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Share</h4>
              <p className="text-sm text-text-secondary">
                Knowledge transfer through mentoring, documentation, and team development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsProgression;