import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsVisualization = () => {
  const [activeCategory, setActiveCategory] = useState('marketing');

  const skillCategories = {
    marketing: {
      title: "Marketing Technology",
      icon: "Target",
      color: "conversion",
      skills: [
        { name: "Marketing Automation", level: 95, projects: 45 },
        { name: "Customer Journey Mapping", level: 92, projects: 38 },
        { name: "A/B Testing & Optimization", level: 90, projects: 52 },
        { name: "Lead Scoring & Nurturing", level: 88, projects: 41 },
        { name: "Campaign Analytics", level: 94, projects: 47 },
        { name: "Personalization Engines", level: 87, projects: 33 }
      ]
    },
    technical: {
      title: "Technical Architecture",
      icon: "Code",
      color: "trust-builder",
      skills: [
        { name: "React & Next.js", level: 96, projects: 68 },
        { name: "Node.js & Express", level: 93, projects: 55 },
        { name: "Python & Django", level: 89, projects: 42 },
        { name: "PostgreSQL & MongoDB", level: 91, projects: 48 },
        { name: "AWS & Cloud Architecture", level: 88, projects: 39 },
        { name: "Docker & Kubernetes", level: 85, projects: 31 }
      ]
    },
    analytics: {
      title: "Data & Analytics",
      icon: "BarChart3",
      color: "cta-warm",
      skills: [
        { name: "Google Analytics & GTM", level: 94, projects: 61 },
        { name: "SQL & Data Modeling", level: 92, projects: 44 },
        { name: "Machine Learning", level: 83, projects: 28 },
        { name: "Business Intelligence", level: 89, projects: 36 },
        { name: "Statistical Analysis", level: 86, projects: 32 },
        { name: "Data Visualization", level: 91, projects: 43 }
      ]
    },
    leadership: {
      title: "Leadership & Strategy",
      icon: "Users",
      color: "secondary",
      skills: [
        { name: "Team Leadership", level: 93, projects: 25 },
        { name: "Strategic Planning", level: 91, projects: 22 },
        { name: "Cross-functional Collaboration", level: 95, projects: 48 },
        { name: "Stakeholder Management", level: 89, projects: 31 },
        { name: "Process Optimization", level: 92, projects: 37 },
        { name: "Mentoring & Development", level: 88, projects: 19 }
      ]
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const getColorClass = (color, type = 'bg') => {
    const colorMap = {
      'conversion': type === 'bg' ? 'bg-conversion' : 'text-conversion',
      'trust-builder': type === 'bg' ? 'bg-trust-builder' : 'text-trust-builder',
      'cta-warm': type === 'bg' ? 'bg-cta-warm' : 'text-cta-warm',
      'secondary': type === 'bg' ? 'bg-secondary' : 'text-secondary'
    };
    return colorMap?.[color] || 'bg-conversion';
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-conversion/10 rounded-xl flex items-center justify-center mr-4">
              <Icon name="Zap" size={24} className="text-conversion" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A comprehensive view of technical capabilities, project experience, and proficiency levels 
            across marketing technology, development, and leadership domains.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium smooth-transition ${
                activeCategory === key
                  ? `${getColorClass(category?.color)} text-white`
                  : 'bg-muted text-text-secondary hover:bg-secondary/20 hover:text-text-primary'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skills List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              {skillCategories?.[activeCategory]?.title} Skills
            </h3>
            
            {skillCategories?.[activeCategory]?.skills?.map((skill, index) => (
              <div key={index} className="bg-card rounded-xl p-6 brand-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-text-primary">
                    {skill?.name}
                  </h4>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-text-secondary">
                      {skill?.projects} projects
                    </span>
                    <span className="text-lg font-bold text-conversion">
                      {skill?.level}%
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getColorClass(skillCategories?.[activeCategory]?.color)} rounded-full smooth-transition`}
                      style={{ width: `${skill?.level}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-text-secondary mt-2">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visualization */}
          <div className="bg-card rounded-xl p-8 brand-border">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Proficiency Overview
            </h3>
            
            {/* Radar Chart Representation */}
            <div className="relative w-full h-80 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Concentric Circles */}
                {[1, 2, 3, 4, 5]?.map((level) => (
                  <div
                    key={level}
                    className="absolute border border-muted rounded-full"
                    style={{
                      width: `${level * 20}%`,
                      height: `${level * 20}%`,
                      top: `${50 - (level * 10)}%`,
                      left: `${50 - (level * 10)}%`
                    }}
                  />
                ))}
                
                {/* Skill Points */}
                {skillCategories?.[activeCategory]?.skills?.map((skill, index) => {
                  const angle = (index * 360) / skillCategories?.[activeCategory]?.skills?.length;
                  const radius = (skill?.level / 100) * 120;
                  const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                  const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                  
                  return (
                    <div
                      key={index}
                      className={`absolute w-4 h-4 ${getColorClass(skillCategories?.[activeCategory]?.color)} rounded-full transform -translate-x-1/2 -translate-y-1/2`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`
                      }}
                      title={`${skill?.name}: ${skill?.level}%`}
                    />
                  );
                })}
                
                {/* Center Point */}
                <div className="absolute w-3 h-3 bg-text-primary rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 space-y-2">
              <h4 className="font-semibold text-text-primary mb-4">Proficiency Levels</h4>
              {[
                { level: "90-100%", label: "Expert", color: "bg-trust-builder" },
                { level: "80-89%", label: "Advanced", color: "bg-conversion" },
                { level: "70-79%", label: "Intermediate", color: "bg-cta-warm" },
                { level: "60-69%", label: "Developing", color: "bg-secondary" }
              ]?.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-3 h-3 ${item?.color} rounded-full`} />
                  <span className="text-sm text-text-secondary">
                    {item?.level} - {item?.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-card rounded-xl brand-border">
            <div className="w-12 h-12 bg-conversion/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={24} className="text-conversion" />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-2">50+</div>
            <div className="text-sm text-text-secondary">Technologies Mastered</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl brand-border">
            <div className="w-12 h-12 bg-trust-builder/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Briefcase" size={24} className="text-trust-builder" />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-2">150+</div>
            <div className="text-sm text-text-secondary">Projects Completed</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl brand-border">
            <div className="w-12 h-12 bg-cta-warm/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} className="text-cta-warm" />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-2">92%</div>
            <div className="text-sm text-text-secondary">Average Proficiency</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl brand-border">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-secondary" />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-2">25+</div>
            <div className="text-sm text-text-secondary">Teams Led</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization;