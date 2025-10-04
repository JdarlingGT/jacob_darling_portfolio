import React, { useEffect, useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import { motion } from 'framer-motion';

const AboutMePage = () => {
  const [isScrollAnimationTriggered, setIsScrollAnimationTriggered] = useState(false);

  useEffect(() => {
    // Set page title and meta description
    document.title = 'About Me - Jacob Darling | The Architect in the Marketing Room';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Discover Jacob Darling\'s unique approach as a marketing leader who bridges creative vision with technical execution. Learn about the architect in the marketing room solving the handoff problem.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Intersection Observer for scroll animations
    const observerCallback = (entries) => {
      entries?.forEach((entry) => {
        if (entry?.isIntersecting && !isScrollAnimationTriggered) {
          setIsScrollAnimationTriggered(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2
    });

    const targetElement = document.querySelector('.story-content');
    if (targetElement) {
      observer?.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer?.unobserve(targetElement);
      }
    };
  }, [isScrollAnimationTriggered]);

  const timelineItems = [
    {
      phase: "The Foundation",
      period: "2004-2008",
      title: "Strategic Thinking Roots",
      description: "Built analytical foundation at Indiana University, winning Target Marketing Competition through innovative strategy development.",
      icon: "GraduationCap"
    },
    {
      phase: "The Evolution",
      period: "2008-2018", 
      title: "Marketing Mastery",
      description: "Developed expertise in brand strategy, campaign development, and creative execution across diverse industries.",
      icon: "Lightbulb"
    },
    {
      phase: "The Bridge",
      period: "2018-2023",
      title: "Technical Integration", 
      description: "Merged marketing expertise with technical architecture, mastering CRM systems, automation workflows, and infrastructure design.",
      icon: "Settings"
    },
    {
      phase: "The Architect",
      period: "2023-Present",
      title: "Systems Leadership",
      description: "Leading as Marketing Director & Systems Architect at Graston Technique®, solving the handoff problem at scale.",
      icon: "Building"
    }
  ];

  const philosophyPillars = [
    {
      icon: "Target",
      title: "Strategic Precision",
      description: "Every creative decision backed by data-driven strategy and measurable outcomes."
    },
    {
      icon: "Zap", 
      title: "Technical Execution",
      description: "Building the infrastructure that makes bold marketing visions sustainable and scalable."
    },
    {
      icon: "Users",
      title: "Collaborative Leadership", 
      description: "Bridging teams and translating between creative and technical perspectives."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Professional Photo */}
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-conversion/20 shadow-lg">
                <Image
                  src="/assets/images/1732967007485-1759612859004.jpg"
                  alt="Jacob Darling - Marketing Director & Systems Architect"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-conversion/40 animate-pulse" />
            </div>

            {/* Tagline */}
            <div className="inline-flex items-center px-4 py-2 bg-conversion/10 text-conversion rounded-full text-sm font-medium mb-6">
              <Icon name="Building" size={16} className="mr-2" />
              The Architect in the Marketing Room
            </div>
          </motion.div>
        </div>
      </section>
      {/* Main Story Content */}
      <section className="py-16 story-content">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isScrollAnimationTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-12 lg:p-16 shadow-lg"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-8 text-center">
              My Story: The Architect in the Marketing Room
            </h1>
            
            <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-6">
              <p className="text-xl lg:text-2xl text-text-primary font-medium leading-relaxed">
                "Great marketing ideas often break at the handoff—the critical point where a creative vision meets the complex reality of technical execution.
              </p>
              
              <p className="text-lg leading-relaxed">
                My career has been built to solve this problem. I'm Jacob Darling, a marketing leader who operates as both a brand strategist and a systems architect.
              </p>
              
              <p className="text-lg leading-relaxed">
                On one side, I direct bold rebrands, craft compelling narratives, and launch creative campaigns. On the other, I design and build the underlying technical infrastructure—the CRM logic, automation workflows, and web architecture—that makes those campaigns scalable, measurable, and sustainable.
              </p>
              
              <p className="text-lg leading-relaxed">
                This hybrid approach allows me to create deeply integrated solutions that don't just look good, but function brilliantly. I thrive on turning abstract goals into powerful, revenue-focused marketing engines."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Career Timeline */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Professional Evolution
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              From strategic foundations to systems architecture — the journey that created the bridge between creative vision and technical reality.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full hidden lg:block"></div>
            
            <div className="space-y-16">
              {timelineItems?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-conversion rounded-full border-4 border-background z-10 hidden lg:block"></div>
                  
                  {/* Content card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-conversion/10 rounded-lg flex items-center justify-center">
                          <Icon name={item?.icon} size={24} className="text-conversion" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-conversion">{item?.phase}</div>
                          <div className="text-sm text-text-secondary">{item?.period}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-text-primary mb-3">{item?.title}</h3>
                      <p className="text-text-secondary leading-relaxed">{item?.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Core Philosophy
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Three foundational principles that drive every project and shape my approach to solving the marketing handoff problem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyPillars?.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05]">
                  <div className="w-16 h-16 bg-gradient-to-br from-conversion via-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                    <Icon name={pillar?.icon} size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-4">{pillar?.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{pillar?.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Skills Evolution Visualization */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Skills Evolution
            </h2>
            <p className="text-lg text-text-secondary">
              The progression from marketing foundations to systems architecture mastery.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="space-y-8">
              {[
                { skill: "Marketing Strategy", level: 95, color: "bg-conversion" },
                { skill: "Brand Development", level: 90, color: "bg-accent" }, 
                { skill: "Marketing Automation", level: 88, color: "bg-primary" },
                { skill: "CRM Architecture", level: 85, color: "bg-trust-builder" },
                { skill: "Systems Integration", level: 82, color: "bg-cta-warm" }
              ]?.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-text-primary">{skill?.skill}</span>
                    <span className="text-sm text-text-secondary">{skill?.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill?.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className={`h-2 rounded-full ${skill?.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-conversion via-accent to-primary rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Bridge the Gap?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how strategic thinking meets technical execution in your next project.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact"
                className="bg-white text-conversion px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-[1.05] flex items-center"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Schedule a Meeting
              </a>
              <a 
                href="/resume"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-conversion transition-all duration-300 flex items-center"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;