import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GitHubWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contributionData, setContributionData] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('github-widget');
    if (element) observer?.observe(element);

    return () => {
      if (element) observer?.unobserve(element);
    };
  }, []);

  useEffect(() => {
    // Generate realistic contribution pattern
    const generateContributions = () => {
      const contributions = [];
      const today = new Date();
      
      for (let i = 365; i >= 0; i--) {
        const date = new Date(today);
        date?.setDate(date?.getDate() - i);
        
        // Simulate realistic commit patterns (higher during weekdays)
        const isWeekend = date?.getDay() === 0 || date?.getDay() === 6;
        const baseActivity = isWeekend ? 0.2 : 0.8;
        const randomFactor = Math.random();
        
        let level = 0;
        if (randomFactor < 0.3) level = 0;
        else if (randomFactor < 0.6) level = Math.floor(baseActivity * 1);
        else if (randomFactor < 0.85) level = Math.floor(baseActivity * 2);
        else level = Math.floor(baseActivity * 4);
        
        contributions?.push({
          date: date?.toISOString()?.split('T')?.[0],
          level: Math.min(level, 4),
          count: level * (Math.floor(Math.random() * 3) + 1)
        });
      }
      
      return contributions;
    };

    if (isVisible) {
      setContributionData(generateContributions());
    }
  }, [isVisible]);

  const recentProjects = [
    {
      name: 'marketing-automation-suite',
      description: 'Enterprise-grade marketing automation platform with CRM integration',
      language: 'PHP',
      stars: 24,
      commits: '127 commits',
      updated: '2 days ago',
      color: 'bg-purple-500'
    },
    {
      name: 'performance-optimization-toolkit',
      description: 'WordPress performance optimization tools and monitoring dashboard',
      language: 'JavaScript',
      stars: 18,
      commits: '89 commits',
      updated: '5 days ago',
      color: 'bg-yellow-500'
    },
    {
      name: 'analytics-data-pipeline',
      description: 'ETL pipeline for marketing attribution and conversion tracking',
      language: 'Python',
      stars: 12,
      commits: '156 commits',
      updated: '1 week ago',
      color: 'bg-blue-500'
    }
  ];

  const totalContributions = contributionData?.reduce((sum, day) => sum + day?.count, 0);
  const currentStreak = 23; // Days
  const longestStreak = 87; // Days

  return (
    <section id="github-widget" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Development Activity
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Live from my GitHub - where marketing strategy meets code implementation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-background border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-text-primary">
                  {totalContributions} contributions in the last year
                </h3>
                <a 
                  href="https://github.com/jacobdarling" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-text-secondary hover:text-conversion smooth-transition"
                >
                  <span className="text-sm">View on GitHub</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>

              {/* Contribution Calendar */}
              <div className="mb-6 overflow-x-auto">
                <div className="grid grid-cols-53 gap-1 min-w-[680px]">
                  {contributionData?.map((day, index) => (
                    <motion.div
                      key={day?.date}
                      initial={{ scale: 0 }}
                      animate={isVisible ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.001 }}
                      className={`w-3 h-3 rounded-sm ${
                        day?.level === 0 ? 'bg-muted' :
                        day?.level === 1 ? 'bg-green-200' :
                        day?.level === 2 ? 'bg-green-400' :
                        day?.level === 3 ? 'bg-green-600': 'bg-green-800'
                      }`}
                      title={`${day?.count} contributions on ${day?.date}`}
                    />
                  ))}
                </div>
              </div>

              {/* Contribution Stats */}
              <div className="flex items-center justify-between text-sm text-text-secondary">
                <div className="flex items-center space-x-4">
                  <span>Less</span>
                  <div className="flex space-x-1">
                    {[0, 1, 2, 3, 4]?.map((level) => (
                      <div
                        key={level}
                        className={`w-3 h-3 rounded-sm ${
                          level === 0 ? 'bg-muted' :
                          level === 1 ? 'bg-green-200' :
                          level === 2 ? 'bg-green-400' :
                          level === 3 ? 'bg-green-600': 'bg-green-800'
                        }`}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
                <div className="flex space-x-4">
                  <span>Current streak: <strong>{currentStreak} days</strong></span>
                  <span>Longest streak: <strong>{longestStreak} days</strong></span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Projects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-6">Recent Projects</h3>
              
              <div className="space-y-4">
                {recentProjects?.map((project, index) => (
                  <motion.div
                    key={project?.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                    className="border border-border rounded-lg p-4 hover:border-conversion/50 smooth-transition"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-text-primary text-sm">{project?.name}</h4>
                      <div className="flex items-center space-x-1 text-text-secondary">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="text-xs">{project?.stars}</span>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary text-xs mb-3 leading-relaxed">
                      {project?.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 ${project?.color} rounded-full`}></div>
                        <span className="text-xs text-text-secondary">{project?.language}</span>
                      </div>
                      <span className="text-xs text-text-secondary">{project?.updated}</span>
                    </div>
                    
                    <div className="mt-2 pt-2 border-t border-border">
                      <span className="text-xs text-text-secondary">{project?.commits}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <a 
                  href="https://github.com/jacobdarling" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-conversion hover:text-conversion/80 text-sm font-medium smooth-transition"
                >
                  View all repositories →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubWidget;