import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';


const Toolbox = () => {
  const [activeSection, setActiveSection] = useState('core-strengths');
  const [expandedPlaybook, setExpandedPlaybook] = useState(null);
  const [showBioModal, setShowBioModal] = useState(false);

  // Real content data based on the provided content
  const sections = [
    {
      id: 'core-strengths',
      title: 'Core Strengths',
      subtitle: 'What I\'m Hired to Do',
      icon: 'Star'
    },
    {
      id: 'technical-spotlights',
      title: 'Technical Spotlights',
      subtitle: 'From Problem to Impact',
      icon: 'Zap'
    },
    {
      id: 'playbooks',
      title: 'My Playbooks',
      subtitle: 'Repeatable Solutions for Complex Problems',
      icon: 'Book'
    },
    {
      id: 'stack',
      title: 'My Stack',
      subtitle: 'Tools I Reach For',
      icon: 'Wrench'
    }
  ];

  const coreStrengths = [
    {
      id: 1,
      title: 'Web Performance & Optimization',
      description: 'I tune the stack end-to-end: CDN strategy, cache keys and TTLs, PHP/OPcache, query hygiene, and front-end bloat control. I\'ve cut TTFB on high-traffic WordPress installs, trimmed autoloaded options, and dialed in page-level exclusions so dynamic views stay fast while Core Web Vitals stay green.',
      icon: 'Gauge',
      skills: ['CDN Strategy', 'PHP/OPcache', 'Query Optimization', 'Core Web Vitals']
    },
    {
      id: 2,
      title: 'Security & Resilience',
      description: 'Layered defenses at the edge and origin: WAF rulesets, bot mitigation, rate-limiting, security headers, and origin hardening (Authenticated TLS, API key scoping). The result is a smaller attack surface, fewer brute-force floods, and steadier servers during campaigns and product drops.',
      icon: 'Shield',
      skills: ['WAF Configuration', 'Bot Mitigation', 'Security Headers', 'TLS Implementation']
    },
    {
      id: 3,
      title: 'Analytics & Conversion Engineering',
      description: 'I build reliable tracking from the dataLayer up. Clean GTM containers, GA4 events that actually mirror business actions, and marketing pixels that only fire for real conversions. I normalize events (e.g., gravityFormSubmission, purchaseCompleted) so Ads and automation tools optimize on signal, not noise.',
      icon: 'BarChart3',
      skills: ['GTM Architecture', 'GA4 Implementation', 'Event Tracking', 'Conversion Optimization']
    },
    {
      id: 4,
      title: 'Commerce + Learning Systems Architecture',
      description: 'I architect complex WordPress builds that tie together commerce, learning, and CRM: WooCommerce + LearnDash + CRM (FluentCRM/WP Fusion) + automation (Uncanny Automator). Products enroll users, completions unlock certificates, and forms drive tags and segments—no brittle one-offs.',
      icon: 'Layers',
      skills: ['WooCommerce', 'LearnDash', 'CRM Integration', 'Marketing Automation']
    },
    {
      id: 5,
      title: 'Ops, Dashboards & Content Systems',
      description: 'I build operational dashboards for events, providers, and instructors. I also create CEU/knowledge bases, bulk-prompt pipelines, and lightweight internal tools that help marketing and operations teams ship consistent, high-quality content and reports much faster.',
      icon: 'Dashboard',
      skills: ['Operational Dashboards', 'Content Systems', 'Process Automation', 'Team Tools']
    }
  ];

  const technicalSpotlights = [
    {
      id: 1,
      title: 'Performance Turnaround on a Busy WP Property',
      problem: 'Slow admin panels and poor repeat-view load times due to a bloated database and generic caching strategy.',
      action: 'Audited and removed orphaned autoloaded options, implemented a cache-everything policy at the edge with careful exclusions for dynamic/logged-in content, enabled Brotli compression, and tuned PHP-FPM/OPcache.',
      impact: 'Admin actions became ~250ms faster, repeat views were 30–70% faster, and origin server CPU/bandwidth stabilized during high-traffic promotional spikes.',
      icon: 'Zap'
    },
    {
      id: 2,
      title: 'Attribution That Trains Media the Right Way',
      problem: 'Ad platforms were optimizing for weak signals, treating all form submissions as equal conversions and wasting budget.',
      action: 'Re-mapped Google Tag Manager to a normalized event model, pushed high-intent events from server-side PHP hooks into the dataLayer, and reconfigured Google Ads to treat only purchases and post-training evaluations as "Primary" conversions.',
      impact: 'Lowered Cost Per Acquisition (CPA), achieved a higher Return On Ad Spend (ROAS), and delivered clean funnel analytics with fewer false-positive conversions.',
      icon: 'Target'
    },
    {
      id: 3,
      title: 'Edge-First Security Hardening',
      problem: 'Malicious traffic from XML-RPC floods and login brute-force attacks were spiking server load and creating security risks.',
      action: 'Implemented a multi-layered defense at the Cloudflare edge, including hard blocks in the WAF, strict rate limits on sensitive endpoints, and proactive bot management.',
      impact: '~85,000+ malicious hits per month are now blocked upstream, resulting in a dramatic reduction in origin server load and noise in the logs.',
      icon: 'Shield'
    },
    {
      id: 4,
      title: 'Training Lifecycle Automation (Commerce → Learning → CRM)',
      problem: 'Manual handoffs between sales, training, and marketing were causing delays in enrollment, certificate issuance, and CRM segmentation.',
      action: 'Architected a fully automated, end-to-end system where e-commerce products auto-enroll users into learning groups, evaluation forms log to sheets, apply CRM tags, and unlock certificates, with completion events syncing back to directory eligibility.',
      impact: 'Achieved faster certificate issuance, fewer support tickets, and created segmented nurture flows that accurately match a user\'s real-time status.',
      icon: 'RefreshCw'
    }
  ];

  const playbooks = [
    {
      id: 1,
      title: 'Evaluation → Tag → Cert',
      description: 'A standardized flow where a form submission triggers an automation that logs the data to a spreadsheet, applies the correct tags in the CRM, starts a post-course email sequence, and unlocks the user\'s certificate.',
      icon: 'CheckCircle',
      steps: [
        'Form submission capture',
        'Data logging to spreadsheet',
        'CRM tag application',
        'Email sequence trigger',
        'Certificate unlock'
      ]
    },
    {
      id: 2,
      title: 'Group Enrollment → CRM Sync',
      description: 'An event-driven workflow where a change in a user\'s learning group membership automatically looks up the relevant training metadata, applies the correct tags and segments in the CRM, and notifies the appropriate internal teams.',
      icon: 'Users',
      steps: [
        'Group membership change detection',
        'Training metadata lookup',
        'CRM tag and segment application',
        'Team notification',
        'Status synchronization'
      ]
    },
    {
      id: 3,
      title: 'Completion → Directory Eligibility',
      description: 'A combination of automated and manual checks that, when triggered, mark a user\'s training as complete in the CRM and instantly flip their status to "eligible" in public-facing provider directories.',
      icon: 'Award',
      steps: [
        'Completion verification',
        'Automated checks execution',
        'CRM status update',
        'Directory eligibility flag',
        'Public profile activation'
      ]
    },
    {
      id: 4,
      title: 'Event Schema → Self-Serve Dashboards',
      description: 'A data architecture model where normalized event and venue fields act as the single source of truth. A cron job then pulls data from GA4, orders, and forms to surface critical KPIs (like enrollment velocity and risk flags) to staff in a simple dashboard.',
      icon: 'BarChart',
      steps: [
        'Event schema normalization',
        'Data source integration',
        'Automated data pulling',
        'KPI calculation',
        'Dashboard visualization'
      ]
    }
  ];

  const techStack = {
    'Edge & Infrastructure': [
      'Cloudflare (WAF, CDN, Rate Limiting, Bot Management)',
      'DNSSEC',
      'Netdata'
    ],
    'Tracking & Analytics': [
      'Google Analytics 4',
      'Google Tag Manager',
      'Server-Pushed dataLayer Events'
    ],
    'WordPress Core & Ecosystem': [
      'WooCommerce (Subscriptions/Bundles)',
      'LearnDash',
      'Gravity Forms (+ Advanced Post Creation, Stripe, Quiz)',
      'WP Fusion',
      'FluentCRM',
      'Uncanny Automator',
      'Divi',
      'Advanced Custom Fields (ACF)'
    ],
    'Build & Operations': [
      'Git',
      'WP-CLI',
      'SQL',
      'VS Code'
    ],
    'Languages': [
      'PHP',
      'JavaScript',
      'SQL',
      'HTML/CSS'
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-background to-conversion/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Wrench" size={16} />
                <span>Professional Toolbox</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
                Tools I <span className="text-accent">Reach For</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl leading-relaxed mb-8">
                A comprehensive, scannable overview of my technical expertise and professional capabilities. 
                From strategy and architecture to problem-solving and scalable marketing systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="default"
                  onClick={() => window.open('https://linkedin.com/in/jacobdarling', '_blank')}
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground conversion-glow"
                  iconName="Linkedin"
                  iconPosition="left"
                >
                  Connect on LinkedIn
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowBioModal(true)}
                  iconName="User"
                  iconPosition="left"
                >
                  View Profile
                </Button>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <img
                src="/assets/images/Gemini_Generated_Image_klonsaklonsaklon-1759116279741.png"
                alt="Jacob Darling - Professional Photo"
                className="w-80 h-80 object-cover rounded-2xl brand-shadow mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-6 lg:px-8 py-8 border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {sections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => setActiveSection(section?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg smooth-transition ${
                  activeSection === section?.id
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent'
                }`}
              >
                <Icon name={section?.icon} size={20} />
                <span className="font-medium">{section?.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Core Strengths Section */}
          {activeSection === 'core-strengths' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                  Core Strengths
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  What I'm hired to do. These are the foundational capabilities that drive results and solve complex technical challenges.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {coreStrengths?.map((strength) => (
                  <div
                    key={strength?.id}
                    className="bg-card border border-border rounded-xl p-8 brand-shadow hover:shadow-lg smooth-transition"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={strength?.icon} size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-card-foreground mb-2">
                          {strength?.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {strength?.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {strength?.skills?.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Spotlights Section */}
          {activeSection === 'technical-spotlights' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                  Technical Spotlights
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  From problem to impact. Real examples of technical problem-solving that showcase strategic thinking and execution.
                </p>
              </div>
              
              <div className="space-y-8">
                {technicalSpotlights?.map((spotlight) => (
                  <div
                    key={spotlight?.id}
                    className="bg-card border border-border rounded-xl p-8 brand-shadow hover:shadow-lg smooth-transition"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={spotlight?.icon} size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-card-foreground mb-4">
                          {spotlight?.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-red-500 flex items-center space-x-2">
                          <Icon name="AlertTriangle" size={16} />
                          <span>Problem</span>
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {spotlight?.problem}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-500 flex items-center space-x-2">
                          <Icon name="Settings" size={16} />
                          <span>Action</span>
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {spotlight?.action}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-500 flex items-center space-x-2">
                          <Icon name="TrendingUp" size={16} />
                          <span>Impact</span>
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {spotlight?.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Playbooks Section */}
          {activeSection === 'playbooks' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                  My Playbooks
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Repeatable solutions for complex problems. Strategic frameworks that demonstrate maturity and scalable thinking.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {playbooks?.map((playbook) => (
                  <div
                    key={playbook?.id}
                    className="bg-card border border-border rounded-xl p-8 brand-shadow hover:shadow-lg smooth-transition"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={playbook?.icon} size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-card-foreground mb-2">
                          {playbook?.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {playbook?.description}
                    </p>
                    
                    <button
                      onClick={() => setExpandedPlaybook(expandedPlaybook === playbook?.id ? null : playbook?.id)}
                      className="flex items-center space-x-2 text-accent hover:text-accent/80 smooth-transition text-sm font-medium"
                    >
                      <span>{expandedPlaybook === playbook?.id ? 'Hide Steps' : 'View Steps'}</span>
                      <Icon name={expandedPlaybook === playbook?.id ? 'ChevronUp' : 'ChevronDown'} size={16} />
                    </button>
                    
                    {expandedPlaybook === playbook?.id && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="space-y-3">
                          {playbook?.steps?.map((step, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-accent/20 text-accent rounded-full flex items-center justify-center text-xs font-bold">
                                {index + 1}
                              </div>
                              <span className="text-muted-foreground text-sm">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stack Section */}
          {activeSection === 'stack' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                  My Stack
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Tools I reach for. A comprehensive, scannable list of my technical toolkit across all areas of expertise.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {Object.entries(techStack)?.map(([category, tools]) => (
                  <div
                    key={category}
                    className="bg-card border border-border rounded-xl p-8 brand-shadow"
                  >
                    <h3 className="text-xl font-bold text-card-foreground mb-6 flex items-center space-x-3">
                      <Icon name="Wrench" size={20} className="text-accent" />
                      <span>{category}</span>
                    </h3>
                    <div className="space-y-3">
                      {tools?.map((tool) => (
                        <div
                          key={tool}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 smooth-transition"
                        >
                          <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bio Modal */}
      {showBioModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-card rounded-xl border border-border brand-shadow max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src="/assets/images/Gemini_Generated_Image_klonsaklonsaklon-1759116279741.png"
                    alt="Jacob Darling"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">Jacob Darling</h3>
                    <p className="text-muted-foreground">Marketing Technology Leader</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowBioModal(false)}
                  className="p-2 hover:bg-muted rounded-lg smooth-transition"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3">Professional Summary</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Marketing technology leader specializing in bridging strategic vision with technical execution. 
                    Expert in performance optimization, security implementation, analytics engineering, and marketing automation architecture. 
                    Proven track record of transforming complex technical challenges into scalable, revenue-focused solutions.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Performance Optimization', 'Security & Resilience', 'Analytics Engineering', 'Marketing Automation', 'System Architecture', 'WordPress Development']?.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex space-x-4">
                    <Button
                      variant="default"
                      onClick={() => {
                        window.open('https://linkedin.com/in/jacobdarling', '_blank');
                        setShowBioModal(false);
                      }}
                      className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                      iconName="Linkedin"
                      iconPosition="left"
                    >
                      Connect on LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        window.location.href = '/contact';
                        setShowBioModal(false);
                      }}
                      iconName="Mail"
                      iconPosition="left"
                    >
                      Get in Touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-conversion rounded-lg flex items-center justify-center">
                  <span className="text-conversion-foreground font-bold text-lg font-mono">JD</span>
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground">Jacob Darling</h3>
                  <p className="text-sm text-muted-foreground">Marketing Technology Leader</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Bridging marketing vision with technical execution through proven methodologies and scalable solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Case Studies', path: '/case-studies' },
                  { name: 'Resume', path: '/resume' }
                ]?.map((link) => (
                  <a
                    key={link?.name}
                    href={link?.path}
                    className="block text-muted-foreground hover:text-accent smooth-transition text-sm"
                  >
                    {link?.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/jacobdarling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 smooth-transition"
                >
                  <Icon name="Linkedin" size={20} />
                </a>
                <a
                  href="https://github.com/jacobdarling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 smooth-transition"
                >
                  <Icon name="Github" size={20} />
                </a>
                <a
                  href="mailto:jacob@example.com"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 smooth-transition"
                >
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date()?.getFullYear()} Jacob Darling. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Toolbox;