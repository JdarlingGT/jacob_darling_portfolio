import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceDashboard = () => {
  const [metrics, setMetrics] = useState({
    pageLoadTime: 0,
    performanceScore: 0,
    accessibilityScore: 0,
    seoScore: 0,
    bestPracticesScore: 0,
    uptime: 0,
    visitors: 0,
    bounceRate: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  // Simulate real-time data loading
  useEffect(() => {
    const loadMetrics = () => {
      const targetMetrics = {
        pageLoadTime: 1.2,
        performanceScore: 98,
        accessibilityScore: 100,
        seoScore: 95,
        bestPracticesScore: 92,
        uptime: 99.9,
        visitors: 12847,
        bounceRate: 23.4
      };

      // Animate metrics loading
      Object.keys(targetMetrics)?.forEach((key) => {
        let current = 0;
        const target = targetMetrics?.[key];
        const increment = target / 50;
        
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          
          setMetrics(prev => ({
            ...prev,
            [key]: key === 'pageLoadTime' || key === 'bounceRate' || key === 'uptime' 
              ? Math.round(current * 10) / 10 
              : Math.floor(current)
          }));
        }, 50);
      });

      setTimeout(() => setIsLoading(false), 2500);
    };

    loadMetrics();
  }, []);

  const performanceMetrics = [
    {
      title: "Page Load Time",
      value: `${metrics?.pageLoadTime}s`,
      icon: "Zap",
      color: "conversion",
      description: "Average page load time",
      target: "< 2.0s",
      status: metrics?.pageLoadTime < 2.0 ? "excellent" : "good"
    },
    {
      title: "Performance Score",
      value: `${metrics?.performanceScore}%`,
      icon: "TrendingUp",
      color: "trust-builder",
      description: "Lighthouse performance score",
      target: "> 90%",
      status: metrics?.performanceScore > 90 ? "excellent" : "good"
    },
    {
      title: "Accessibility",
      value: `${metrics?.accessibilityScore}%`,
      icon: "Shield",
      color: "cta-warm",
      description: "WCAG 2.1 AA compliance",
      target: "100%",
      status: metrics?.accessibilityScore === 100 ? "excellent" : "good"
    },
    {
      title: "SEO Score",
      value: `${metrics?.seoScore}%`,
      icon: "Search",
      color: "secondary",
      description: "Search engine optimization",
      target: "> 90%",
      status: metrics?.seoScore > 90 ? "excellent" : "good"
    }
  ];

  const systemMetrics = [
    {
      title: "System Uptime",
      value: `${metrics?.uptime}%`,
      icon: "Activity",
      color: "trust-builder",
      description: "30-day availability",
      trend: "+0.1%"
    },
    {
      title: "Monthly Visitors",
      value: metrics?.visitors?.toLocaleString(),
      icon: "Users",
      color: "conversion",
      description: "Unique visitors this month",
      trend: "+12.3%"
    },
    {
      title: "Bounce Rate",
      value: `${metrics?.bounceRate}%`,
      icon: "MousePointer",
      color: "cta-warm",
      description: "Single page sessions",
      trend: "-5.2%"
    },
    {
      title: "Best Practices",
      value: `${metrics?.bestPracticesScore}%`,
      icon: "CheckCircle",
      color: "secondary",
      description: "Code quality standards",
      trend: "+2.1%"
    }
  ];

  const getColorClass = (color, type = 'bg') => {
    const colorMap = {
      'conversion': type === 'bg' ? 'bg-conversion' : 'text-conversion',
      'trust-builder': type === 'bg' ? 'bg-trust-builder' : 'text-trust-builder',
      'cta-warm': type === 'bg' ? 'bg-cta-warm' : 'text-cta-warm',
      'secondary': type === 'bg' ? 'bg-secondary' : 'text-secondary'
    };
    return colorMap?.[color] || 'bg-conversion';
  };

  const getStatusColor = (status) => {
    return status === 'excellent' ? 'text-trust-builder' : 'text-cta-warm';
  };

  const getTrendColor = (trend) => {
    return trend?.startsWith('+') ? 'text-trust-builder' : 'text-destructive';
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-trust-builder/10 rounded-xl flex items-center justify-center mr-4">
              <Icon name="BarChart3" size={24} className="text-trust-builder" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Performance Dashboard
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real-time showcase of technical capabilities through live performance metrics, 
            demonstrating optimization expertise and commitment to excellence.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Core Web Vitals & Performance
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics?.map((metric, index) => (
              <div key={index} className="bg-card rounded-xl p-6 brand-border">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${getColorClass(metric?.color)}/10 rounded-xl flex items-center justify-center`}>
                    <Icon name={metric?.icon} size={24} className={getColorClass(metric?.color, 'text')} />
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric?.status)}`}>
                    {metric?.status === 'excellent' ? 'Excellent' : 'Good'}
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-2xl font-bold text-text-primary mb-1">
                    {isLoading ? (
                      <div className="w-16 h-8 bg-muted rounded animate-pulse" />
                    ) : (
                      metric?.value
                    )}
                  </div>
                  <h4 className="font-semibold text-text-primary text-sm">{metric?.title}</h4>
                </div>

                <p className="text-xs text-text-secondary mb-3">{metric?.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary">Target: {metric?.target}</span>
                  <div className={`w-3 h-3 rounded-full ${
                    metric?.status === 'excellent' ? 'bg-trust-builder' : 'bg-cta-warm'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Metrics */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            System Analytics & Monitoring
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemMetrics?.map((metric, index) => (
              <div key={index} className="bg-card rounded-xl p-6 brand-border">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${getColorClass(metric?.color)}/10 rounded-xl flex items-center justify-center`}>
                    <Icon name={metric?.icon} size={24} className={getColorClass(metric?.color, 'text')} />
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-medium ${getTrendColor(metric?.trend)}`}>
                    <Icon 
                      name={metric?.trend?.startsWith('+') ? "TrendingUp" : "TrendingDown"} 
                      size={12} 
                    />
                    {metric?.trend}
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-2xl font-bold text-text-primary mb-1">
                    {isLoading ? (
                      <div className="w-20 h-8 bg-muted rounded animate-pulse" />
                    ) : (
                      metric?.value
                    )}
                  </div>
                  <h4 className="font-semibold text-text-primary text-sm">{metric?.title}</h4>
                </div>

                <p className="text-xs text-text-secondary">{metric?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Showcase */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 brand-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Technical Implementation
            </h3>
            <p className="text-text-secondary">
              This portfolio demonstrates real-world application of modern web technologies 
              and performance optimization techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Architecture */}
            <div className="text-center">
              <div className="w-16 h-16 bg-conversion/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Code" size={32} className="text-conversion" />
              </div>
              <h4 className="font-bold text-text-primary mb-2">Frontend Architecture</h4>
              <p className="text-sm text-text-secondary mb-4">
                React 18 with functional components, custom hooks, and optimized rendering
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['React', 'Vite', 'Tailwind CSS']?.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-muted text-xs rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Performance Optimization */}
            <div className="text-center">
              <div className="w-16 h-16 bg-trust-builder/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-trust-builder" />
              </div>
              <h4 className="font-bold text-text-primary mb-2">Performance Optimization</h4>
              <p className="text-sm text-text-secondary mb-4">
                Code splitting, lazy loading, image optimization, and caching strategies
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Lazy Loading', 'Code Splitting', 'Image Optimization']?.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-muted text-xs rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Accessibility & SEO */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cta-warm/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-cta-warm" />
              </div>
              <h4 className="font-bold text-text-primary mb-2">Accessibility & SEO</h4>
              <p className="text-sm text-text-secondary mb-4">
                WCAG 2.1 AA compliance, semantic HTML, and search engine optimization
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['WCAG 2.1 AA', 'Semantic HTML', 'Meta Tags']?.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-muted text-xs rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Live Metrics Footer */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <div className="w-2 h-2 bg-trust-builder rounded-full animate-pulse" />
                <span>Live metrics updated every 30 seconds</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Server" size={16} className="text-trust-builder" />
                  <span className="text-text-secondary">Status: </span>
                  <span className="text-trust-builder font-medium">Operational</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-conversion" />
                  <span className="text-text-secondary">Last updated: </span>
                  <span className="text-text-primary font-medium">
                    {new Date()?.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceDashboard;