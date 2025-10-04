import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import TestimonialHero from './components/TestimonialHero';
import TestimonialGrid from './components/TestimonialGrid';
import TestimonialFilters from './components/TestimonialFilters';
import VideoTestimonials from './components/VideoTestimonials';
import TestimonialStats from './components/TestimonialStats';
import TestimonialForm from './components/TestimonialForm';

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Client Testimonials & Professional Recommendations | Jacob Darling</title>
        <meta name="description" content="Read testimonials and recommendations from clients, colleagues, and industry professionals who have worked with Jacob Darling on marketing automation and digital transformation projects." />
        <meta name="keywords" content="testimonials, recommendations, client feedback, professional endorsements, marketing automation reviews" />
      </Helmet>

      <Header />

      <main className="pt-20">
        <TestimonialHero />
        
        <TestimonialStats />
        
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <TestimonialFilters 
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            
            <TestimonialGrid 
              activeFilter={activeFilter}
              searchTerm={searchTerm}
            />
          </div>
        </section>

        <VideoTestimonials />
        
        <TestimonialForm />
      </main>
    </div>
  );
};

export default Testimonials;