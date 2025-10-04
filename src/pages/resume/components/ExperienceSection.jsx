import React from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Marketing Director & Systems Architect",
      company: "Graston Technique®",
      location: "Indianapolis, IN",
      duration: "Aug 2023 – Present",
      type: "Full-time",
      achievements: [
        "Led a full-stack digital transformation for a national healthcare education platform, operating as both brand strategist and systems architect to build a scalable marketing ecosystem from the ground up",
        "Automation & AI: Architected a 'Guardian' AI assistant and over 400 automated workflows, reducing manual data entry by hours per week and decreasing support tickets by 70%",
        "Revenue & Product Innovation: Engineered a 'Launchpad' provider directory and an innovative e-commerce checkout system, transforming a static asset into an automated revenue engine and increasing conversions by 40%",
        "Analytics & Ad Spend Optimization: Overhauled the entire analytics pipeline ('The Compass'), implementing a new GTM architecture and reconfiguring Google Ads conversions to focus on high-value actions, enabling precise attribution and maximizing marketing ROI",
        "Security & Performance Engineering: Hardened the entire web infrastructure ('The Fortress'), deploying a multi-layered Cloudflare defense that neutralizes ~85,000 malicious bot hits monthly and tuning server performance ('The Engine Room') to eliminate downtime and achieve a cache-hit ratio of 86%",
        "Systems Integration: Designed and built 'The Conductor,' a seamless data pipeline integrating five disparate platforms (WooCommerce, LearnDash, Gravity Forms, FluentCRM) to create a single source of truth for all customer data"
      ],
      technologies: ["WordPress", "WooCommerce", "LearnDash", "Gravity Forms", "FluentCRM", "Cloudflare", "Google Analytics", "Google Ads", "AI Integration", "Marketing Automation"]
    },
    {
      id: 2,
      title: "Interim Director of Marketing",
      company: "Ultimate Technologies Group",
      location: "Fishers, IN",
      duration: "Mar 2023 – Jul 2023",
      type: "Full-time",
      achievements: [
        "Stabilized marketing operations during a critical leadership transition",
        "Streamlined lead generation workflows, improved GTM tracking, and implemented new CRM efficiencies that resulted in a 40% improvement in campaign production timelines"
      ],
      technologies: ["CRM Systems", "Google Tag Manager", "Lead Generation Tools", "Campaign Management"]
    },
    {
      id: 3,
      title: "Marketing Manager & Administrator",
      company: "Riley Bennett Egloff, LLP",
      location: "Indianapolis, IN",
      duration: "Jun 2015 – Mar 2023",
      type: "Full-time",
      achievements: [
        "Directed a decade of marketing evolution, from traditional outreach to a fully digital operation",
        "Led a comprehensive firm-wide digital rebrand and technical SEO overhaul that directly resulted in a 35% increase in qualified client inquiries",
        "Revenue & Growth: Contributed to a 50% increase in the firm\'s annual revenue through strategic marketing planning and execution",
        "Digital Transformation: Transitioned the firm from traditional to digital-first marketing, achieving a 40% cost savings on marketing expenses while increasing reach and impact",
        "Content & Brand Authority: Created and managed the firm's quarterly publication, RBE Magazine, establishing a key channel for thought leadership and community involvement"
      ],
      technologies: ["Digital Marketing", "SEO", "Content Management", "Brand Development", "Publication Management", "Website Development"]
    },
    {
      id: 4,
      title: "Marketing Coordinator",
      company: "Deerfield Financial Advisors",
      location: "Indianapolis, IN",
      duration: "Jun 2013 – Jun 2015",
      type: "Full-time",
      achievements: [
        "Implemented integrated marketing campaigns for a financial services firm, ensuring all materials met strict FINRA and SEC compliance standards",
        "Planned and executed over 20 client seminars, leading to a 15% increase in client referrals"
      ],
      technologies: ["Compliance Marketing", "Event Management", "Client Relationship Management", "Financial Services Marketing"]
    },
    {
      id: 5,
      title: "Marketing Coordinator",
      company: "Pike Medical Consultants",
      location: "Indianapolis, IN",
      duration: "Sep 2009 – Jun 2013",
      type: "Full-time",
      achievements: [
        "Directed all marketing initiatives, delivering an average of 45% growth in patient visits over a three-year period while consistently maintaining a positive ROI",
        "Digital Product Launch: Led the design, development, and marketing strategy for the UrgentCare Indy website, a new division of the company, building its digital presence from the ground up",
        "Technical Implementation: Integrated advanced functionality into the patient experience, including the Clockwise MD online check-in system to reduce wait times and streamline onboarding"
      ],
      technologies: ["Healthcare Marketing", "Website Development", "Patient Management Systems", "Digital Strategy", "ROI Optimization"]
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-8 mb-8">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-conversion rounded-lg flex items-center justify-center">
          <Icon name="Briefcase" size={20} className="text-conversion-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary">Professional Experience</h2>
      </div>
      <div className="space-y-8">
        {experiences?.map((exp, index) => (
          <div key={exp?.id} className="relative">
            {/* Timeline Line */}
            {index !== experiences?.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
            )}
            
            {/* Timeline Dot */}
            <div className="absolute left-4 top-6 w-4 h-4 bg-conversion rounded-full border-2 border-background"></div>
            
            {/* Content */}
            <div className="ml-16">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-1">{exp?.title}</h3>
                  <div className="flex items-center space-x-4 text-text-secondary mb-2">
                    <span className="font-medium">{exp?.company}</span>
                    <span className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{exp?.location}</span>
                    </span>
                    <span className="px-2 py-1 bg-muted rounded text-xs">{exp?.type}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="Calendar" size={16} />
                  <span className="font-medium">{exp?.duration}</span>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {exp?.achievements?.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-3">
                      <Icon name="ChevronRight" size={16} className="text-conversion mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-3">Key Technologies & Tools</h4>
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
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;