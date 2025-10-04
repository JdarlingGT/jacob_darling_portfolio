import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsProgressionSection = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [animatedValues, setAnimatedValues] = useState({});

  const skillCategories = {
    technical: {
      title: "Technical Expertise",
      icon: "Code",
      color: "conversion",
      description: "Building robust marketing technology solutions with modern tools and frameworks"
    },
    marketing: {
      title: "Marketing Strategy",
      icon: "TrendingUp",
      color: "trust-builder",
      description: "Strategic marketing operations and campaign optimization expertise"
    },
    leadership: {
      title: "Leadership & Management",
      icon: "Users",
      color: "cta-warm",
      description: "Team leadership, project management, and cross-functional collaboration"
    },
    analytics: {
      title: "Data & Analytics",
      icon: "BarChart3",
      color: "secondary",
      description: "Advanced analytics, attribution modeling, and performance measurement"
    }
  };

  const skillsData = {
    technical: [
      { name: "JavaScript/React", level: 92, years: "5+ years", projects: "40+ projects" },
      { name: "Python/Data Science", level: 88, years: "4+ years", projects: "25+ projects" },
      { name: "SQL/Database Design", level: 90, years: "6+ years", projects: "50+ projects" },
      { name: "API Integration", level: 85, years: "5+ years", projects: "35+ projects" },
      { name: "Cloud Platforms (AWS)", level: 82, years: "3+ years", projects: "20+ projects" },
      { name: "Marketing Automation", level: 95, years: "7+ years", projects: "60+ projects" }
    ],
    marketing: [
      { name: "Campaign Strategy", level: 94, years: "8+ years", projects: "100+ campaigns" },
      { name: "Lead Generation", level: 91, years: "7+ years", projects: "80+ campaigns" },
      { name: "Email Marketing", level: 93, years: "8+ years", projects: "200+ campaigns" },
      { name: "Content Marketing", level: 87, years: "6+ years", projects: "150+ pieces" },
      { name: "SEO/SEM", level: 89, years: "6+ years", projects: "50+ sites" },
      { name: "Social Media Strategy", level: 84, years: "5+ years", projects: "30+ brands" }
    ],
    leadership: [
      { name: "Team Leadership", level: 90, years: "4+ years", projects: "12+ team members" },
      { name: "Project Management", level: 92, years: "6+ years", projects: "100+ projects" },
      { name: "Stakeholder Management", level: 88, years: "5+ years", projects: "50+ stakeholders" },
      { name: "Process Optimization", level: 91, years: "7+ years", projects: "30+ processes" },
      { name: "Training & Development", level: 86, years: "4+ years", projects: "200+ trainees" },
      { name: "Strategic Planning", level: 89, years: "5+ years", projects: "25+ strategies" }
    ],
    analytics: [
      { name: "Google Analytics", level: 93, years: "7+ years", projects: "80+ implementations" },
      { name: "Attribution Modeling", level: 90, years: "5+ years", projects: "30+ models" },
      { name: "Data Visualization", level: 88, years: "4+ years", projects: "50+ dashboards" },
      { name: "A/B Testing", level: 91, years: "6+ years", projects: "200+ tests" },
      { name: "Conversion Optimization", level: 92, years: "7+ years", projects: "100+ optimizations" },
      { name: "Reporting & KPIs", level: 94, years: "8+ years", projects: "500+ reports" }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedValues = {};
      skillsData?.[activeCategory]?.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedValues(prev => ({
            ...prev,
            [`${activeCategory}-${index}`]: skill?.level
          }));
        }, index * 100);
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-6">
            <Icon name="TrendingUp" size={16} className="text-conversion" />
            <span className="text-sm font-medium text-text-secondary">Skills Progression</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Expertise Built Through
            <span className="block text-conversion">Continuous Learning</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Eight years of hands-on experience across technical implementation, marketing strategy, team leadership, and data analytics.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium smooth-transition ${
                activeCategory === key
                  ? `bg-${category?.color} text-${category?.color}-foreground brand-shadow`
                  : 'bg-muted/50 text-text-secondary hover:bg-muted hover:text-text-primary'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            {skillCategories?.[activeCategory]?.title}
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {skillCategories?.[activeCategory]?.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData?.[activeCategory]?.map((skill, index) => (
            <div
              key={`${activeCategory}-${index}`}
              className="bg-card border border-border rounded-xl p-6 brand-shadow hover:scale-105 smooth-transition"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-text-primary">{skill?.name}</h4>
                <span className={`text-sm font-bold text-${skillCategories?.[activeCategory]?.color}`}>
                  {animatedValues?.[`${activeCategory}-${index}`] || 0}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div
                  className={`h-2 rounded-full bg-${skillCategories?.[activeCategory]?.color} smooth-transition`}
                  style={{
                    width: `${animatedValues?.[`${activeCategory}-${index}`] || 0}%`,
                    transition: 'width 1s ease-out'
                  }}
                />
              </div>

              {/* Skill Details */}
              <div className="flex items-center justify-between text-sm text-text-secondary">
                <span className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{skill?.years}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Briefcase" size={14} />
                  <span>{skill?.projects}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-conversion mb-2">150+</div>
            <div className="text-sm text-text-secondary">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-trust-builder mb-2">25+</div>
            <div className="text-sm text-text-secondary">Technologies Mastered</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-cta-warm mb-2">8+</div>
            <div className="text-sm text-text-secondary">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-secondary mb-2">200+</div>
            <div className="text-sm text-text-secondary">Team Members Trained</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsProgressionSection;