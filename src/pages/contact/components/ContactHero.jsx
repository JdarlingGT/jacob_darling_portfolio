import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onScheduleClick, onContactFormClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-background via-surface to-background py-20 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-conversion/10 text-conversion px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>Ready to Connect</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
            Let's Build Something
            <span className="block text-conversion">Extraordinary Together</span>
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Whether you're looking to scale your marketing technology stack, optimize conversion funnels, 
            or build systems that bridge creative vision with technical execution, I'm here to help turn 
            your ambitious ideas into measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              onClick={onScheduleClick}
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground conversion-glow"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
            >
              Schedule Strategy Call
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={onContactFormClick}
              iconName="Mail"
              iconPosition="left"
              iconSize={20}
            >
              Send Message
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-conversion/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Clock" size={24} className="text-conversion" />
              </div>
              <h3 className="font-semibold text-text-primary mb-1">Quick Response</h3>
              <p className="text-sm text-text-secondary">Usually within 2-4 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-trust-builder/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Shield" size={24} className="text-trust-builder" />
              </div>
              <h3 className="font-semibold text-text-primary mb-1">Confidential</h3>
              <p className="text-sm text-text-secondary">Your ideas are safe with me</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-cta-warm/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Target" size={24} className="text-cta-warm" />
              </div>
              <h3 className="font-semibold text-text-primary mb-1">Results-Focused</h3>
              <p className="text-sm text-text-secondary">Strategic solutions that scale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;