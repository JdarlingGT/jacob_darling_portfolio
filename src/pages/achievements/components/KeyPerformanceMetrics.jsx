import React, { useEffect, useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import { motion } from 'framer-motion';

const KeyPerformanceMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const metrics = [
    { 
      value: 70, 
      suffix: "%", 
      title: "Support Ticket Reduction", 
      context: "at Graston Technique®",
      icon: "Headphones",
      color: "from-red-500 to-orange-500"
    },
    { 
      value: 40, 
      suffix: "%", 
      title: "E-commerce Conversion Increase", 
      context: "at Graston Technique®",
      icon: "ShoppingCart",
      color: "from-purple-500 to-indigo-600"
    },
    { 
      value: 50, 
      suffix: "%", 
      title: "Annual Revenue Growth", 
      context: "at Riley Bennett Egloff",
      icon: "DollarSign",
      color: "from-green-500 to-emerald-600"
    },
    { 
      value: 45, 
      suffix: "%", 
      title: "Patient Visit Growth", 
      context: "at Pike Medical Consultants",
      icon: "Users",
      color: "from-blue-500 to-cyan-600"
    },
    { 
      value: 35, 
      suffix: "%", 
      title: "Qualified Inquiries Increase", 
      context: "at Riley Bennett Egloff",
      icon: "Search",
      color: "from-amber-500 to-yellow-600"
    },
    { 
      value: 400, 
      suffix: "+", 
      title: "Marketing Automations Built", 
      context: "at Graston Technique®",
      icon: "Settings",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  useEffect(() => {
    const observerCallback = (entries) => {
      entries?.forEach((entry) => {
        if (entry?.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate each metric value
          metrics?.forEach((metric, index) => {
            let currentValue = 0;
            const increment = metric?.value / 60; // 60 frames for smooth animation
            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= metric?.value) {
                currentValue = metric?.value;
                clearInterval(timer);
              }
              setAnimatedValues(prev => ({
                ...prev,
                [index]: Math.floor(currentValue)
              }));
            }, 50 + (index * 10)); // Stagger the animations
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3
    });

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => {
      if (sectionRef?.current) {
        observer?.unobserve(sectionRef?.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Key Performance Metrics
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Quantified impact across strategic marketing initiatives and technical implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {metrics?.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:scale-[1.05] hover:rotate-1 relative overflow-hidden">
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${metric?.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <Icon name={metric?.icon} size={32} className="text-white" />
                  </div>
                </div>
                
                {/* Animated Number */}
                <div className="relative mb-4">
                  <div className="text-5xl lg:text-6xl font-bold text-text-primary mb-2 font-mono">
                    {animatedValues?.[index] !== undefined ? animatedValues?.[index] : 0}
                    <span className="text-3xl">{metric?.suffix}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-text-primary mb-4 leading-tight">
                    {metric?.title}
                  </h3>
                </div>
                
                {/* Context */}
                <div className="relative">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {metric?.context}
                  </p>
                </div>
                
                {/* Hover effect indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPerformanceMetrics;