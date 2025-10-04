import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Marketing Strategist.',
    'Systems Architect.',
    'Digital Problem-Solver.'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles?.[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current?.substring(0, currentText?.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current?.substring(0, currentText?.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles?.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, roles]);

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-surface">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
          Jacob Darling
        </h1>

        {/* Animated Sub-headline */}
        <div className="h-20 mb-8 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-conversion">
            {currentText}
            <span className="animate-pulse ml-1">|</span>
          </h2>
        </div>

        {/* Core Value Statement */}
        <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
          I design and build integrated marketing ecosystems. By blending brand strategy 
          with marketing automation and CRM architecture, I create scalable systems that 
          drive lead generation and measurable revenue growth.
        </p>

        {/* Primary CTA Button */}
        <div className="mb-16">
          <Button
            variant="default"
            size="lg"
            onClick={() => handleNavigation('/projects')}
            className="bg-conversion hover:bg-conversion/90 text-conversion-foreground conversion-glow text-lg px-8 py-4"
          >
            View My Work
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-text-secondary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-conversion rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;