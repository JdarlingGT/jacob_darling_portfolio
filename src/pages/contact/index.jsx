import React, { useRef } from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import SchedulingWidget from './components/SchedulingWidget';
import ContactForm from './components/ContactForm';
import LocationInfo from './components/LocationInfo';
import DownloadableCV from './components/DownloadableCV';

const ContactPage = () => {
  const scheduleRef = useRef(null);
  const contactFormRef = useRef(null);

  const scrollToSchedule = () => {
    scheduleRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContactForm = () => {
    contactFormRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <ContactHero 
        onScheduleClick={scrollToSchedule}
        onContactFormClick={scrollToContactForm}
      />
      {/* Contact Methods */}
      <ContactMethods />
      {/* Downloadable CV Section */}
      <DownloadableCV />
      {/* Scheduling Widget */}
      <div ref={scheduleRef}>
        <SchedulingWidget />
      </div>
      {/* Contact Form */}
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
      {/* Location Information */}
      <LocationInfo />
      {/* Footer */}
      <footer className="bg-surface border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-conversion rounded-lg flex items-center justify-center">
                <span className="text-conversion-foreground font-bold text-lg font-mono">JD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">Jacob Darling</h3>
                <p className="text-sm text-text-secondary">Marketing Technology Leader</p>
              </div>
            </div>
            
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Bridging marketing vision with technical reality. Building systems that scale with strategy.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:hoosierdarling@gmail.com" className="text-text-secondary hover:text-conversion smooth-transition">
                Email
              </a>
              <a href="https://linkedin.com/in/jacobdarling" className="text-text-secondary hover:text-conversion smooth-transition">
                LinkedIn
              </a>
              <a href="https://github.com/jacobdarling" className="text-text-secondary hover:text-conversion smooth-transition">
                GitHub
              </a>
              <a href="tel:+13174438091" className="text-text-secondary hover:text-conversion smooth-transition">
                Phone
              </a>
            </div>
            
            <div className="border-t border-border pt-8">
              <p className="text-sm text-text-secondary">
                © {new Date()?.getFullYear()} Jacob Darling. All rights reserved. | 
                <span className="ml-2">Built with React & Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;