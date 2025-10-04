import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const timelineData = [
    {
      id: 1,
      year: "2023",
      period: "Present",
      title: "Marketing Director & System Architect",
      company: "Graston Technique®",
      location: "Remote",
      industry: "Healthcare Education & Medical Devices (B2B & B2C)",
      description: "As a leader in a high-volume educational platform, I serve thousands of clinicians through continuing education and clinical tool sales. My role is to lead both marketing strategy and technical execution. I architected and personally engineered an integrated ecosystem with LearnDash LMS, WooCommerce, WP Fusion, and FluentCRM, building over 400 automations to streamline the entire user lifecycle.",
      achievements: [
        "Built over 400 automations to streamline entire user lifecycle",
        "Deployed GPT-powered assistant for user support",
        "Optimized site speed with WP Rocket and LiteSpeed",
        "Built custom provider analytics dashboards that sync with GA4"
      ],
      technologies: ["LearnDash LMS", "WooCommerce", "WP Fusion", "FluentCRM", "WordPress", "GA4", "OpenAI GPT"],
      icon: "Crown",
      color: "conversion"
    },
    {
      id: 2,
      year: "2023",
      period: "2023",
      title: "Interim Director of Marketing",
      company: "Ultimate Technologies Group",
      location: "Remote",
      industry: "B2B Technology & AV Integration",
      description: "During a critical leadership transition, I was brought in to stabilize all marketing operations for this B2B technology integrator. I successfully streamlined lead generation workflows, improved GTM tracking for better attribution, and implemented new CRM efficiencies.",
      achievements: [
        "Streamlined lead generation workflows during critical transition",
        "Improved GTM tracking for better attribution",
        "40% improvement in campaign production timelines",
        "Implemented new CRM efficiencies across marketing operations"
      ],
      technologies: ["Google Tag Manager", "CRM Systems", "Lead Generation", "Attribution Modeling"],
      icon: "TrendingUp",
      color: "trust-builder"
    },
    {
      id: 3,
      year: "2015",
      period: "2023",
      title: "Marketing Manager → Administrator",
      company: "Riley Bennett Egloff, LLP",
      location: "Indianapolis, IN",
      industry: "B2B Legal Services",
      description: "At this respected B2B law firm, my role was to direct firm-wide marketing, content strategy, and business development. I managed a complete digital rebrand and technical SEO overhaul, which led to a 35% increase in qualified client inquiries.",
      achievements: [
        "Complete digital rebrand and technical SEO overhaul",
        "35% increase in qualified client inquiries",
        "Created and managed quarterly publication RBE Magazine",
        "Secured multiple \'Best Law Firm\' awards through targeted media outreach"
      ],
      technologies: ["SEO", "Content Management", "Digital Marketing", "Brand Strategy"],
      icon: "Scale",
      color: "cta-warm"
    }
  ];

  const strategicPartnerships = [
    {
      id: 1,
      title: "Pike Medical Consultants",
      subtitle: "UrgentCare Indy & PrimaryCare Indy",
      industry: "B2C Healthcare Services",
      period: "2015 - Present",
      description: "For this network of local healthcare clinics, the strategy is to build trust and streamline the patient journey. I designed and manage their entire digital presence, focusing on the critical needs of a patient seeking immediate care.",
      achievements: [
        "Comprehensive website with real-time online check-in system (Clockwise MD)",
        "Integrated telehealth platform to reduce wait times",
        "45% average growth in patient visits over three years",
        "Local SEO and targeted Google Ads campaigns"
      ],
      icon: "Heart",
      color: "trust-builder"
    },
    {
      id: 2,
      title: "Russell Painting Company",
      subtitle: "43-Year Family Business",
      industry: "B2C Home Services",
      period: "2015 - Present",
      description: "For this 43-year-old family business, the marketing strategy is centered on leveraging their long history to build trust and credibility in a competitive local market. I modernized their web presence by building a trust-focused design.",
      achievements: [
        "Trust-focused design featuring 4.9/5 HomeAdvisor Rating",
        "Prominent display of Angie\'s List \'A\' Grade",
        "Content strategy focused on multi-generational story",
        "Enhanced professional credibility and increased lead generation"
      ],
      icon: "Palette",
      color: "secondary"
    },
    {
      id: 3,
      title: "Tuohy Bailey & Moore LLP",
      subtitle: "Corporate Law Firm",
      industry: "B2B Legal Services",
      period: "2015 - Present",
      description: "For this B2B law firm, the goal was to modernize their brand to compete for high-value corporate clients. I led a comprehensive rebranding initiative that included developing a new visual identity, creating a brand playbook, and building a complete website redesign.",
      achievements: [
        "Comprehensive rebranding initiative for corporate market",
        "New visual identity and brand playbook development",
        "Complete website redesign with improved user experience",
        "Positioned for high-value corporate client acquisition"
      ],
      icon: "Building",
      color: "conversion"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Professional Journey Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-6">
            <Icon name="Briefcase" size={16} className="text-conversion" />
            <span className="text-sm font-medium text-text-secondary">Professional Journey</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Professional Journey
            <span className="block text-conversion">& Impact</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My career has been dedicated to building and leading marketing programs that deliver measurable results across diverse industries.
          </p>
        </div>

        {/* Main Career Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-conversion via-trust-builder to-cta-warm transform lg:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData?.map((item, index) => (
              <div
                key={item?.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                onMouseEnter={() => setHoveredItem(item?.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1">
                  <div className={`w-4 h-4 rounded-full bg-${item?.color} border-4 border-background smooth-transition ${
                    hoveredItem === item?.id ? 'scale-150 brand-shadow' : ''
                  }`} />
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ml-16 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                }`}>
                  <div className={`bg-card border border-border rounded-xl p-6 lg:p-8 smooth-transition ${
                    hoveredItem === item?.id ? 'brand-shadow scale-105' : ''
                  }`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-lg bg-${item?.color} flex items-center justify-center`}>
                          <Icon name={item?.icon} size={20} className={`text-${item?.color}-foreground`} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-conversion">
                            {item?.year} - {item?.period}
                          </div>
                          <h3 className="text-xl font-bold text-text-primary">
                            {item?.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Building" size={16} className="text-text-secondary" />
                      <span className="font-semibold text-text-primary">{item?.company}</span>
                      <span className="text-text-secondary">•</span>
                      <span className="text-text-secondary">{item?.location}</span>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm font-medium text-trust-builder bg-trust-builder/10 px-3 py-1 rounded-full">
                        Industry: {item?.industry}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {item?.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
                        <Icon name="Trophy" size={16} className="mr-2 text-conversion" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item?.achievements?.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Icon name="CheckCircle" size={16} className="text-trust-builder mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-text-secondary">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
                        <Icon name="Code" size={16} className="mr-2 text-conversion" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item?.technologies?.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-muted/50 text-text-secondary text-xs font-medium rounded-full"
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

        {/* Strategic Partnerships Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-6">
            <Icon name="Handshake" size={16} className="text-conversion" />
            <span className="text-sm font-medium text-text-secondary">Strategic Partnerships</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Ongoing Strategic
            <span className="block text-conversion">Partnerships</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            For nearly a decade, I have maintained long-term freelance partnerships with key clients, acting as their dedicated marketing strategist and technical lead.
          </p>
        </div>

        {/* Strategic Partnerships Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategicPartnerships?.map((partnership) => (
            <div
              key={partnership?.id}
              className="bg-card border border-border rounded-xl p-6 smooth-transition hover:brand-shadow hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-${partnership?.color} flex items-center justify-center`}>
                  <Icon name={partnership?.icon} size={18} className={`text-${partnership?.color}-foreground`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">
                    {partnership?.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {partnership?.subtitle}
                  </p>
                </div>
              </div>

              {/* Industry & Period */}
              <div className="mb-4">
                <span className="text-xs font-medium text-conversion bg-conversion/10 px-2 py-1 rounded-full">
                  {partnership?.industry}
                </span>
                <span className="text-xs text-text-secondary ml-2">
                  {partnership?.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {partnership?.description}
              </p>

              {/* Achievements */}
              <div>
                <h4 className="text-xs font-semibold text-text-primary mb-2 flex items-center">
                  <Icon name="Star" size={14} className="mr-2 text-conversion" />
                  Key Results
                </h4>
                <ul className="space-y-1">
                  {partnership?.achievements?.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={12} className="text-trust-builder mt-1 flex-shrink-0" />
                      <span className="text-xs text-text-secondary">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;