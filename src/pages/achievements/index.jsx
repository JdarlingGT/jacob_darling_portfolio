import React, { useEffect, useState } from 'react';
import Header from '../../components/ui/Header';
import KeyPerformanceMetrics from './components/KeyPerformanceMetrics';
import CommunityLeadershipSection from './components/CommunityLeadershipSection';

const AchievementsPage = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'Achievements - Jacob Darling | Key Performance Metrics & Awards';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Explore Jacob Darling\'s key performance metrics including 70% support ticket reduction, 50% revenue increase, and community leadership achievements in marketing and technology.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-conversion/10 text-conversion rounded-full text-sm font-medium mb-6">
              <span>Performance & Recognition</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
              Achievements
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Measurable results and community impact that demonstrate the power of combining strategic marketing vision with technical execution excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Key Performance Metrics Section */}
      <KeyPerformanceMetrics />

      {/* Awards & Community Leadership Section */}
      <CommunityLeadershipSection />
    </div>
  );
};

export default AchievementsPage;