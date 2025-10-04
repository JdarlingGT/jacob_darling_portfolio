import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock project data - in real app would come from API/database
  const projects = {
    'urgentcare-indy': {
      id: 'urgentcare-indy',
      title: 'UrgentCare Indy Platform',
      subtitle: 'Healthcare Digital Transformation',
      description: 'Comprehensive digital healthcare platform with integrated patient management, online check-in system, and real-time appointment scheduling.',
      category: 'Healthcare Technology',
      status: 'Live Production',
      launched: 'September 2013',
      client: 'Pike Medical Consultants',
      hero: {
        image: '/assets/images/1732967007485-1759120141831.jpg',
        liveUrl: 'https://urgentcareindy.com',
        githubUrl: null // Private repository
      },
      overview: {
        problem: 'Pike Medical Consultants needed to launch a new UrgentCare division with a complete digital presence, from branding to patient management systems.',
        solution: 'Built a comprehensive digital platform from the ground up, including patient check-in systems, appointment scheduling, and integrated healthcare workflows.',
        impact: 'Successfully launched the UrgentCare Indy brand with a 45% average growth in patient visits over three years while maintaining positive ROI.'
      },
      features: [
        {
          title: 'Online Patient Check-In',
          description: 'Integrated Clockwise MD system to reduce wait times and streamline patient onboarding',
          icon: 'Clock'
        },
        {
          title: 'Real-Time Appointment Scheduling',
          description: 'Dynamic scheduling system with availability tracking and automated confirmations',
          icon: 'Calendar'
        },
        {
          title: 'Patient Portal Integration',
          description: 'Secure patient information access with HIPAA-compliant data handling',
          icon: 'Shield'
        },
        {
          title: 'Multi-Location Management',
          description: 'Centralized system managing multiple urgent care locations across Indianapolis',
          icon: 'MapPin'
        },
        {
          title: 'Insurance Verification',
          description: 'Automated insurance verification and pre-authorization workflows',
          icon: 'CreditCard'
        },
        {
          title: 'Mobile-Responsive Design',
          description: 'Optimized experience across all devices with focus on mobile patient interactions',
          icon: 'Smartphone'
        }
      ],
      techStack: [
        { name: 'WordPress CMS', category: 'Content Management' },
        { name: 'PHP/MySQL', category: 'Backend Development' },
        { name: 'JavaScript/jQuery', category: 'Frontend Development' },
        { name: 'Clockwise MD API', category: 'Healthcare Integration' },
        { name: 'SSL/HTTPS Security', category: 'Security' },
        { name: 'Responsive CSS', category: 'UI/UX' },
        { name: 'Google Analytics', category: 'Analytics' },
        { name: 'HIPAA Compliance', category: 'Healthcare Compliance' }
      ],
      performance: {
        metrics: [
          { label: 'Patient Visit Growth', value: '45%', period: '3-year average' },
          { label: 'Wait Time Reduction', value: '65%', period: 'With online check-in' },
          { label: 'Mobile Traffic', value: '78%', period: 'Of total site visits' },
          { label: 'Appointment Conversion', value: '82%', period: 'Online to visit rate' }
        ],
        uptime: '99.8%',
        loadTime: '2.1s',
        mobileScore: '94/100'
      },
      timeline: [
        {
          phase: 'Discovery & Planning',
          duration: '2 weeks',
          activities: ['Market research', 'Competitor analysis', 'Technical requirements', 'Brand strategy']
        },
        {
          phase: 'Design & Development',
          duration: '8 weeks',
          activities: ['UI/UX design', 'CMS development', 'API integrations', 'Mobile optimization']
        },
        {
          phase: 'Integration & Testing',
          duration: '3 weeks',
          activities: ['Clockwise MD integration', 'Security testing', 'HIPAA compliance', 'Performance optimization']
        },
        {
          phase: 'Launch & Marketing',
          duration: '2 weeks',
          activities: ['Production deployment', 'Staff training', 'Marketing campaign', 'Performance monitoring']
        }
      ],
      relatedProjects: ['graston-technique', 'rbe-law', 'primary-care-indy']
    },
    'graston-technique': {
      id: 'graston-technique',
      title: 'Graston Technique® Digital Ecosystem',
      subtitle: 'Healthcare Education Platform Revolution',
      description: 'Complete digital transformation of a national healthcare education platform with advanced marketing automation, AI integration, and performance optimization.',
      category: 'Marketing Technology',
      status: 'Live Production',
      launched: 'August 2023',
      client: 'Graston Technique®',
      hero: {
        image: '/assets/images/Gemini_Generated_Image_6zxf7o6zxf7o6zxf-1759117577100.png',
        liveUrl: 'https://grastontechnique.com',
        githubUrl: null
      },
      overview: {
        problem: 'Graston Technique® needed a comprehensive digital transformation to scale their healthcare education platform nationally while improving operational efficiency.',
        solution: 'Architected a complete marketing ecosystem including AI automation, performance optimization, security hardening, and data integration across multiple platforms.',
        impact: 'Achieved 70% reduction in support tickets, 40% increase in conversions, eliminated downtime, and neutralized 85,000+ malicious bot hits monthly.'
      },
      features: [
        {
          title: 'Guardian AI Assistant',
          description: 'Intelligent automation system with 400+ workflows reducing manual processes by hours weekly',
          icon: 'Bot'
        },
        {
          title: 'Launchpad Provider Directory',
          description: 'Revolutionary e-commerce system transforming static assets into automated revenue engines',
          icon: 'Rocket'
        },
        {
          title: 'The Compass Analytics',
          description: 'Advanced analytics pipeline with GTM architecture and precise attribution modeling',
          icon: 'Compass'
        },
        {
          title: 'The Fortress Security',
          description: 'Multi-layered Cloudflare defense system neutralizing thousands of attacks monthly',
          icon: 'Shield'
        },
        {
          title: 'The Engine Room Performance',
          description: 'Performance optimization achieving 86% cache-hit ratio and zero downtime',
          icon: 'Zap'
        },
        {
          title: 'The Conductor Integration',
          description: 'Seamless data pipeline integrating five disparate platforms into unified system',
          icon: 'GitBranch'
        }
      ],
      techStack: [
        { name: 'WordPress/WooCommerce', category: 'E-commerce Platform' },
        { name: 'LearnDash LMS', category: 'Education Management' },
        { name: 'FluentCRM', category: 'Customer Relationship' },
        { name: 'Gravity Forms', category: 'Form Management' },
        { name: 'Cloudflare Security', category: 'Security & Performance' },
        { name: 'Google Tag Manager', category: 'Analytics Architecture' },
        { name: 'OpenAI API', category: 'AI Integration' },
        { name: 'Zapier Automation', category: 'Workflow Automation' },
        { name: 'Redis Caching', category: 'Performance Optimization' },
        { name: 'Google Analytics 4', category: 'Advanced Analytics' }
      ],
      performance: {
        metrics: [
          { label: 'Support Ticket Reduction', value: '70%', period: 'Since AI implementation' },
          { label: 'Conversion Rate Increase', value: '40%', period: 'E-commerce optimization' },
          { label: 'Cache Hit Ratio', value: '86%', period: 'Performance optimization' },
          { label: 'Malicious Attacks Blocked', value: '85K+', period: 'Monthly defense stats' }
        ],
        uptime: '100%',
        loadTime: '1.8s',
        mobileScore: '96/100'
      },
      timeline: [
        {
          phase: 'Assessment & Strategy',
          duration: '3 weeks',
          activities: ['Platform audit', 'Security assessment', 'Performance analysis', 'Integration planning']
        },
        {
          phase: 'Core Infrastructure',
          duration: '6 weeks',
          activities: ['Security hardening', 'Performance optimization', 'AI system architecture', 'Data pipeline design']
        },
        {
          phase: 'Automation & Integration',
          duration: '8 weeks',
          activities: ['Guardian AI deployment', 'Workflow automation', 'Platform integrations', 'Analytics setup']
        },
        {
          phase: 'Optimization & Scaling',
          duration: '4 weeks',
          activities: ['Performance tuning', 'Conversion optimization', 'Monitoring setup', 'Team training']
        }
      ],
      relatedProjects: ['urgentcare-indy', 'rbe-law', 'resq-organics']
    }
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const project = projects?.[id] || null;
      setCurrentProject(project);
      setLoading(false);
    }, 500);
  }, [id]);

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText(text);
    // Could add toast notification here
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-surface">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Icon name="Loader2" size={48} className="text-conversion animate-spin mx-auto mb-4" />
            <p className="text-text-secondary">Loading project details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!currentProject) {
    return (
      <div className="min-h-screen bg-surface">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Icon name="AlertCircle" size={48} className="text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-text-primary mb-2">Project Not Found</h2>
            <p className="text-text-secondary mb-6">The requested project could not be found.</p>
            <Button onClick={() => navigate('/projects')} variant="default">
              Back to Projects
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'features', label: 'Features', icon: 'Layers' },
    { id: 'tech', label: 'Technology', icon: 'Code' },
    { id: 'performance', label: 'Performance', icon: 'TrendingUp' },
    { id: 'timeline', label: 'Timeline', icon: 'Clock' }
  ];

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      {/* Breadcrumb Navigation */}
      <div className="bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <button 
              onClick={() => navigate('/')}
              className="text-text-secondary hover:text-conversion transition-colors"
            >
              Home
            </button>
            <Icon name="ChevronRight" size={16} className="text-text-muted" />
            <button 
              onClick={() => navigate('/projects')}
              className="text-text-secondary hover:text-conversion transition-colors"
            >
              Projects
            </button>
            <Icon name="ChevronRight" size={16} className="text-text-muted" />
            <span className="text-text-primary font-medium">{currentProject?.title}</span>
          </nav>
        </div>
      </div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-conversion/10 text-conversion px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Icon name="Briefcase" size={16} />
                <span>{currentProject?.category}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                {currentProject?.title}
              </h1>
              <p className="text-xl text-text-secondary mb-6">
                {currentProject?.subtitle}
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                {currentProject?.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {currentProject?.hero?.liveUrl && (
                  <Button
                    variant="default"
                    onClick={() => window.open(currentProject?.hero?.liveUrl, '_blank')}
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    View Live Demo
                  </Button>
                )}
                {currentProject?.hero?.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(currentProject?.hero?.githubUrl, '_blank')}
                    iconName="Github"
                    iconPosition="left"
                  >
                    View Code
                  </Button>
                )}
                <Button
                  variant="ghost"
                  onClick={() => copyToClipboard(window.location?.href)}
                  iconName="Share"
                  iconPosition="left"
                >
                  Share Project
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="text-sm text-text-secondary">Status</div>
                  <div className="font-semibold text-text-primary flex items-center space-x-2">
                    <div className="w-2 h-2 bg-trust-builder rounded-full"></div>
                    <span>{currentProject?.status}</span>
                  </div>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="text-sm text-text-secondary">Launched</div>
                  <div className="font-semibold text-text-primary">{currentProject?.launched}</div>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="text-sm text-text-secondary">Client</div>
                  <div className="font-semibold text-text-primary">{currentProject?.client}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-muted rounded-xl overflow-hidden brand-shadow">
                <img
                  src={currentProject?.hero?.image}
                  alt={currentProject?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {currentProject?.hero?.liveUrl && (
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <Button
                    variant="default"
                    onClick={() => window.open(currentProject?.hero?.liveUrl, '_blank')}
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    Visit Live Site
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Tabs Navigation */}
      <section className="bg-background border-b border-border sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab?.id 
                    ? 'border-conversion text-conversion' :'border-transparent text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span className="font-medium">{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Tab Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">The Challenge</h2>
                  <p className="text-text-secondary leading-relaxed">{currentProject?.overview?.problem}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Our Solution</h2>
                  <p className="text-text-secondary leading-relaxed">{currentProject?.overview?.solution}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Impact & Results</h2>
                  <p className="text-text-secondary leading-relaxed">{currentProject?.overview?.impact}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-background border border-border rounded-xl p-6">
                  <h3 className="font-bold text-text-primary mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    {currentProject?.performance?.metrics?.slice(0, 2)?.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-conversion">{metric?.value}</div>
                        <div className="text-sm text-text-primary">{metric?.label}</div>
                        <div className="text-xs text-text-secondary">{metric?.period}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div>
              <h2 className="text-3xl font-bold text-text-primary text-center mb-16">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProject?.features?.map((feature, index) => (
                  <div key={index} className="bg-background border border-border rounded-xl p-6 brand-shadow">
                    <div className="w-12 h-12 bg-conversion/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={feature?.icon} size={24} className="text-conversion" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-3">{feature?.title}</h3>
                    <p className="text-text-secondary">{feature?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div>
              <h2 className="text-3xl font-bold text-text-primary text-center mb-16">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {currentProject?.techStack?.map((tech, index) => (
                  <div key={index} className="bg-background border border-border rounded-lg p-4 brand-shadow hover:shadow-lg transition-shadow">
                    <div className="font-semibold text-text-primary mb-1">{tech?.name}</div>
                    <div className="text-sm text-text-secondary">{tech?.category}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-text-primary text-center mb-16">Performance Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentProject?.performance?.metrics?.map((metric, index) => (
                    <div key={index} className="bg-background border border-border rounded-xl p-6 brand-shadow text-center">
                      <div className="text-3xl font-bold text-conversion mb-2">{metric?.value}</div>
                      <div className="font-semibold text-text-primary mb-1">{metric?.label}</div>
                      <div className="text-sm text-text-secondary">{metric?.period}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background border border-border rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-trust-builder mb-2">{currentProject?.performance?.uptime}</div>
                  <div className="font-medium text-text-primary">Uptime</div>
                </div>
                <div className="bg-background border border-border rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-trust-builder mb-2">{currentProject?.performance?.loadTime}</div>
                  <div className="font-medium text-text-primary">Load Time</div>
                </div>
                <div className="bg-background border border-border rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-trust-builder mb-2">{currentProject?.performance?.mobileScore}</div>
                  <div className="font-medium text-text-primary">Mobile Score</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div>
              <h2 className="text-3xl font-bold text-text-primary text-center mb-16">Development Timeline</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-conversion/20 lg:left-1/2 lg:-translate-x-0.5"></div>
                {currentProject?.timeline?.map((phase, index) => (
                  <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <div className="bg-background border border-border rounded-xl p-6 brand-shadow ml-12 lg:ml-0">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-text-primary">{phase?.phase}</h3>
                          <span className="text-sm text-conversion bg-conversion/10 px-3 py-1 rounded-full">
                            {phase?.duration}
                          </span>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {phase?.activities?.map((activity, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-text-secondary">
                              <Icon name="Check" size={16} className="text-conversion flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-8 h-8 bg-conversion rounded-full border-4 border-surface flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <Button
              variant="outline"
              onClick={() => navigate('/projects')}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Back to Projects
            </Button>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Interested in Similar Solutions?
              </h3>
              <p className="text-text-secondary mb-4">
                Let's discuss how I can help transform your business.
              </p>
              <Button
                variant="default"
                onClick={() => navigate('/contact')}
                iconName="MessageCircle"
                iconPosition="left"
              >
                Start a Conversation
              </Button>
            </div>

            <Button
              variant="ghost"
              onClick={() => window.open('mailto:hoosierdarling@gmail.com?subject=Project Discussion', '_blank')}
              iconName="Mail"
              iconPosition="left"
            >
              Discuss This Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;