import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './AppIcon';

const InteractiveMarTechStack = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const stackData = [
    {
      id: 1,
      title: 'Security Architecture & Hardening',
      tagline: 'A Multi-Layered, Defense-in-Depth Strategy.',
      icon: 'Shield',
      description: `My approach treats security as a proactive, multi-layered discipline. At the edge, I deploy Cloudflare's WAF to block common WordPress exploits like XML-RPC floods, enable 'Super Bot Fight Mode' which neutralizes ~85,000 bad-bot hits per month, and implement Authenticated Origin Pulls to prevent direct-to-origin spoofing. On the server, I harden the infrastructure with security headers like HSTS and CSP via .htaccess, lock down API keys to specific domains, and ensure DNS integrity by implementing DNSSEC.`,
      url: '/case-studies/the-fortress'
    },
    {
      id: 2,
      title: 'Performance & Caching Architecture',tagline: 'Multi-Layer Caching for Sub-Second Load Times.',icon: 'Zap',description: `I engineer multi-layered caching strategies that deliver sub-second load times and a snappy real-user 'feel.' By combining a LiteSpeed server with Redis object caching and an 86% hit-ratio Cloudflare edge, I reduce server load and deliver pre-built HTML instantly. My approach includes deep asset optimization—like Brotli compression and creating WebP versions of images—that has saved over 40 MB in payload and cut HTTP requests by 35-40%.`,url: '/case-studies/full-stack-performance'
    },
    {
      id: 3,
      title: 'Conversion & Ad Tracking',tagline: 'Unifying Attribution from Ad Click to Sale.',icon: 'Target',
      description: `I build robust, end-to-end tracking systems that provide a single source of truth for campaign ROI. By writing custom PHP hooks to push gravityFormSubmission events to the dataLayer, I enable Google Ads to optimize for high-intent leads, not just clicks. I restructure GTM containers, implement PixelYourSite PRO for advanced event tracking, and reconfigure Primary conversion actions in Google Ads to ensure smart bidding is focused squarely on actual sales.`,
      url: '/case-studies/the-compass'
    },
    {
      id: 4,
      title: 'Automation & CRM',tagline: 'Systems Integration & Process Automation.',icon: 'Settings',
      description: `I build automated data pipelines that create a frictionless customer journey. By integrating platforms like WooCommerce, LearnDash, and FluentCRM with tools like WP Fusion and Uncanny Automator, I eliminate manual data entry and create unified customer records. This powers hyper-targeted marketing and has led to a planned 15-20% site-wide speed boost by moving CRM tasks to an isolated multisite instance.`,
      url: '/case-studies/the-conductor'
    },
    {
      id: 5,
      title: 'Custom Dashboards & Tooling',tagline: 'Building Internal Tools that Solve Business Problems.',icon: 'Wrench',
      description: `I create custom solutions to eliminate internal friction and empower teams with actionable data. I built a custom Instructor Dashboard that uses jQuery for dynamic event filtering and pulls data directly from FluentCRM to provide missing context on instrument purchases. This work streamlines operations and supports personalized outreach, turning the website into a valuable internal tool for sales and support.`,
      url: '/case-studies/internal-tooling'
    },
    {
      id: 6,
      title: 'Database Optimization',tagline: 'Leaner Queries for a Faster Backend.',icon: 'Database',
      description: `A fast front-end requires a highly efficient database. I perform deep database optimizations, including removing ~805 KB of unused autoloaded options from the database via WP-CLI and direct SQL queries. I also tune server configurations like innodb_buffer_pool_size and add composite meta indexes, reducing dashboard query times to under 0.2 seconds and cutting midday MySQL CPU usage by 30%.`,
      url: '/case-studies/the-engine-room'
    },
    {
      id: 7,
      title: 'Server & DevOps',tagline: 'Server Administration & Proactive Monitoring.',icon: 'Server',
      description: `A fast website is built on a stable foundation. I diagnose and resolve deep, server-level bottlenecks, from tuning Apache and PHP-FPM configurations to implementing real-time monitoring with Netdata. I have led server migrations from Apache to LiteSpeed and managed PHP version upgrades to 8.3 in staging, ensuring the platform is both stable today and prepared for future growth.`,
      url: '/case-studies/the-engine-room'
    },
    {
      id: 8,
      title: 'WordPress Core',tagline: 'Deep Optimization & Customization.',icon: 'Globe',
      description: `I go beyond themes and plugins to optimize WordPress at its core. My work involves using WP-CLI for database optimization, writing custom MU-plugins to resolve deprecation warnings from translation handling, and managing the WP-Cron and Heartbeat APIs to reduce idle AJAX calls. This results in a leaner, more stable backend and an admin dashboard that loads approximately 250ms faster.`,
      url: '/case-studies/the-engine-room'
    }
  ];

  const handleCardClick = (url) => {
    navigate(url);
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-surface via-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            My Interactive MarTech Stack
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            I don't just use tools—I build integrated ecosystems. Hover over each component to see my expertise, and click to see it in action.
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stackData?.map((item) => (
            <div
              key={item?.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard(item?.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(item?.url)}
            >
              {/* Main Card */}
              <div className="bg-card border border-border rounded-2xl p-8 h-full brand-shadow hover:shadow-xl smooth-transition transform group-hover:-translate-y-2 group-hover:scale-[1.02]">
                {/* Icon */}
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 smooth-transition">
                  <Icon name={item?.icon} size={28} className="text-accent group-hover:text-accent/80" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-accent smooth-transition">
                  {item?.title}
                </h3>

                {/* Tagline */}
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-muted-foreground/80">
                  {item?.tagline}
                </p>

                {/* Hover Indicator */}
                <div className="mt-6 flex items-center text-accent opacity-0 group-hover:opacity-100 smooth-transition">
                  <span className="text-sm font-medium mr-2">View Case Study</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>

              {/* Tooltip/Expanding Panel */}
              {hoveredCard === item?.id && (
                <div className="absolute top-full left-0 right-0 z-50 mt-4 p-6 bg-background border border-border rounded-xl brand-shadow opacity-0 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name={item?.icon} size={20} className="text-accent flex-shrink-0" />
                      <h4 className="font-bold text-text-primary text-lg">{item?.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item?.description}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <span className="text-xs text-muted-foreground/70">Click to explore</span>
                      <div className="flex items-center text-accent text-sm font-medium">
                        <span>Case Study</span>
                        <Icon name="ExternalLink" size={14} className="ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Tooltip Arrow */}
                  <div className="absolute -top-2 left-8 w-4 h-4 bg-background border-l border-t border-border transform rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-card border border-border rounded-xl p-6 brand-shadow">
            <Icon name="ArrowRight" size={24} className="text-accent" />
            <div className="text-left">
              <h4 className="font-bold text-card-foreground mb-1">Ready to build your integrated ecosystem?</h4>
              <p className="text-muted-foreground text-sm">Let's discuss how these capabilities can transform your marketing operations.</p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium smooth-transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMarTechStack;