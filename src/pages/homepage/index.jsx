import React from 'react';
import Header from '../../components/ui/Header';
import ScrollProgress from '../../components/ui/ScrollProgress';
import HeroSection from './components/HeroSection';
import CredibilityBar from './components/CredibilityBar';
import PerformanceDashboard from './components/PerformanceDashboard';
import ApproachSection from './components/ApproachSection';
import FeaturedCaseStudies from './components/FeaturedCaseStudies';
import ToolboxSection from './components/ToolboxSection';
import GitHubWidget from './components/GitHubWidget';
import BlogPreview from './components/BlogPreview';
import RecommendationsSection from './components/RecommendationsSection';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      {/* 1. The Hero: The 5-Second "Wow" & Value Proposition */}
      <HeroSection />
      
      {/* 2. The Credibility Bar: Immediate Proof & Trust */}
      <CredibilityBar />
      
      {/* 3. Performance Dashboard: Live Metrics */}
      <PerformanceDashboard />
      
      {/* 4. My Approach: The "How" and "Why" Behind Your Work */}
      <ApproachSection />
      
      {/* 5. Featured Case Studies: The Funnel to Your Best Work */}
      <FeaturedCaseStudies />
      
      {/* 6. The Toolbox: A Glimpse of Your Tech Stack */}
      <ToolboxSection />
      
      {/* 7. GitHub Activity: Live Development Activity */}
      <GitHubWidget />
      
      {/* 8. Blog Preview: Thought Leadership */}
      <BlogPreview />
      
      {/* 9. Recommendations: What My Colleagues Say */}
      <RecommendationsSection />
      
      {/* Enhanced Footer */}
      <footer className="bg-surface border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-conversion to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl font-mono">JD</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">Jacob Darling</h3>
                  <p className="text-text-secondary">Marketing Strategist & Systems Architect</p>
                </div>
              </div>
              <p className="text-text-secondary mb-8 max-w-md leading-relaxed">
                I design and build integrated marketing ecosystems. By blending brand strategy 
                with marketing automation and CRM architecture, I create scalable systems that 
                drive lead generation and measurable revenue growth.
              </p>
              
              {/* Enhanced Social Links */}
              <div className="flex items-center space-x-4 mb-8">
                {[
                  {
                    name: 'LinkedIn',
                    href: 'https://linkedin.com/in/jacobdarling',
                    icon: (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    ),
                    color: 'hover:bg-blue-600'
                  },
                  {
                    name: 'GitHub',
                    href: 'https://github.com/jacobdarling',
                    icon: (
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    ),
                    color: 'hover:bg-gray-600'
                  },
                  {
                    name: 'Email',
                    href: 'mailto:jacob@jacobdarling.com',
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    ),
                    color: 'hover:bg-green-600',
                    stroke: true
                  },
                  {
                    name: 'Twitter',
                    href: 'https://twitter.com/jacobdarling',
                    icon: (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    ),
                    color: 'hover:bg-blue-500'
                  }
                ]?.map((social) => (
                  <a 
                    key={social?.name}
                    href={social?.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-muted text-text-secondary rounded-xl flex items-center justify-center smooth-transition ${social?.color} hover:text-white hover:shadow-lg hover:scale-105`}
                  >
                    <span className="sr-only">{social?.name}</span>
                    <svg className="w-5 h-5" fill={social?.stroke ? "none" : "currentColor"} stroke={social?.stroke ? "currentColor" : "none"} viewBox="0 0 24 24">
                      {social?.icon}
                    </svg>
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-conversion/5 to-secondary/5 rounded-xl p-6 border border-conversion/20">
                <h4 className="font-semibold text-text-primary mb-2">Stay Updated</h4>
                <p className="text-text-secondary text-sm mb-4">Get insights on marketing strategy and technical implementation</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-3 py-2 bg-surface border border-border rounded-lg text-sm focus:ring-2 focus:ring-conversion/20 focus:border-conversion smooth-transition"
                  />
                  <button className="px-4 py-2 bg-conversion text-conversion-foreground rounded-lg text-sm font-medium hover:bg-conversion/90 smooth-transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-text-primary mb-6">Navigation</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About Me', path: '/about' },
                  { name: 'Case Studies', path: '/case-studies' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Toolbox', path: '/toolbox' },
                  { name: 'Experience', path: '/experience' },
                  { name: 'Blog', path: '/blog' }
                ]?.map((link) => (
                  <li key={link?.name}>
                    <a 
                      href={link?.path}
                      className="text-text-secondary hover:text-conversion smooth-transition flex items-center group"
                    >
                      <span>{link?.name}</span>
                      <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 smooth-transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Resources */}
            <div>
              <h4 className="font-semibold text-text-primary mb-6">Get in Touch</h4>
              <ul className="space-y-3 mb-8">
                <li>
                  <a 
                    href="/contact"
                    className="text-text-secondary hover:text-conversion smooth-transition flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 5h6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                    </svg>
                    Schedule a Call
                  </a>
                </li>
                <li>
                  <a 
                    href="/resume"
                    className="text-text-secondary hover:text-conversion smooth-transition flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:jacob@jacobdarling.com"
                    className="text-text-secondary hover:text-conversion smooth-transition flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Direct
                  </a>
                </li>
              </ul>

              {/* Quick Stats */}
              <div className="bg-surface rounded-xl p-4 border border-border">
                <h5 className="font-medium text-text-primary mb-3 text-sm">Quick Stats</h5>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="text-lg font-bold text-conversion">400+</div>
                    <div className="text-xs text-text-secondary">Automations</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-secondary">99.97%</div>
                    <div className="text-xs text-text-secondary">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-16 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <p className="text-text-secondary text-sm">
                  © {new Date()?.getFullYear()} Jacob Darling. All rights reserved.
                </p>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" title="Site Status: Online"></div>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="/privacy" className="text-text-secondary hover:text-conversion text-sm smooth-transition">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-text-secondary hover:text-conversion text-sm smooth-transition">
                  Terms of Service
                </a>
                <span className="text-text-secondary text-sm">
                  Built with React & Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;