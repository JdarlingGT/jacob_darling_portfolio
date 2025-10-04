import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PersonalGallerySection from './components/PersonalGallerySection';
import PhilosophySection from './components/PhilosophySection';
import TimelineSection from './components/TimelineSection';
import SkillsProgressionSection from './components/SkillsProgressionSection';
import InteractiveMarTechStackSection from './components/InteractiveMarTechStackSection';
import CommunityLeadershipSection from './components/CommunityLeadershipSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

const AboutPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About Jacob Darling - Marketing Director & System Architect | Portfolio';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Learn about Jacob Darling, a marketing leader who bridges creative vision with technical execution. Discover his professional journey, strategic partnerships, and community leadership impact.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Professional Photo and Story */}
      <HeroSection />
      
      {/* Personal Gallery Section - NEW */}
      <PersonalGallerySection />
      
      {/* Philosophy Section */}
      <PhilosophySection />
      
      {/* Interactive MarTech Stack - NEW */}
      <InteractiveMarTechStackSection />
      
      {/* Professional Journey & Strategic Partnerships Timeline */}
      <TimelineSection />
      
      {/* Skills Progression */}
      <SkillsProgressionSection />
      
      {/* Community Leadership & Impact */}
      <CommunityLeadershipSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Call to Action */}
      <CTASection />
    </div>
  );
};

export default AboutPage;