import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.02)_49%,rgba(255,255,255,0.02)_51%,transparent_52%)] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-6">
              <Icon name="Sparkles" size={16} className="text-conversion" />
              <span className="text-sm font-medium text-text-secondary">The Architect in the Marketing Room</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Where Marketing Vision 
              <span className="block text-conversion">Meets Technical Reality</span>
            </h1>
            
            <div className="prose prose-lg max-w-2xl mb-8">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Great marketing ideas often break at the handoff—the critical point where a creative vision meets the complex reality of technical execution. My entire career has been built to solve this problem.
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                I'm <span className="font-semibold text-text-primary">Jacob Darling</span>, a marketing leader who operates as both a brand strategist and a systems architect. On one side, I direct bold rebrands and craft compelling narratives. On the other, I personally engineer the underlying technical infrastructure—the CRM logic, marketing automation workflows, and full-stack web architecture—that makes those campaigns scalable, measurable, and sustainable.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                With a deep proficiency in data analysis and a validated expertise in teamwork, my hybrid approach allows me to create integrated solutions that don't just look good, but function brilliantly. Whether I'm migrating a company from Mailchimp to a fully tag-based FluentCRM system with 400+ automations or launching an OpenAI-powered chatbot to support user questions, I thrive on turning abstract goals into powerful, revenue-focused marketing engines.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground conversion-glow"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
              >
                Schedule a Call
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                iconSize={20}
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Professional Photo Gallery */}
          <div className="relative">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Animated Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-conversion/20 to-trust-builder/20 animate-pulse" />
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-r from-trust-builder/10 to-conversion/10 animate-pulse delay-75" />
              
              {/* Main Professional Photo */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden brand-border bg-surface shadow-2xl">
                <Image
                  src="/assets/images/Gemini_Generated_Image_klonsaklonsaklon-1759116279741.png"
                  alt="Jacob Darling - Marketing Director & System Architect"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Creative Photo - Overlaid */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden brand-border bg-surface shadow-xl z-10">
                <Image
                  src="/assets/images/INterview-22-1759117511113.jpg"
                  alt="Jacob Darling - Creative Professional Portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Photo Labels */}
              <div className="absolute -bottom-16 left-4 bg-surface/90 backdrop-blur-sm rounded-lg px-3 py-1 border border-border">
                <span className="text-xs font-medium text-text-secondary">Strategy Mode</span>
              </div>
              <div className="absolute -bottom-4 -right-20 bg-surface/90 backdrop-blur-sm rounded-lg px-3 py-1 border border-border">
                <span className="text-xs font-medium text-text-secondary">Creative Mode</span>
              </div>

              {/* Floating Technical Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-conversion rounded-full flex items-center justify-center brand-shadow animate-bounce">
                <Icon name="Database" size={20} className="text-conversion-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-trust-builder rounded-full flex items-center justify-center brand-shadow animate-bounce delay-150">
                <Icon name="BarChart3" size={20} className="text-trust-builder-foreground" />
              </div>
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-cta-warm rounded-full flex items-center justify-center brand-shadow animate-bounce delay-300">
                <Icon name="Cog" size={16} className="text-cta-warm-foreground" />
              </div>
              <div className="absolute top-1/4 -right-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center brand-shadow animate-bounce delay-450">
                <Icon name="Zap" size={16} className="text-secondary-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Navigation */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-surface/80 backdrop-blur-sm rounded-2xl p-4 border border-border">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-conversion animate-pulse" />
              <span className="text-sm font-medium text-text-primary">Professional</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-trust-builder animate-pulse delay-150" />
              <span className="text-sm font-medium text-text-primary">Creative</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-cta-warm animate-pulse delay-300" />
              <span className="text-sm font-medium text-text-primary">Technical</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-text-secondary font-medium">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} className="text-conversion" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;