import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementsSection = () => {
  const metrics = [
    { label: "Support Ticket Reduction", value: "70%", icon: "TrendingDown", description: "at Graston Technique®" },
    { label: "E-commerce Conversions", value: "40%", icon: "ShoppingCart", description: "increase at Graston Technique®" },
    { label: "Annual Revenue Growth", value: "50%", icon: "DollarSign", description: "at Riley Bennett Egloff" },
    { label: "Patient Visit Growth", value: "45%", icon: "Users", description: "at Pike Medical Consultants" },
    { label: "Qualified Inquiries", value: "35%", icon: "TrendingUp", description: "increase at Riley Bennett Egloff" },
    { label: "Marketing Automations", value: "400+", icon: "Zap", description: "workflows at Graston Technique®" }
  ];

  const achievements = [
    {
      id: 1,
      title: "Marketing Director & Systems Architect",
      organization: "Graston Technique®",
      date: "2023-Present",
      description: "Leading full-stack digital transformation for national healthcare education platform. Engineered 70% reduction in support tickets through AI automation, 40% increase in e-commerce conversions, and comprehensive security infrastructure neutralizing 85,000+ malicious bot hits monthly.",
      icon: "Briefcase",
      category: "Current Role",
      logo: "/assets/images/GT_Logo_RGB-1759610986907.png"
    },
    {
      id: 2,
      title: "Board Member & Marketing Lead",
      organization: "Primary Colours",
      date: "2018-2019",
      description: "Provided marketing leadership and strategic guidance for Indianapolis-based visual arts non-profit. Redesigned website, developed sponsorship strategies, and contributed to exhibiting 200+ local artists while generating $46,000+ for the arts community.",
      icon: "Palette",
      category: "Community Leadership",
      logo: "/assets/images/PC-Logo-1759610614733.jpg"
    },
    {
      id: 3,
      title: "Salesforce Trailblazer Community Leader",
      organization: "Salesforce",
      date: "08/2023",
      description: "Appointed as community leader for contributions to marketing automation best practices and mentoring 50+ professionals.",
      icon: "Users",
      category: "Community Leadership"
    },
    {
      id: 4,
      title: "Revenue Growth Excellence",
      organization: "TechFlow Solutions",
      date: "12/2022",
      description: "Achieved 340% increase in qualified leads and $2.8M additional revenue through marketing automation transformation.",
      icon: "TrendingUp",
      category: "Performance Achievement"
    },
    {
      id: 5,
      title: "Digital Transformation Champion",
      organization: "GrowthTech Inc.",
      date: "06/2021",
      description: "Led company-wide marketing technology modernization, reducing manual processes by 70% and improving data accuracy by 95%.",
      icon: "Zap",
      category: "Innovation"
    },
    {
      id: 6,
      title: "Customer Success Excellence",
      organization: "DataDriven Marketing",
      date: "09/2019",
      description: "Optimized marketing attribution model resulting in 35% improvement in ROAS across $500K+ monthly ad spend.",
      icon: "Target",
      category: "Performance Achievement"
    },
    {
      id: 7,
      title: "Board Member & Marketing Lead",
      organization: "Primary Colours",
      date: "2018-2019",
      description: "Provided marketing leadership and strategic guidance for Indianapolis-based visual arts non-profit. Redesigned website, developed sponsorship strategies, and contributed to exhibiting 200+ local artists while generating $46,000+ for the arts community.",
      icon: "Palette",
      category: "Community Leadership",
      logo: "/assets/images/PC-Logo-1759610614733.jpg"
    },
    {
      id: 8,
      title: "Target Marketing Competition Winner",
      organization: "Indiana University",
      date: "2006",
      description: "Led team to first place in university-wide competition by developing innovative marketing strategy that impressed panel of industry judges.",
      icon: "Trophy", 
      category: "Industry Recognition",
      logo: "/assets/images/Indiana_University_seal.svg-1759610505683.png"
    },
    {
      id: 9,
      title: "Board President",
      organization: "School 80 Condominiums HOA",
      date: "2019-Present",
      description: "Lead governance, strategic planning, and budget management for residential community, facilitating effective communications and managing vendor relationships.",
      icon: "Home",
      category: "Community Leadership",
      logo: "/assets/images/Logo-1759610700707.png"
    },
    {
      id: 10,
      title: "Strategic Marketing Partner",
      organization: "Primary Care Indy",
      date: "2020-Present",
      description: "Providing strategic marketing partnership and digital transformation expertise for B2C healthcare services, contributing to enhanced patient engagement and practice growth through data-driven marketing initiatives.",
      icon: "Heart",
      category: "Strategic Partnership",
      logo: "/assets/images/Primary_Care_Logo-1759610860809.png"
    }
  ];

  const getCategoryColor = (category) => {
    const colorMap = {
      "Industry Recognition": "conversion",
      "Community Leadership": "trust-builder",
      "Performance Achievement": "cta-warm",
      "Innovation": "accent",
      "Strategic Partnership": "primary"
    };
    return colorMap?.[category] || "primary";
  };

  const getCategoryClasses = (category) => {
    const color = getCategoryColor(category);
    const colorMap = {
      conversion: 'bg-conversion/10 text-conversion border-conversion/20',
      'trust-builder': 'bg-trust-builder/10 text-trust-builder border-trust-builder/20',
      'cta-warm': 'bg-cta-warm/10 text-cta-warm border-cta-warm/20',
      accent: 'bg-accent/10 text-accent border-accent/20',
      primary: 'bg-primary/10 text-primary border-primary/20'
    };
    return colorMap?.[color] || 'bg-primary/10 text-primary border-primary/20';
  };

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="bg-card border border-border rounded-lg p-8">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-conversion rounded-lg flex items-center justify-center">
            <Icon name="BarChart3" size={20} className="text-conversion-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary">Key Performance Metrics</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={metric?.icon} size={24} className="text-conversion" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">{metric?.value}</div>
              <div className="text-sm text-text-secondary">{metric?.label}</div>
              {metric?.description && (
                <div className="text-xs text-text-secondary/70 mt-1">{metric?.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Awards & Recognition */}
      <div className="bg-card border border-border rounded-lg p-8">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-cta-warm rounded-lg flex items-center justify-center">
            <Icon name="Trophy" size={20} className="text-cta-warm-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary">Awards & Recognition</h2>
        </div>

        <div className="space-y-6">
          {achievements?.map((achievement, index) => (
            <div key={achievement?.id} className="relative">
              {/* Timeline Line */}
              {index !== achievements?.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-cta-warm rounded-full border-2 border-background"></div>
              
              {/* Content */}
              <div className="ml-16">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start space-x-3 mb-3">
                      {achievement?.logo ? (
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                          <img 
                            src={achievement?.logo}
                            alt={`${achievement?.organization} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={achievement?.icon} size={20} className="text-cta-warm" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-1">{achievement?.title}</h3>
                        <p className="text-cta-warm font-medium mb-2">{achievement?.organization}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getCategoryClasses(achievement?.category)}`}>
                          {achievement?.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{achievement?.description}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-text-secondary mt-4 lg:mt-0">
                    <Icon name="Calendar" size={16} />
                    <span className="font-medium">{achievement?.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;