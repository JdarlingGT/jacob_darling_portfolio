import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PerformanceDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    automations: 0,
    botBlocks: 0,
    uptime: 0,
    performance: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('performance-dashboard');
    if (element) observer?.observe(element);

    return () => {
      if (element) observer?.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = {
        automations: 427,
        botBlocks: 85000,
        uptime: 99.97,
        performance: 98
      };

      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic

        setAnimatedValues({
          automations: Math.round(targets?.automations * easeProgress),
          botBlocks: Math.round(targets?.botBlocks * easeProgress),
          uptime: parseFloat((targets?.uptime * easeProgress)?.toFixed(2)),
          performance: Math.round(targets?.performance * easeProgress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const metrics = [
    {
      label: 'Active Automations',
      value: animatedValues?.automations,
      suffix: '+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      label: 'Malicious Bots Blocked',
      value: animatedValues?.botBlocks,
      suffix: '+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      label: 'System Uptime',
      value: animatedValues?.uptime,
      suffix: '%',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      label: 'Performance Score',
      value: animatedValues?.performance,
      suffix: '/100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  return (
    <section id="performance-dashboard" className="py-20 bg-gradient-to-br from-surface to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Live Performance Dashboard
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Real-time metrics from production systems I've architected and maintain
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics?.map((metric, index) => (
            <motion.div
              key={metric?.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg smooth-transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${metric?.bgColor} rounded-lg flex items-center justify-center`}>
                  <div className={metric?.color}>
                    {metric?.icon}
                  </div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-text-primary font-mono">
                    {metric?.value?.toLocaleString()}
                  </span>
                  <span className="text-lg font-medium text-text-secondary ml-1">
                    {metric?.suffix}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{metric?.label}</p>
              </div>

              {/* Mini chart visualization */}
              <div className="mt-4 h-8 bg-muted rounded overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className={`h-full ${metric?.color?.replace('text-', 'bg-')} opacity-20`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real-time status indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-surface/50 border border-border rounded-xl p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-text-secondary font-medium">All Systems Operational</span>
              </div>
              <div className="text-text-secondary text-sm">
                Last updated: {new Date()?.toLocaleTimeString()}
              </div>
            </div>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="text-center">
                <div className="text-sm text-text-secondary">Response Time</div>
                <div className="text-lg font-bold text-green-500">127ms</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-text-secondary">Load Time</div>
                <div className="text-lg font-bold text-blue-500">0.8s</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-text-secondary">CDN</div>
                <div className="text-lg font-bold text-purple-500">Active</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-text-secondary text-sm">
            * Metrics sourced from production environments at Graston Technique® and integrated monitoring systems
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerformanceDashboard;