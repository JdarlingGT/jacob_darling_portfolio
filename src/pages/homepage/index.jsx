import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CredibilityBar from './components/CredibilityBar';
import ApproachSection from './components/ApproachSection';
import FeaturedCaseStudies from './components/FeaturedCaseStudies';
import ToolboxSection from './components/ToolboxSection';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* 1. The Hero: The 5-Second "Wow" & Value Proposition */}
      <HeroSection />
      
      {/* 2. The Credibility Bar: Immediate Proof & Trust */}
      <CredibilityBar />
      
      {/* 3. My Approach: The "How" and "Why" Behind Your Work */}
      <ApproachSection />
      
      {/* 4. Featured Case Studies: The Funnel to Your Best Work */}
      <FeaturedCaseStudies />
      
      {/* 5. The Toolbox: A Glimpse of Your Tech Stack */}
      <ToolboxSection />
      
      {/* Footer */}
      <footer className="bg-surface border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-conversion rounded-lg flex items-center justify-center">
                  <span className="text-conversion-foreground font-bold text-lg font-mono">JD</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Jacob Darling</h3>
                  <p className="text-sm text-text-secondary">Marketing Strategist & Systems Architect</p>
                </div>
              </div>
              <p className="text-text-secondary mb-6 max-w-md">
                I design and build integrated marketing ecosystems. By blending brand strategy 
                with marketing automation and CRM architecture, I create scalable systems that 
                drive lead generation and measurable revenue growth.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://linkedin.com/in/jacobdarling" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted hover:bg-conversion rounded-lg flex items-center justify-center smooth-transition"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5 text-text-primary hover:text-conversion-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/jacobdarling" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted hover:bg-conversion rounded-lg flex items-center justify-center smooth-transition"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5 text-text-primary hover:text-conversion-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:jacob@jacobdarling.com"
                  className="w-10 h-10 bg-muted hover:bg-conversion rounded-lg flex items-center justify-center smooth-transition"
                >
                  <span className="sr-only">Email</span>
                  <svg className="w-5 h-5 text-text-primary hover:text-conversion-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Case Studies', path: '/case-studies' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Toolbox', path: '/toolbox' }
                ]?.map((link) => (
                  <li key={link?.name}>
                    <a 
                      href={link?.path}
                      className="text-text-secondary hover:text-conversion smooth-transition"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Get in Touch</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/contact"
                    className="text-text-secondary hover:text-conversion smooth-transition"
                  >
                    Schedule a Call
                  </a>
                </li>
                <li>
                  <a 
                    href="/resume"
                    className="text-text-secondary hover:text-conversion smooth-transition"
                  >
                    Download CV
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:jacob@jacobdarling.com"
                    className="text-text-secondary hover:text-conversion smooth-transition"
                  >
                    Email Direct
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-text-secondary text-sm">
              © {new Date()?.getFullYear()} Jacob Darling. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <a href="/privacy" className="text-text-secondary hover:text-conversion text-sm smooth-transition">
                Privacy Policy
              </a>
              <a href="/terms" className="text-text-secondary hover:text-conversion text-sm smooth-transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;