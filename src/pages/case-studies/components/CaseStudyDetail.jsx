import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../../components/ui/Header';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  // Case study data
  const caseStudies = {
    'the-fortress': {
      id: 'the-fortress',
      title: 'The Fortress: Multi-Layered Security Architecture',
      subtitle: 'Defense-in-Depth Strategy Implementation',
      category: 'Security & Infrastructure',
      duration: '6 months',
      client: 'Graston Technique®',
      hero_image: '/assets/images/Evidence-Based_Approach_Infographic-1759119540923.png',
      overview: 'Implementation of a comprehensive, multi-layered security architecture that neutralizes threats at multiple levels while maintaining optimal performance.',
      challenge: 'The platform was experiencing significant security threats including XML-RPC floods, brute-force attacks, and direct-to-origin spoofing attempts, resulting in server instability and security vulnerabilities.',
      solution: 'Deployed a defense-in-depth strategy combining edge-level protections, server hardening, and proactive monitoring to create a robust security ecosystem.',
      results: [
        '~85,000 malicious bot hits blocked monthly at the edge',
        '99.9% reduction in XML-RPC flood attacks',
        '100% implementation of security headers (HSTS, CSP)',
        'Zero successful brute-force attempts since implementation',
        '30% reduction in server load from blocked malicious traffic'
      ],
      technologies: ['Cloudflare WAF', 'DNSSEC', 'TLS/SSL', 'Security Headers', 'Bot Management'],
      sections: [
        {
          title: 'Edge Defense Layer',
          content: 'Implemented Cloudflare WAF with custom rulesets to block common WordPress exploits. Configured Super Bot Fight Mode and Authenticated Origin Pulls to prevent direct server access.',
          image: '/assets/images/edge-image-optimization-pipeline-hero-1759121621363.png'
        },
        {
          title: 'Server Hardening',
          content: 'Enhanced security headers via .htaccess, locked down API keys to specific domains, and implemented DNSSEC for DNS integrity.',
          metrics: {
            'Security Headers': '100% implementation',
            'API Key Restrictions': 'Domain-specific',
            'DNS Security': 'DNSSEC enabled'
          }
        }
      ]
    },
    'full-stack-performance': {
      id: 'full-stack-performance',
      title: 'Full-Stack Performance Engineering',
      subtitle: 'Multi-Layer Caching for Sub-Second Load Times',
      category: 'Performance Optimization',
      duration: '4 months',
      client: 'Graston Technique®',
      hero_image: '/assets/images/edge-image-optimization-pipeline-hero-1759121621363.png',
      overview: 'Complete performance overhaul achieving sub-second load times through strategic caching, asset optimization, and server configuration.',
      challenge: 'Slow page load times, inefficient caching strategies, and bloated assets were impacting user experience and search rankings.',
      solution: 'Implemented multi-layered caching architecture combining LiteSpeed server, Redis object caching, and Cloudflare edge with comprehensive asset optimization.',
      results: [
        '86% cache hit ratio at Cloudflare edge',
        '40+ MB payload reduction through optimization',
        '35-40% reduction in HTTP requests',
        'Sub-second load times for cached content',
        '250ms faster admin dashboard response'
      ],
      technologies: ['LiteSpeed', 'Redis', 'Cloudflare', 'WebP', 'Brotli Compression'],
      sections: [
        {
          title: 'Caching Strategy',
          content: 'Implemented aggressive edge caching with intelligent purging, combined with Redis object caching for dynamic content optimization.',
          metrics: {
            'Edge Cache Hit': '86%',
            'Object Cache': 'Redis-powered',
            'TTL Strategy': 'Optimized per content type'
          }
        },
        {
          title: 'Asset Optimization',
          content: 'Comprehensive asset optimization including WebP conversion, Brotli compression, and HTTP request consolidation.',
          metrics: {
            'Payload Reduction': '40+ MB saved',
            'Request Reduction': '35-40%',
            'Image Format': 'WebP optimized'
          }
        }
      ]
    },
    'the-compass': {
      id: 'the-compass',
      title: 'The Compass: Attribution & Conversion Engineering',
      subtitle: 'Unifying Attribution from Ad Click to Sale',
      category: 'Analytics & Tracking',
      duration: '3 months',
      client: 'Graston Technique®',
      hero_image: '/assets/images/ChatGPT_Image_Sep_29_2025_12_16_05_AM-1759119580701.png',
      overview: 'Complete analytics pipeline overhaul creating a single source of truth for campaign ROI and conversion optimization.',
      challenge: 'Fragmented tracking systems, inaccurate conversion attribution, and poor signal quality were leading to inefficient ad spend.',
      solution: 'Built unified tracking architecture from dataLayer up, implementing clean GTM containers and normalized event structures.',
      results: [
        'Improved ROAS through accurate attribution',
        'Reduced false-positive conversions by 60%',
        'Clean funnel analytics implementation',
        'Smart bidding optimization enabled',
        'Single source of truth for campaign ROI'
      ],
      technologies: ['Google Analytics 4', 'Google Tag Manager', 'PixelYourSite PRO', 'Custom PHP Hooks', 'Google Ads'],
      sections: [
        {
          title: 'Tracking Architecture',
          content: 'Rebuilt Google Tag Manager with normalized event model, implementing server-side PHP hooks for high-intent event tracking.',
          metrics: {
            'Event Accuracy': '95% improvement',
            'False Positives': '60% reduction',
            'Attribution Quality': 'High-intent focused'
          }
        },
        {
          title: 'Conversion Optimization',
          content: 'Reconfigured Google Ads to focus on primary conversions, enabling smart bidding for actual sales rather than weak signals.',
          metrics: {
            'ROAS': 'Significantly improved',
            'CPA': 'Reduced',
            'Conversion Quality': 'Purchase-focused'
          }
        }
      ]
    },
    'the-conductor': {
      id: 'the-conductor',
      title: 'The Conductor: Systems Integration & Automation',
      subtitle: 'Creating Frictionless Customer Journeys',
      category: 'Marketing Automation',
      duration: '5 months',
      client: 'Graston Technique®',
      hero_image: '/assets/images/image-1759121288329.png',
      overview: 'Complete automation ecosystem integrating commerce, learning management, and CRM platforms for seamless customer experiences.',
      challenge: 'Manual data entry, disconnected systems, and fragmented customer records were creating operational inefficiencies and poor user experiences.',
      solution: 'Built automated data pipelines connecting WooCommerce, LearnDash, and FluentCRM with intelligent automation triggers.',
      results: [
        '15-20% planned site-wide speed improvement',
        'Eliminated manual data entry',
        'Unified customer record system',
        'Automated enrollment and certification',
        'Hyper-targeted marketing capabilities'
      ],
      technologies: ['WooCommerce', 'LearnDash', 'FluentCRM', 'WP Fusion', 'Uncanny Automator'],
      sections: [
        {
          title: 'Data Pipeline Architecture',
          content: 'Created seamless integration between commerce, learning, and CRM platforms with intelligent data synchronization.',
          metrics: {
            'System Integration': '5 platforms unified',
            'Data Sync': 'Real-time',
            'Manual Entry': 'Eliminated'
          }
        },
        {
          title: 'Automation Workflows',
          content: 'Implemented sophisticated automation rules for enrollment, certification, and customer journey management.',
          metrics: {
            'Workflow Efficiency': '400+ automations',
            'Processing Time': '70% reduction',
            'Customer Journey': 'Fully automated'
          }
        }
      ]
    },
    'internal-tooling': {
      id: 'internal-tooling',
      title: 'Internal Tooling: Custom Dashboard Solutions',
      subtitle: 'Building Tools that Solve Business Problems',
      category: 'Custom Development',
      duration: '3 months',
      client: 'Graston Technique®',
      hero_image: '/assets/images/image-1759121324532.png',
      overview: 'Development of custom internal tools and dashboards to streamline operations and empower teams with actionable data.',
      challenge: 'Staff lacked visibility into customer data and purchase context, leading to inefficient support processes and missed opportunities.',
      solution: 'Built custom Instructor Dashboard with jQuery-powered filtering and FluentCRM integration for comprehensive customer insights.',
      results: [
        'Streamlined support operations',
        'Enhanced customer context visibility',
        'Improved personalized outreach',
        'Reduced response times',
        'Increased operational efficiency'
      ],
      technologies: ['jQuery', 'FluentCRM API', 'Custom PHP', 'Dashboard UI', 'Data Visualization'],
      sections: [
        {
          title: 'Custom Dashboard Development',
          content: 'Built sophisticated filtering system with real-time data integration to provide comprehensive customer insights.',
          metrics: {
            'Data Sources': 'Multiple CRM fields',
            'Filtering': 'Dynamic jQuery-based',
            'Response Time': '50% improvement'
          }
        },
        {
          title: 'Business Process Integration',
          content: 'Transformed website into valuable internal tool for sales and support with contextual customer information.',
          metrics: {
            'Tool Adoption': '100% staff usage',
            'Process Efficiency': 'Significantly improved',
            'Customer Context': 'Complete visibility'
          }
        }
      ]
    },
    'the-engine-room': {
      id: 'the-engine-room',
      title: 'The Engine Room: Database & Server Optimization',
      subtitle: 'Building a Stable, High-Performance Foundation',
      category: 'Infrastructure & Database',
      duration: '4 months',
      client: 'Graston Technique®',
      hero_image: '/assets/images/download-1759120020924.png',
      overview: 'Comprehensive database and server optimization ensuring stable, high-performance infrastructure for current and future growth.',
      challenge: 'Database bloat, inefficient queries, and server configuration issues were causing performance degradation and stability concerns.',
      solution: 'Deep database cleanup, server configuration optimization, and implementation of monitoring systems for proactive maintenance.',
      results: [
        '~805 KB of database bloat removed',
        'Query response times under 0.2 seconds',
        '30% reduction in MySQL CPU usage',
        'Apache to LiteSpeed migration completed',
        'PHP 8.3 upgrade implemented'
      ],
      technologies: ['WP-CLI', 'MySQL Optimization', 'LiteSpeed', 'PHP-FPM', 'Netdata Monitoring'],
      sections: [
        {
          title: 'Database Optimization',
          content: 'Comprehensive database cleanup removing unused autoloaded options and implementing efficient indexing strategies.',
          metrics: {
            'Bloat Removed': '~805 KB',
            'Query Speed': '<0.2 seconds',
            'CPU Usage': '30% reduction'
          }
        },
        {
          title: 'Server Infrastructure',
          content: 'Server migration and configuration optimization with real-time monitoring implementation.',
          metrics: {
            'Server Stack': 'Apache → LiteSpeed',
            'PHP Version': 'Upgraded to 8.3',
            'Monitoring': 'Real-time Netdata'
          }
        }
      ]
    }
  };

  useEffect(() => {
    if (slug && caseStudies?.[slug]) {
      setCaseStudy(caseStudies?.[slug]);
      setLoading(false);
    } else {
      // Handle case study not found
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Icon name="Loader2" size={48} className="text-accent animate-spin mb-4" />
          <p className="text-muted-foreground">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16 px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Icon name="AlertTriangle" size={64} className="text-muted-foreground mb-6 mx-auto" />
            <h1 className="text-3xl font-bold text-text-primary mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The case study you're looking for doesn't exist or has been moved.
            </p>
            <Button onClick={() => navigate('/case-studies')} iconName="ArrowLeft" iconPosition="left">
              Back to Case Studies
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-background to-conversion/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="BookOpen" size={16} />
                <span>{caseStudy?.category}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                {caseStudy?.title}
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                {caseStudy?.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>{caseStudy?.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="Building" size={16} />
                  <span>{caseStudy?.client}</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate('/case-studies')}
                variant="outline"
                iconName="ArrowLeft"
                iconPosition="left"
              >
                Back to Case Studies
              </Button>
            </div>
            <div className="text-center lg:text-right">
              <img
                src={caseStudy?.hero_image}
                alt={caseStudy?.title}
                className="w-full max-w-lg mx-auto lg:mx-0 rounded-2xl brand-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8">Project Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            {caseStudy?.overview}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenge */}
            <div className="bg-card border border-border rounded-xl p-8 brand-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <Icon name="AlertTriangle" size={24} className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">Challenge</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy?.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-card border border-border rounded-xl p-8 brand-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">Solution</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy?.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-12">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy?.results?.map((result, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-6 brand-shadow">
                <div className="w-12 h-12 bg-conversion/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={24} className="text-conversion" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Technical Implementation</h2>
          <div className="space-y-12">
            {caseStudy?.sections?.map((section, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? 'order-1' : 'order-2 lg:order-1'}>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">{section?.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {section?.content}
                  </p>
                  {section?.metrics && (
                    <div className="space-y-3">
                      {Object.entries(section?.metrics)?.map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-border">
                          <span className="text-muted-foreground">{key}</span>
                          <span className="font-semibold text-conversion">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className={index % 2 === 0 ? 'order-2' : 'order-1 lg:order-2'}>
                  {section?.image && (
                    <img
                      src={section?.image}
                      alt={section?.title}
                      className="w-full rounded-xl brand-shadow"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-12">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudy?.technologies?.map((tech, index) => (
              <span
                key={index}
                className="bg-background border border-border px-4 py-2 rounded-lg text-muted-foreground font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Interested in Similar Results?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how these proven methodologies can be adapted to solve your unique challenges and drive measurable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate('/contact')}
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
              iconName="Mail"
              iconPosition="left"
            >
              Start a Conversation
            </Button>
            <Button
              onClick={() => navigate('/case-studies')}
              variant="outline"
              iconName="BookOpen"
              iconPosition="left"
            >
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;