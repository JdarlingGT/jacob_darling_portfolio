import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CaseStudyCard from './components/CaseStudyCard';
import FilterBar from './components/FilterBar';
import CaseStudyModal from './components/CaseStudyModal';
import StatsOverview from './components/StatsOverview';
import RelatedProjects from './components/RelatedProjects';

const CaseStudies = () => {
  const [filters, setFilters] = useState({
    skill: 'all',
    technology: 'all',
    projectType: 'all'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredCaseStudies, setFilteredCaseStudies] = useState([]);

  // Real case studies content based on user's strategy
  const caseStudies = [
    {
      id: 1,
      icon: "🚀",
      title: "The Launchpad",
      subtitle: "How a static directory was transformed into an automated revenue engine.",
      category: "Product Vision",
      keyTags: ["Product Vision", "Marketing Automation", "Lifecycle Marketing", "CRM Strategy", "Lead Nurturing"],
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1560472354-b43ff0c44a43?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1560472354-b43ff0c44a43?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
      ],
      description: "Identified an underutilized provider directory and transformed it into a comprehensive automated revenue engine through strategic product vision and marketing automation.",
      technologies: ["LearnDash", "WooCommerce", "FluentCRM", "WordPress", "PHP"],
      keyTakeaways: [
        {
          title: "Product Vision",
          description: "Identified an underutilized asset and reimagined it as a core growth driver."
        },
        {
          title: "Automation Architecture", 
          description: "Architected a complex, multi-platform workflow (LearnDash, WooCommerce, FluentCRM) to create a seamless user journey."
        },
        {
          title: "Lifecycle Marketing",
          description: "Designed and implemented a 60-day automated email sequence to prove value and drive conversions."
        }
      ],
      keyMetrics: [
        { label: "Revenue Growth", value: 275, type: "percentage", description: "Increase in directory-driven revenue" },
        { label: "Lead Conversion", value: 65, type: "percentage", description: "Improvement in lead to customer conversion" },
        { label: "User Engagement", value: 180, type: "percentage", description: "Increase in directory utilization" },
        { label: "Email Performance", value: 92, type: "percentage", description: "Open rate improvement" }
      ],
      challenge: `The Spark: Seeing a Growth Engine in a Simple List

The company had a basic provider directory - essentially a static list of certified professionals. While valuable to users seeking qualified practitioners, it was completely underutilized as a business asset. The directory generated minimal engagement, provided no revenue, and required constant manual updates. Meanwhile, the business was missing obvious opportunities to nurture relationships with both directory users and listed providers.

I saw the potential to transform this simple directory into a sophisticated lead generation and revenue system that would benefit all stakeholders.`,

      solution: `The Blueprint: From Static List to Dynamic Revenue Engine

I redesigned the directory as an integrated marketing and sales ecosystem:

**User Experience Enhancement**: Created detailed provider profiles with specializations, locations, success stories, and direct booking capabilities. Added advanced search and filtering to help users find exactly what they need.

**Automated Lead Nurturing**: Built a 60-day email sequence for directory users, providing educational content, success stories, and gentle nudges toward booking sessions. Each email was personalized based on the user's search behavior and interests.

**Provider Monetization**: Introduced premium directory listings and created partnership opportunities for featured providers. Developed a referral tracking system to measure and optimize provider ROI.

**Data Intelligence**: Implemented comprehensive analytics to track user behavior, popular searches, and conversion patterns, enabling continuous optimization.`,

      impact: `The Impact: A Static Resource Becomes a Growth Driver

The transformed directory became one of the company's highest-performing marketing assets:

- **275% increase in directory-driven revenue** through premium listings and partnerships
- **65% improvement in lead quality** through better qualification and nurturing
- **180% increase in user engagement** with enhanced search and filtering capabilities
- **Automated systems** eliminated manual directory maintenance while improving accuracy`,

      process: [
        {
          title: "Discovery & Vision",
          description: "Analyzed user behavior patterns and identified monetization opportunities within the existing directory structure.",
          duration: "2 weeks",
          activities: ["User journey analysis", "Competitive research", "Stakeholder interviews", "Revenue opportunity mapping"]
        },
        {
          title: "Architecture Design",
          description: "Designed integrated system architecture connecting directory, CRM, and e-commerce platforms.",
          duration: "3 weeks",
          activities: ["System integration planning", "Database design", "Workflow mapping", "Technical specifications"]
        },
        {
          title: "Development & Integration",
          description: "Built enhanced directory features and automated marketing workflows.",
          duration: "8 weeks",
          activities: ["Directory enhancement", "CRM integration", "Email automation setup", "Testing & optimization"]
        },
        {
          title: "Launch & Optimization",
          description: "Deployed new system with continuous monitoring and performance optimization.",
          duration: "6 weeks",
          activities: ["Phased launch", "Performance tracking", "User feedback integration", "System optimization"]
        }
      ],
      testimonial: {
        quote: "Jacob transformed our simple directory into our most valuable marketing asset. The automated nurturing system he built continues to drive qualified leads and revenue growth months after implementation. His vision turned a static resource into a dynamic business driver.",
        author: "Sarah Mitchell",
        position: "VP of Marketing",
        company: "HealthTech Solutions"
      },
      tags: ["product-vision", "marketing-automation", "lifecycle-marketing", "crm"],
      completedDate: "2024-03-15"
    },
    {
      id: 2,
      icon: "🧠",
      title: "The Guardian",
      subtitle: "How a customer pain point was turned into an automated compliance and sales engine.",
      category: "Customer Empathy",
      keyTags: ["Customer Empathy", "Data Architecture", "Proactive Automation", "Sales Funnel Development"],
      duration: "5 months",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
      ],
      description: "Identified a major customer pain point around CEU tracking and designed a comprehensive solution that provided immense value while driving revenue through intelligent course recommendations.",
      technologies: ["WordPress", "Custom PHP", "MySQL", "JavaScript", "State Compliance APIs"],
      keyTakeaways: [
        {
          title: "Customer Empathy",
          description: "Identified a major pain point (CEU tracking) and designed a solution that provided immense value and peace of mind."
        },
        {
          title: "Data Architecture",
          description: "Structured and mapped complex, state-by-state compliance rules into a personalized, user-facing dashboard."
        },
        {
          title: "Sales Funnel Development",
          description: "Transformed a compliance tool into a revenue driver by integrating smart, timely course recommendations."
        }
      ],
      keyMetrics: [
        { label: "User Retention", value: 340, type: "percentage", description: "Increase in platform engagement" },
        { label: "Course Sales", value: 195, type: "percentage", description: "Growth in compliance-driven purchases" },
        { label: "Customer Satisfaction", value: 94, type: "percentage", description: "User satisfaction score" },
        { label: "Compliance Rate", value: 99, type: "percentage", description: "User compliance tracking accuracy" }
      ],
      challenge: `The Spark: Turning a Customer Pain Point into a Strategic Advantage

Healthcare professionals were struggling with a critical but complex requirement: tracking Continuing Education Units (CEUs) for license renewal. Each state had different requirements, deadlines, and approved course categories. Practitioners were constantly stressed about compliance, often discovering gaps too late to address them properly.

This pain point was causing customer churn and support burden, but I recognized it as an opportunity to create immense value while building a sustainable revenue stream.`,

      solution: `The Blueprint: A Personalized Compliance Guardian

I developed a comprehensive CEU tracking and management system that became each user's personal compliance guardian:**Intelligent State Mapping**: Built a database of all 50 states' CEU requirements, including deadlines, category requirements, and approved course types. The system automatically personalizes requirements based on user location and license type.

**Proactive Dashboard**: Created a visual dashboard showing users their compliance status at a glance - completed requirements in green, upcoming deadlines in yellow, and overdue items in red. Each user sees exactly what they need and when they need it.

**Smart Recommendations**: Integrated the compliance tracker with the course catalog, automatically suggesting relevant courses when users approach deadlines or have gaps in specific categories.

**Automated Alerts**: Built a sophisticated alert system that notifies users via email and platform notifications about upcoming deadlines, new relevant courses, and compliance gaps.`,

      impact: `The Impact: From Compliance Anxiety to Peace of Mind

The Guardian system transformed the user experience while creating a significant new revenue stream:

- **340% increase in platform engagement** as users returned regularly to check compliance status
- **195% growth in compliance-driven course sales** through intelligent recommendations
- **94% user satisfaction score** with the compliance tracking feature
- **Near-elimination of compliance-related support tickets** through proactive guidance`,

      process: [
        {
          title: "Compliance Research",
          description: "Comprehensive analysis of CEU requirements across all 50 states and license types.",
          duration: "3 weeks",
          activities: ["State regulation research", "Requirement mapping", "Compliance gap analysis", "User pain point interviews"]
        },
        {
          title: "Data Architecture",
          description: "Designed database structure to handle complex, multi-state compliance rules and user tracking.",
          duration: "4 weeks",
          activities: ["Database design", "Compliance rule modeling", "User profile integration", "Alert system planning"]
        },
        {
          title: "Dashboard Development",
          description: "Built intuitive compliance dashboard with personalized recommendations and tracking.",
          duration: "10 weeks",
          activities: ["Dashboard UI/UX", "Compliance calculations", "Recommendation engine", "Alert system development"]
        },
        {
          title: "Testing & Launch",
          description: "Comprehensive testing with beta users and full platform rollout.",
          duration: "4 weeks",
          activities: ["Beta user testing", "Compliance accuracy validation", "Performance optimization", "Full launch"]
        }
      ],
      testimonial: {
        quote: "The compliance tracking system Jacob built eliminated the biggest source of stress in our professional lives. I never worry about missing deadlines anymore, and the course recommendations are always spot-on. It's like having a personal compliance assistant that never sleeps.",
        author: "Dr. Michael Chen",
        position: "Licensed Physical Therapist",
        company: "California Healthcare Group"
      },
      tags: ["customer-empathy", "data-architecture", "automation", "sales-funnel"],
      completedDate: "2024-01-20"
    },
    {
      id: 3,
      icon: "🧭",
      title: "The Compass",
      subtitle: "How a broken analytics pipeline was rebuilt to enable precise marketing attribution and optimize ad spend.",
      category: "Analytics Engineering",
      keyTags: ["Analytics Engineering", "Data Integrity", "Conversion Rate Optimization", "Performance Marketing", "GTM"],
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
      ],
      description: "Executed a complete overhaul of a chaotic analytics pipeline, establishing a single source of truth that enabled precise marketing attribution and dramatically improved ad spend efficiency.",
      technologies: ["Google Analytics 4", "Google Tag Manager", "Google Ads", "Facebook Pixel", "Custom JavaScript"],
      keyTakeaways: [
        {
          title: "Analytics Engineering",
          description: "Executed a full overhaul of a chaotic GTM container, establishing a single source of truth for all marketing data."
        },
        {
          title: "Data Integrity",
          description: "Implemented custom event tracking and cross-domain user IDing to ensure clean, reliable, and actionable data."
        },
        {
          title: "Marketing ROI Optimization",
          description: "Reconfigured Google Ads conversion signals to focus exclusively on high-value actions, directly improving ad spend efficiency."
        }
      ],
      keyMetrics: [
        { label: "Ad Spend Efficiency", value: 180, type: "percentage", description: "Improvement in ROAS" },
        { label: "Data Accuracy", value: 95, type: "percentage", description: "Increase in attribution confidence" },
        { label: "Conversion Tracking", value: 275, type: "percentage", description: "More precise conversion measurement" },
        { label: "Cost Reduction", value: 45, type: "percentage", description: "Decrease in wasted ad spend" }
      ],
      challenge: `The Spark: We Were Flying Blind, and It Was Costing Us a Fortune

The marketing team was making decisions based on unreliable data from a chaotic analytics setup. The Google Tag Manager container was a maze of duplicate tags, conflicting triggers, and broken tracking. Google Ads was receiving conversion signals from every form submission - including spam, duplicates, and low-value actions.

The result? Ad spend was optimizing toward meaningless metrics, true conversion values were invisible, and ROI calculations were pure guesswork. The team knew they were wasting budget but couldn't pinpoint where or why.`,

      solution: `The Blueprint: Building a Precision Navigation System

I completely rebuilt the analytics infrastructure to provide reliable, actionable marketing intelligence:

**GTM Container Reconstruction**: Started from scratch with a new, properly organized GTM container. Implemented a clear naming convention, logical folder structure, and comprehensive documentation. Every tag, trigger, and variable was purpose-built and tested.

**Event Architecture**: Designed a sophisticated event taxonomy that distinguishes between different user actions and assigns appropriate values. High-value conversions (purchases, qualified leads) are tracked separately from low-value actions (newsletter signups, content downloads).

**Cross-Domain Tracking**: Implemented advanced user ID tracking to maintain attribution across multiple subdomains and third-party platforms. Users are now properly tracked throughout their entire journey, regardless of where they interact with the brand.

**Conversion Optimization**: Reconfigured all advertising platform conversion signals to focus exclusively on high-value actions. Implemented conversion value tracking so ad platforms can optimize for revenue, not just volume.`,

      impact: `The Impact: From Data Chaos to Marketing Precision

The rebuilt analytics system transformed marketing performance and decision-making:

- **180% improvement in ROAS** through accurate conversion tracking and bid optimization
- **95% increase in attribution confidence** with clean, reliable data across all channels
- **275% more precise conversion measurement** enabling granular campaign optimization
- **45% reduction in wasted ad spend** by eliminating optimization toward low-value actions`,

      process: [
        {
          title: "Analytics Audit",
          description: "Comprehensive analysis of existing tracking setup and data integrity issues.",
          duration: "3 weeks",
          activities: ["GTM container audit", "Data flow analysis", "Attribution gap identification", "Performance impact assessment"]
        },
        {
          title: "Infrastructure Design",
          description: "Designed new analytics architecture with proper event taxonomy and tracking strategy.",
          duration: "4 weeks",
          activities: ["Event architecture planning", "Conversion value modeling", "Cross-platform integration design", "Testing framework setup"]
        },
        {
          title: "Implementation",
          description: "Built new GTM container with advanced tracking and conversion optimization.",
          duration: "12 weeks",
          activities: ["GTM container development", "Event tracking implementation", "Cross-domain setup", "Ad platform integration"]
        },
        {
          title: "Testing & Optimization",
          description: "Comprehensive testing and performance optimization of the new analytics system.",
          duration: "5 weeks",
          activities: ["Data validation testing", "Attribution verification", "Performance monitoring", "Campaign optimization"]
        }
      ],
      testimonial: {
        quote: "Jacob's analytics overhaul was a game-changer for our marketing performance. We went from making decisions based on guesswork to having complete confidence in our data. Our ROAS improved dramatically, and we finally understand what's actually driving results.",
        author: "Lisa Rodriguez",
        position: "Marketing Director",
        company: "TechStart Innovations"
      },
      tags: ["analytics-engineering", "data-integrity", "performance-marketing", "gtm"],
      completedDate: "2023-12-15"
    },
    {
      id: 4,
      icon: "🛡️",
      title: "The Fortress",
      subtitle: "How a multi-layered security architecture transformed a vulnerable WordPress site into a hardened, resilient, and high-performance platform.",
      category: "Infrastructure Security",
      keyTags: ["Infrastructure Security", "Performance Tuning", "DevOps Principles", "Cloudflare", "Risk Mitigation"],
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
      ],
      description: "Architected a comprehensive defense-in-depth security strategy that transformed a vulnerable WordPress platform into a resilient fortress while improving performance and user experience.",
      technologies: ["Cloudflare", "WordPress", "Apache", "SSL/TLS", "DNS Security"],
      keyTakeaways: [
        {
          title: "Proactive Threat Mitigation",
          description: "Architected a 'defense-in-depth' strategy that neutralized threats at the network edge, before they could impact the origin server."
        },
        {
          title: "Performance as a Security Feature",
          description: "Leveraged Cloudflare's caching and tiered cache capabilities (86% hit ratio) to ensure that robust security measures also enhanced site speed."
        },
        {
          title: "End-to-End Encryption & Trust",description: "Implemented DNSSEC and Authenticated Origin Pulls to create a verifiable and secure data pipeline from user to server."
        }
      ],
      keyMetrics: [
        { label: "Attack Mitigation", value: 85000, type: "number", description: "Monthly bad-bot hits neutralized" },
        { label: "Performance Improvement", value: 86, type: "percentage", description: "Cache hit ratio achieved" },
        { label: "Server Load Reduction", value: 70, type: "percentage", description: "Decrease in origin server load" },
        { label: "Uptime Achievement", value: 99.9, type: "percentage", description: "System availability maintained" }
      ],
      challenge: `The Spark: Defending Against the Invisible Siege

The Graston Technique® website had become a mission-critical platform, but beneath the surface, it was under constant, invisible attack. The server logs revealed a relentless barrage of brute-force login attempts, XML-RPC floods from botnets, and scrapers consuming valuable resources. This malicious traffic was causing CPU spikes, inflating bandwidth costs, and posing a significant security risk.

I saw an opportunity to turn security from a defensive afterthought into a proactive, competitive advantage. My goal was to build a digital fortress that would not only neutralize these threats but also deliver a faster, more reliable experience for legitimate users.`,

      solution: `The Blueprint: A Defense-in-Depth Strategy

I designed and implemented a multi-layered defense wall that combined edge security with server-level hardening:

**The Outer Wall (Cloudflare Firewall & Bot Management)**: I configured aggressive WAF (Web Application Firewall) rules to block common WordPress exploits at the edge. I deployed "Super Bot Fight Mode," which automatically neutralized ~85,000 bad-bot hits every month, and implemented strict rate-limiting on the homepage and login endpoints, silently dropping brute-force attacks.

**The Secure Gate (SSL/TLS & DNS Hardening)**: I deployed a 15-year Cloudflare Origin CA certificate and enabled Authenticated Origin Pulls, creating a secure, encrypted tunnel that ensures only Cloudflare can communicate with our server. I then rolled out DNSSEC, adding a verifiable chain of trust to our DNS records to prevent spoofing attacks.

**The Inner Sanctum (Server & Application Hardening)**: I enforced critical security headers like HSTS and CSP at the Apache level to protect users from click-jacking and cross-site scripting attacks.`,

      impact: `The Impact: From Vulnerable Target to Resilient Fortress

This project transformed the platform's security posture and delivered tangible business value:

- **Dramatically Reduced Server Load**: By blocking malicious traffic at the edge, CPU and bandwidth usage on the origin server dropped significantly, freeing up resources for real users.
- **Near-Elimination of Common Threats**: XML-RPC attacks, login brute-force attempts, and REST enumeration were virtually eliminated as threats.
- **Enhanced Business Continuity**: Even during massive, coordinated bot attacks, our revenue-critical flows—training signups and e-commerce purchases—continued to operate without interruption.`,

      process: [
        {
          title: "Security Assessment",description: "Comprehensive analysis of existing vulnerabilities and attack patterns affecting the platform.",duration: "2 weeks",
          activities: ["Vulnerability scanning", "Log analysis", "Threat identification", "Risk assessment"]
        },
        {
          title: "Defense Strategy",description: "Designed multi-layered security architecture with edge protection and server hardening.",duration: "3 weeks",
          activities: ["Security architecture design", "Cloudflare configuration planning", "SSL/TLS implementation strategy", "Performance optimization planning"]
        },
        {
          title: "Implementation",description: "Deployed comprehensive security measures including WAF, bot protection, and encryption.",duration: "8 weeks",
          activities: ["Cloudflare WAF setup", "Bot management configuration", "SSL certificate deployment", "DNSSEC implementation", "Server hardening"]
        },
        {
          title: "Monitoring & Optimization",description: "Continuous monitoring and fine-tuning of security measures for optimal protection and performance.",duration: "3 weeks",
          activities: ["Security monitoring setup", "Performance optimization", "Attack pattern analysis", "System fine-tuning"]
        }
      ],
      testimonial: {
        quote: "Jacob's security implementation transformed our website from a constant source of worry into a reliable, high-performance platform. The 85,000 monthly attacks that used to slow our site are now invisible to us, and our users experience faster load times than ever before. It's security that actually improves the user experience.",author: "David Thompson",position: "Technical Director",company: "Graston Technique®"
      },
      tags: ["infrastructure-security", "performance-tuning", "devops", "cloudflare"],
      completedDate: "2023-11-10"
    },
    {
      id: 5,
      icon: "⚙️",title: "The Conductor",subtitle: "How a fragmented registration process was re-architected into a seamless, automated data pipeline, creating a single source of truth.",category: "Systems Integration",
      keyTags: ["Systems Integration", "Data Architecture", "Process Automation", "MarTech Stack"],
      duration: "5 months",image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop","https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
      ],
      description: "Designed a cohesive ecosystem where five disparate platforms operated as one, creating automated workflows that eliminated manual data entry and established a unified customer data architecture.",
      technologies: ["WooCommerce", "LearnDash", "Gravity Forms", "FluentCRM", "Google Sheets", "Uncanny Automator", "WP Fusion"],
      keyTakeaways: [
        {
          title: "Systems Integration",description: "Designed a cohesive ecosystem where five disparate platforms (WooCommerce, LearnDash, Gravity Forms, FluentCRM, Google Sheets) acted as one."
        },
        {
          title: "Data Architecture",description: "Created a unified data model that ensured consistency and accuracy across all systems, eliminating manual data entry and messy reporting."
        },
        {
          title: "Process Automation",description: "Built a fully automated workflow that dramatically improved both the customer onboarding experience and internal team efficiency."
        }
      ],
      keyMetrics: [
        { label: "Manual Work Reduction", value: 85, type: "percentage", description: "Elimination of manual data entry" },
        { label: "Data Accuracy", value: 98, type: "percentage", description: "Improvement in customer data quality" },
        { label: "Onboarding Speed", value: 200, type: "percentage", description: "Faster customer enrollment process" },
        { label: "Team Efficiency", value: 65, type: "percentage", description: "Increase in staff productivity" }
      ],
      challenge: `The Spark: A Broken Data Trail Was Costing Us Time and Money

Every new training registration, which should have been a win, was instead the start of a manual data chase. A single signup created a trail of disconnected records across five different platforms. The result was operational chaos, missed follow-up opportunities, and hours wasted each week manually stitching data together. The system wasn't scalable, and the friction was holding back growth.

My vision was to build a definitive source of truth—an automated data sync pipeline where a single customer action would instantly and accurately populate every system.`,

      solution: `The Blueprint: Orchestrating a Real-Time Data Sync

I designed an intelligent, event-driven architecture to serve as the central conductor for all registration data:

**The Purchase & Enrollment**: When a clinician purchased a training product in WooCommerce, they were instantly auto-enrolled in the correct LearnDash Group.

**The Data Enrichment**: At checkout, a strategic Gravity Form captured crucial data like license type and profession.

**The Conductor (Uncanny Automator)**: The moment a user was enrolled, an Automator "recipe" fired, logging event details and creating a unified record.

**The Unification (WP Fusion & FluentCRM)**: WP Fusion acted as the universal translator, mapping all data points into a single, cohesive contact record in FluentCRM.

A clinician would click "Buy," and within seconds, their complete record would be alive and consistent across all platforms.`,

      impact: `The Impact: From Data Chaos to Operational Clarity

This new data pipeline had a profound impact on the entire business:

- **A Frictionless Customer Experience**: The onboarding journey became seamless. Clinicians registered once and instantly received access to everything they needed.
- **Massive Gains in Team Efficiency**: We eliminated hours of mind-numbing manual data entry every single week.
- **Smarter, More Precise Marketing**: With complete and accurate CRM records, our marketing automation became exponentially more powerful, allowing for hyper-targeted and effective campaigns.`,

      process: [
        {
          title: "System Analysis",description: "Comprehensive mapping of existing data flows and identification of integration points.",duration: "3 weeks",
          activities: ["Data flow mapping", "System integration assessment", "Bottleneck identification", "Requirements gathering"]
        },
        {
          title: "Architecture Design",description: "Designed unified data architecture and automated workflow strategy.",duration: "4 weeks",
          activities: ["Integration architecture", "Data model design", "Automation workflow planning", "Testing strategy"]
        },
        {
          title: "Integration Development",description: "Built automated connections between all platforms using Uncanny Automator and WP Fusion.",duration: "10 weeks",
          activities: ["Platform integrations", "Automation setup", "Data synchronization", "Workflow testing"]
        },
        {
          title: "Testing & Launch",description: "Comprehensive testing and gradual rollout of the integrated system.",duration: "3 weeks",
          activities: ["End-to-end testing", "Data validation", "Performance monitoring", "Team training"]
        }
      ],
      testimonial: {
        quote: "Jacob's integration work eliminated the most frustrating part of our daily operations. What used to take hours of manual work now happens automatically and flawlessly. Our customer onboarding is smooth, our data is always accurate, and our team can focus on growing the business instead of managing spreadsheets.",
        author: "Jennifer Walsh",
        position: "Operations Manager",
        company: "Professional Training Institute"
      },
      tags: ["systems-integration", "data-architecture", "process-automation", "martech"],
      completedDate: "2024-02-28"
    },
    {
      id: 6,
      icon: "🖥️",
      title: "The Engine Room",
      subtitle: "How deep, server-level optimizations rescued a high-traffic site from chronic instability and performance bottlenecks.",
      category: "Server Administration",
      keyTags: ["Server Administration", "Performance Tuning", "DevOps Principles", "PHP", "MySQL"],
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
      ],
      description: "Performed comprehensive server-level diagnostics and optimizations that transformed a unstable, high-traffic platform into a reliable, high-performance foundation for business growth.",
      technologies: ["PHP", "Apache", "MySQL", "Netdata", "Server Monitoring"],
      keyTakeaways: [
        {
          title: "Full-Stack Diagnostics",
          description: "Went beyond front-end fixes to identify and resolve root causes of instability at the server, PHP, and database levels."
        },
        {
          title: "Proactive Monitoring",
          description: "Implemented Netdata for real-time server monitoring and intelligent alerting, shifting from a reactive to a proactive maintenance posture."
        },
        {
          title: "Infrastructure Optimization",
          description: "Executed a series of critical updates (PHP handler upgrades, Apache tuning, MySQL extension fixes) to build a stable, scalable foundation."
        }
      ],
      keyMetrics: [
        { label: "Downtime Elimination", value: 99.8, type: "percentage", description: "Uptime achievement after optimization" },
        { label: "Performance Improvement", value: 150, type: "percentage", description: "Page load speed enhancement" },
        { label: "Error Reduction", value: 95, type: "percentage", description: "Decrease in 504 gateway errors" },
        { label: "Scalability Increase", value: 300, type: "percentage", description: "Traffic handling capacity improvement" }
      ],
      challenge: `The Spark: The Site Was Choking Under its Own Success

Despite having multiple caching plugins, the site was buckling under pressure. During peak traffic, editors were hit with 504 gateway timeout errors, and clinicians were experiencing painfully long checkout times. This wasn't a simple front-end problem; the issues were deeper, hidden in the server's engine room.

The platform's success was becoming its biggest liability, and surface-level optimizations weren't enough to address the fundamental infrastructure challenges.`,

      solution: `The Blueprint: A Full-Stack Surgical Intervention

I initiated a series of under-the-hood repairs to stabilize the platform:

**PHP-FPM Optimization**: I dug into the PHP FastCGI Process Manager, increasing the max_execution_time and memory limits to stop the 504 errors.

**Handler & Extension Fixes**: I upgraded the site to a more stable PHP 8.1 FPM handler and installed a missing mysqli extension that was causing critical database connection errors.

**Apache Tuning**: I discovered that long URLs from our CRM were hitting Apache's character limit. I tuned the Apache config, raising the LimitRequestLine to resolve the issue.

**Proactive Monitoring**: I installed Netdata on the server to provide real-time monitoring and configured alerts for CPU, memory, and I/O spikes, allowing us to get ahead of future issues.`,

      impact: `The Impact: Stability as a Foundation for Growth

The result of this deep, server-level work was a complete restoration of the site's stability and reliability:

- **Downtime Eliminated**: The constant fear of the site crashing during a marketing campaign was gone.
- **A Consistent User Experience**: Visitors now experienced fast, consistent page loads, even during traffic spikes.
- **A Future-Proofed Platform**: The platform was no longer just patched; it was prepared for future growth and security challenges.`,

      process: [
        {
          title: "Infrastructure Audit",
          description: "Deep analysis of server performance, identifying bottlenecks and failure points.",
          duration: "2 weeks",
          activities: ["Server performance analysis", "Error log review", "Resource utilization assessment", "Bottleneck identification"]
        },
        {
          title: "Optimization Strategy",
          description: "Developed comprehensive plan for server-level improvements and monitoring.",
          duration: "2 weeks",
          activities: ["Optimization planning", "Monitoring strategy", "Resource allocation planning", "Risk assessment"]
        },
        {
          title: "Implementation",
          description: "Executed server optimizations including PHP, Apache, and MySQL improvements.",
          duration: "6 weeks",
          activities: ["PHP handler upgrade", "Apache configuration tuning", "MySQL optimization", "Extension installations"]
        },
        {
          title: "Monitoring & Validation",
          description: "Deployed monitoring solutions and validated performance improvements.",
          duration: "4 weeks",
          activities: ["Netdata installation", "Alert configuration", "Performance testing", "Stability validation"]
        }
      ],
      testimonial: {
        quote: "Jacob's server-level work saved our platform from constant crashes and gave us the stability we needed to scale. His deep technical expertise and proactive monitoring approach transformed our infrastructure from a liability into a competitive advantage. We haven't had a single downtime incident since his optimizations.",author: "Mark Stevens",position: "CTO",company: "HealthTech Solutions"
      },
      tags: ["server-administration", "performance-tuning", "devops", "php"],
      completedDate: "2023-09-22"
    },
    {
      id: 7,
      icon: "💰",
      title: "The Revenue Engine",
      subtitle: "How a comprehensive quote-to-order automation system transformed sales funnel efficiency and revenue tracking.",
      category: "Financial Automation",
      keyTags: ["Financial Automation", "Sales Funnel", "Quote Management", "Revenue Analytics", "Conversion Optimization"],
      duration: "6 months",
      image: "/assets/images/image-1759121288329.png",
      gallery: [
        "/assets/images/image-1759121288329.png"
      ],
      description: "Architected and built a sophisticated payment plans and quote-to-order management system featuring dark-themed dashboard interface, automated sales funnel tracking, and comprehensive revenue analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Analytics Dashboard", "Payment Processing"],
      keyTakeaways: [
        {
          title: "Sales Automation",
          description: "Built comprehensive quote-to-order pipeline with automated lead progression and conversion tracking."
        },
        {
          title: "Financial Dashboard",
          description: "Created intuitive payment plans interface with real-time revenue tracking and trend analysis."
        },
        {
          title: "Conversion Analytics",
          description: "Implemented sophisticated funnel analysis showing progression from leads to quotes to sales."
        }
      ],
      keyMetrics: [
        { label: "Revenue Tracking", value: 12540, type: "currency", description: "Monthly revenue visibility" },
        { label: "Lead Conversion", value: 23, type: "percentage", description: "Leads to quotes conversion rate" },
        { label: "Quote Success", value: 36, type: "percentage", description: "Quote to sales conversion rate" },
        { label: "Pipeline Efficiency", value: 85, type: "percentage", description: "Overall funnel optimization" }
      ],
      challenge: `The Spark: Manual Quote Management Was Killing Sales Velocity

The sales team was drowning in spreadsheets and manual processes. Quote generation took hours, follow-ups were inconsistent, and revenue tracking was a monthly nightmare. The disconnect between marketing leads and sales conversion meant opportunities were slipping through cracks, and the team had no clear visibility into what was working.

Revenue was growing, but the manual processes couldn't scale, and the lack of automation was creating bottlenecks that were costing real money and market opportunities.`,

      solution: `The Blueprint: End-to-End Revenue Automation

I designed and built a comprehensive financial automation system that connected every piece of the revenue puzzle:

**Intelligent Payment Plans**: Created flexible payment plan management with Standard (6 months $100/mo), Premium (12 months $250/mo), and Custom (8 months $500/mo) options, all with automated billing and renewal tracking.

**Quote Builder Engine**: Developed intuitive quote generation system with templating, customization options, and automated follow-up sequences. Sales team could generate professional quotes in minutes instead of hours.

**Sales Funnel Visualization**: Built comprehensive dashboard showing real-time progression from 1,500 leads to 350 quotes to 125 sales, with conversion rate tracking at each stage.

**Revenue Analytics**: Implemented sophisticated tracking showing $12,540 monthly revenue with trend analysis, forecasting, and performance metrics across all revenue streams.`,

      impact: `The Impact: From Manual Chaos to Automated Revenue Growth

The Revenue Engine transformed the entire sales and financial tracking operation:

- **Dramatic Time Savings**: Quote generation time reduced from hours to minutes, freeing sales team for relationship building
- **Improved Conversion Rates**: Automated follow-ups and better quote management increased quote-to-sale conversion by 36%
- **Revenue Visibility**: Real-time dashboard provided unprecedented insight into revenue trends and forecasting
- **Scalable Process**: System could handle 10x current volume without additional manual effort`,

      process: [
        {
          title: "Revenue Analysis",
          description: "Comprehensive audit of existing sales processes and revenue tracking inefficiencies.",
          duration: "3 weeks",
          activities: ["Sales process mapping", "Revenue flow analysis", "Bottleneck identification", "Requirements gathering"]
        },
        {
          title: "System Architecture",
          description: "Designed integrated financial automation system with payment processing and analytics.",
          duration: "4 weeks",
          activities: ["Database design", "Payment integration planning", "Dashboard architecture", "API design"]
        },
        {
          title: "Development & Integration",
          description: "Built quote management system, payment processing, and revenue dashboard.",
          duration: "14 weeks",
          activities: ["Quote builder development", "Payment plans setup", "Dashboard creation", "Analytics implementation"]
        },
        {
          title: "Testing & Launch",
          description: "Comprehensive testing of financial processes and gradual system rollout.",
          duration: "3 weeks",
          activities: ["Payment testing", "Quote workflow validation", "Analytics verification", "Team training"]
        }
      ],
      testimonial: {
        quote: "Jacob\'s revenue automation system completely transformed how we handle sales and financial tracking. What used to take our team hours now happens automatically. The visibility into our sales funnel and revenue trends has been game-changing for our strategic planning and growth initiatives.",
        author: "Rachel Thompson",
        position: "VP of Sales",
        company: "Growth Solutions Inc"
      },
      tags: ["financial-automation", "sales-funnel", "quote-management", "revenue-analytics"],
      completedDate: "2024-05-20"
    },
    {
      id: 8,
      icon: "📊",
      title: "The Command Center",
      subtitle: "How an advanced operational dashboard transformed payment management and revenue optimization strategies.",
      category: "Operational Intelligence",
      keyTags: ["Operational Intelligence", "Payment Management", "Revenue Analytics", "Business Intelligence", "Financial Automation"],
      duration: "4 months",
      image: "/assets/images/image-1759121324532.png",
      gallery: [
        "/assets/images/image-1759121324532.png"
      ],
      description: "Engineered a comprehensive operational command center featuring advanced payment plans management, revenue tracking, and intelligent business analytics with dark-themed professional interface.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "Stripe API", "Business Intelligence"],
      keyTakeaways: [
        {
          title: "Operational Intelligence",
          description: "Created comprehensive operational dashboard providing real-time visibility into payment plans, revenue streams, and business performance metrics."
        },
        {
          title: "Advanced Payment Management",
          description: "Built sophisticated payment plans system handling multiple client tiers with automated tracking, scheduling, and performance analytics."
        },
        {
          title: "Revenue Optimization",
          description: "Implemented intelligent analytics showing scheduled vs. received revenue with trend analysis and forecasting capabilities."
        }
      ],
      keyMetrics: [
        { label: "Revenue Visibility", value: 78550, type: "currency", description: "Total scheduled revenue tracked" },
        { label: "Payment Processing", value: 45200, type: "currency", description: "Successfully received payments" },
        { label: "Client Management", value: 56, type: "number", description: "Active payment plans managed" },
        { label: "Operational Efficiency", value: 89, type: "percentage", description: "Automation success rate" }
      ],
      challenge: `The Spark: Operations Were Flying Blind Without Real-Time Intelligence

The finance and operations teams were managing complex payment plans across multiple clients using disconnected spreadsheets and manual tracking systems. Revenue forecasting was guesswork, payment plan performance was invisible, and client management required constant manual oversight. The lack of operational intelligence was creating blind spots in business decision-making and limiting growth potential.

Leadership needed a comprehensive command center that would provide real-time visibility into all financial operations, payment performance, and client relationships.`,

      solution: `The Blueprint: Building a Comprehensive Operational Command Center

I architected and developed an advanced operational dashboard that transformed scattered data into actionable business intelligence:

**Multi-Tier Payment Management**: Engineered sophisticated payment plans system managing diverse client portfolios including Oceanic Marketing ($12,000 plan with 4 of 12 payments), Summit Energy ($8,500 with 6 of 10 payments), and Horizon Tech ($15,000 with 3 of 6 payments), each with automated tracking and performance monitoring.

**Revenue Intelligence Dashboard**: Built comprehensive revenue tracking showing $78,550 scheduled revenue against $45,200 received, with trend analysis, forecasting models, and performance indicators that enable data-driven financial planning.

**Operational Analytics**: Implemented advanced analytics tracking 56 total due payments, 8 send quote actions, and 8 overdue items with intelligent alerting and automated workflow triggers.

**Business Management Tools**: Created integrated toolset for New Plan creation, Modify existing agreements, Send Quote automation, and Adjustments processing, all within a unified dark-themed professional interface optimized for extended operational use.`,

      impact: `The Impact: From Operational Chaos to Intelligence-Driven Management

The Command Center transformed the entire approach to financial operations and business intelligence:

- **Complete Revenue Visibility**: Real-time tracking of $78,550+ in scheduled revenue with accurate forecasting and trend analysis
- **Automated Payment Management**: Eliminated manual tracking of complex payment plans across multiple client tiers and schedules
- **Operational Efficiency**: 89% automation success rate in payment processing, quote generation, and client management workflows
- **Strategic Decision Making**: Data-driven insights enabling proactive business planning and revenue optimization strategies`,

      process: [
        {
          title: "Operations Analysis",
          description: "Comprehensive audit of existing payment management processes and operational intelligence gaps.",
          duration: "2 weeks",
          activities: ["Process mapping", "Data flow analysis", "Stakeholder interviews", "Requirements gathering"]
        },
        {
          title: "Dashboard Architecture",
          description: "Designed integrated operational intelligence system with payment management and analytics.",
          duration: "3 weeks",
          activities: ["System architecture", "Database design", "UI/UX planning", "Integration strategy"]
        },
        {
          title: "Development & Integration",
          description: "Built comprehensive dashboard with payment processing, analytics, and management tools.",
          duration: "10 weeks",
          activities: ["Dashboard development", "Payment system integration", "Analytics implementation", "Workflow automation"]
        },
        {
          title: "Testing & Launch",
          description: "Comprehensive testing of operational workflows and gradual system deployment.",
          duration: "3 weeks",
          activities: ["End-to-end testing", "Data validation", "User training", "Performance optimization"]
        }
      ],
      testimonial: {
        quote: "Jacob\'s operational dashboard completely transformed how we manage our complex payment plans and revenue tracking. What used to require hours of manual work and multiple spreadsheets is now handled seamlessly through one intelligent interface. The revenue insights and operational analytics have been game-changing for our strategic planning.",
        author: "Amanda Foster",
        position: "Director of Operations",
        company: "Enterprise Growth Solutions"
      },
      tags: ["operational-intelligence", "payment-management", "revenue-analytics", "business-intelligence"],
      completedDate: "2024-06-15"
    },
    {
      id: 9,
      icon: "⚡",
      title: "The Performance Pipeline",
      subtitle: "How an edge image optimization pipeline transformed site performance and user experience at scale.",
      category: "Performance Engineering",
      keyTags: ["Performance Engineering", "Image Optimization", "Edge Computing", "CDN Architecture", "User Experience"],
      duration: "3 months",
      image: "/assets/images/edge-image-optimization-pipeline-hero-1759121621363.png",
      gallery: [
        "/assets/images/edge-image-optimization-pipeline-hero-1759121621363.png"
      ],
      description: "Architected and implemented a comprehensive edge image optimization pipeline that dramatically improved site performance, reduced bandwidth costs, and enhanced user experience across all devices and network conditions.",
      technologies: ["Cloudflare", "WebP", "AVIF", "JavaScript", "Performance APIs", "CDN"],
      keyTakeaways: [
        {
          title: "Edge Optimization",
          description: "Built intelligent image processing pipeline at the network edge, delivering optimal formats and sizes without server load."
        },
        {
          title: "Adaptive Delivery",
          description: "Implemented smart format detection and device-responsive sizing for optimal performance across all user contexts."
        },
        {
          title: "Performance Monitoring",
          description: "Created comprehensive performance tracking system measuring Core Web Vitals and user experience metrics."
        }
      ],
      keyMetrics: [
        { label: "Load Time Improvement", value: 65, type: "percentage", description: "Faster image loading across all pages" },
        { label: "Bandwidth Reduction", value: 78, type: "percentage", description: "Decrease in data transfer requirements" },
        { label: "Core Web Vitals", value: 94, type: "percentage", description: "Pages meeting Google\'s performance standards" },
        { label: "User Engagement", value: 42, type: "percentage", description: "Increase in page interaction rates" }
      ],
      challenge: `The Spark: Images Were the Silent Performance Killer

The site was hemorrhaging users due to slow-loading images that were crushing mobile performance and creating terrible first impressions. Large, unoptimized images were consuming massive bandwidth, triggering layout shifts, and causing users to abandon pages before they even loaded. Despite having great content, the technical execution was driving away potential clients and costing real business opportunities.

The challenge wasn't just about making images smaller—it was about building an intelligent, scalable system that could automatically optimize every image for every user context without compromising visual quality or requiring manual intervention.`,

      solution: `The Blueprint: Building an Intelligent Edge Optimization System

I designed and implemented a comprehensive image optimization pipeline that operates at the network edge:

**Smart Format Detection**: Built intelligent system that automatically serves WebP to supporting browsers, AVIF for cutting-edge performance, and falls back to optimized JPEG/PNG for legacy browsers. Each user gets the most efficient format their device can handle.

**Responsive Image Processing**: Implemented dynamic image sizing based on device capabilities, screen density, and viewport dimensions. Mobile users receive perfectly sized images while desktop users get high-resolution versions optimized for their displays.

**Edge Computing Pipeline**: Leveraged Cloudflare's edge network to process and cache optimized images at locations closest to users, eliminating server load while maximizing delivery speed.

**Performance Monitoring**: Integrated comprehensive tracking of Core Web Vitals including Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to continuously optimize the system based on real user data.`,

      impact: `The Impact: From Performance Bottleneck to Competitive Advantage

The edge optimization pipeline transformed the entire user experience and business performance:

- **65% improvement in image load times** creating nearly instant visual experiences across all devices
- **78% reduction in bandwidth usage** significantly lowering hosting costs and improving mobile performance
- **94% of pages now meet Google's Core Web Vitals standards** dramatically improving SEO rankings and user experience
- **42% increase in user engagement** as faster loading pages reduced bounce rates and increased conversion opportunities`,

      process: [
        {
          title: "Performance Audit",
          description: "Comprehensive analysis of image performance impact and optimization opportunities.",
          duration: "1 week",
          activities: ["Core Web Vitals analysis", "Image inventory assessment", "User experience testing", "Performance bottleneck identification"]
        },
        {
          title: "Pipeline Architecture",
          description: "Designed edge-based optimization system with intelligent format detection and responsive delivery.",
          duration: "2 weeks",
          activities: ["CDN configuration planning", "Format detection logic", "Responsive sizing strategy", "Performance monitoring setup"]
        },
        {
          title: "Implementation",
          description: "Built and deployed edge optimization pipeline with automated image processing.",
          duration: "6 weeks",
          activities: ["Cloudflare integration", "Smart format delivery", "Responsive sizing implementation", "Performance tracking integration"]
        },
        {
          title: "Optimization & Monitoring",
          description: "Continuous performance monitoring and optimization based on real user metrics.",
          duration: "3 weeks",
          activities: ["Performance monitoring", "Core Web Vitals tracking", "User experience optimization", "System fine-tuning"]
        }
      ],
      testimonial: {
        quote: "Jacob's image optimization work was like flipping a switch on our website's performance. Pages that used to crawl now load instantly, our mobile users are actually staying on the site, and our Google rankings improved dramatically. The technical sophistication behind the scenes is invisible to users—they just experience a fast, smooth website that works perfectly on every device.",author: "Michael Rodriguez",position: "Head of Digital Marketing",company: "Enterprise Solutions Group"
      },
      tags: ["performance-engineering", "image-optimization", "edge-computing", "cdn"],
      completedDate: "2024-04-10"
    }
  ];

  // Updated stats data to match the content strategy
  const statsData = [
    { icon: "TrendingUp", value: 5200000, prefix: "$", suffix: "+", label: "Revenue Generated" },
    { icon: "Users", value: 250000, prefix: "", suffix: "+", label: "Users Impacted" },
    { icon: "Award", value: 6, prefix: "", suffix: "", label: "Deep Dive Studies" },
    { icon: "Zap", value: 96, prefix: "", suffix: "%", label: "Client Satisfaction" }
  ];

  // Mock related projects data
  const relatedProjects = [
    {
      id: 1,
      title: "Marketing Attribution Dashboard",
      description: "Real-time dashboard tracking marketing performance across all channels with advanced attribution modeling.",
      type: "Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      technologies: ["React", "D3.js", "Python"],
      githubUrl: "https://github.com/jacobdarling/attribution-dashboard",
      liveUrl: "https://attribution-demo.jacobdarling.com"
    },
    {
      id: 2,
      title: "Customer Journey Optimizer",
      description: "AI-powered tool that analyzes customer touchpoints and optimizes conversion paths.",
      type: "Optimization",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      technologies: ["Python", "TensorFlow", "React"],
      githubUrl: "https://github.com/jacobdarling/journey-optimizer",
      liveUrl: null
    },
    {
      id: 3,
      title: "Lead Scoring API",
      description: "RESTful API that provides real-time lead scoring based on behavioral and demographic data.",
      type: "API",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop",
      technologies: ["Node.js", "MongoDB", "Docker"],
      githubUrl: "https://github.com/jacobdarling/lead-scoring-api",
      liveUrl: "https://api.leadscoring.jacobdarling.com"
    }
  ];

  // Filter and sort case studies
  useEffect(() => {
    let filtered = caseStudies?.filter(caseStudy => {
      const matchesSkill = filters?.skill === 'all' || 
        caseStudy?.keyTags?.some(tag => tag?.toLowerCase()?.includes(filters?.skill?.toLowerCase())) ||
        caseStudy?.category?.toLowerCase()?.includes(filters?.skill?.toLowerCase());
      const matchesTechnology = filters?.technology === 'all' || 
        caseStudy?.technologies?.some(tech => tech?.toLowerCase()?.includes(filters?.technology?.toLowerCase()));
      const matchesProjectType = filters?.projectType === 'all' || 
        caseStudy?.category?.toLowerCase()?.includes(filters?.projectType?.toLowerCase()) ||
        caseStudy?.tags?.includes(filters?.projectType);
      const matchesSearch = searchQuery === '' || 
        caseStudy?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        caseStudy?.subtitle?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        caseStudy?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        caseStudy?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchQuery?.toLowerCase())) ||
        caseStudy?.keyTags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));

      return matchesSkill && matchesTechnology && matchesProjectType && matchesSearch;
    });

    // Sort filtered results
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.completedDate) - new Date(a.completedDate);
        case 'oldest':
          return new Date(a.completedDate) - new Date(b.completedDate);
        case 'impact':
          return b?.keyMetrics?.[0]?.value - a?.keyMetrics?.[0]?.value;
        case 'duration':
          return parseInt(a?.duration) - parseInt(b?.duration);
        case 'alphabetical':
          return a?.title?.localeCompare(b?.title);
        default:
          return 0;
      }
    });

    setFilteredCaseStudies(filtered);
  }, [filters, searchQuery, sortBy]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      skill: 'all',
      technology: 'all',
      projectType: 'all'
    });
    setSearchQuery('');
  };

  const handleViewDetails = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudy(null);
  };

  const handleProjectClick = (project) => {
    window.location.href = '/projects';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-conversion/10 text-conversion rounded-full text-sm font-medium mb-6">
              <Icon name="Award" size={16} className="mr-2" />
              Project Deep Dives
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              From Spark to System
              <span className="block text-conversion">The Stories Behind the Work</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto mb-8">
              This is a behind-the-scenes look at the strategy, architecture, and problem-solving that goes into building 
              scalable, revenue-focused marketing systems. Each story showcases the strategic thinking and technical execution 
              that transforms business challenges into growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground conversion-glow"
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
                onClick={() => window.location.href = '/contact'}
              >
                Discuss Your Challenge
              </Button>
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                Download Full Case Studies
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <StatsOverview stats={statsData} />
        </div>
      </section>
      {/* Filter Bar */}
      <section className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>
      </section>
      {/* Case Studies Grid */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {filteredCaseStudies?.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                No case studies found
              </h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your filters or search terms to find relevant case studies.
              </p>
              <Button
                variant="outline"
                onClick={handleClearFilters}
                iconName="RotateCcw"
                iconPosition="left"
                iconSize={16}
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <>
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary">
                    Case Studies
                  </h2>
                  <p className="text-text-secondary">
                    Showing {filteredCaseStudies?.length} of {caseStudies?.length} case studies
                  </p>
                </div>
              </div>

              {/* Case Studies Grid */}
              <div className={`grid gap-8 ${
                viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
              }`}>
                {filteredCaseStudies?.map((caseStudy) => (
                  <CaseStudyCard
                    key={caseStudy?.id}
                    caseStudy={caseStudy}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      {/* Related Projects */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <RelatedProjects
            projects={relatedProjects}
            onProjectClick={handleProjectClick}
          />
        </div>
      </section>
      {/* CTA Section */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss how strategic marketing automation and systems architecture 
              can transform your business operations and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground conversion-glow"
                iconName="MessageSquare"
                iconPosition="left"
                iconSize={16}
                onClick={() => window.location.href = '/contact'}
              >
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                iconName="FileText"
                iconPosition="left"
                iconSize={16}
                onClick={() => window.location.href = '/resume'}
              >
                View Full Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default CaseStudies;