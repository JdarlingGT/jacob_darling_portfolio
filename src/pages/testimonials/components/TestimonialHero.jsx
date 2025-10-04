import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialHero = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const featuredTestimonials = [
    {
      name: "Sarah Martinez",
      role: "Chief Technology Officer",
      company: "HealthTech Solutions",
      relationship: "client",
      content: "Jacob\'s work on our healthcare platform transformation was exceptional. His strategic approach to marketing automation combined with deep technical expertise resulted in a 70% reduction in support tickets and measurable revenue growth.",
      image: "/assets/images/no_image.png",
      linkedinUrl: "https://linkedin.com/in/example"
    },
    {
      name: "Michael Chen",
      role: "Vice President of Operations", 
      company: "Digital Growth Partners",
      relationship: "colleague",
      content: "Working alongside Jacob on multiple digital transformation projects showed me his unique ability to bridge marketing strategy with technical implementation. His \'Guardian\' AI system is revolutionary.",
      image: "/assets/images/no_image.png",
      linkedinUrl: "https://linkedin.com/in/example"
    },
    {
      name: "Dr. Amanda Thompson",
      role: "Practice Administrator",
      company: "Indianapolis Medical Group",
      relationship: "client",
      content: "Jacob engineered our entire patient management system, integrating multiple platforms seamlessly. The results speak for themselves - 45% growth in patient visits and streamlined operations.",
      image: "/assets/images/no_image.png",
      linkedinUrl: "https://linkedin.com/in/example"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === featuredTestimonials?.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [featuredTestimonials?.length]);

  const getRelationshipBadge = (relationship) => {
    const badges = {
      client: { color: 'bg-conversion', text: 'Client' },
      colleague: { color: 'bg-trust-builder', text: 'Colleague' },
      supervisor: { color: 'bg-primary', text: 'Supervisor' }
    };
    
    return badges?.[relationship] || badges?.client;
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-white rounded-lg rotate-12"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Client <span className="text-conversion">Testimonials</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Authentic feedback from clients, colleagues, and industry professionals 
            who've experienced measurable results from our collaborations
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
          <div className="relative min-h-[300px] flex items-center">
            {featuredTestimonials?.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentTestimonial 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform translate-x-full'
                }`}
              >
                <div className="text-center">
                  <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8">
                    "{testimonial?.content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <img 
                      src={testimonial?.image} 
                      alt={testimonial?.name}
                      className="w-16 h-16 rounded-full object-cover border-3 border-white/30"
                    />
                    <div className="text-left">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-bold text-white">
                          {testimonial?.name}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                          getRelationshipBadge(testimonial?.relationship)?.color
                        }`}>
                          {getRelationshipBadge(testimonial?.relationship)?.text}
                        </span>
                      </div>
                      <p className="text-blue-200">
                        {testimonial?.role} at {testimonial?.company}
                      </p>
                      {testimonial?.linkedinUrl && (
                        <a 
                          href={testimonial?.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 mt-2 text-sm text-conversion hover:text-white transition-colors"
                        >
                          <Icon name="ExternalLink" size={14} />
                          <span>View on LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {featuredTestimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-conversion scale-125' :'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-conversion mb-2">95%</div>
            <div className="text-blue-200">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-conversion mb-2">50+</div>
            <div className="text-blue-200">LinkedIn Recommendations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-conversion mb-2">10+</div>
            <div className="text-blue-200">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-conversion mb-2">100%</div>
            <div className="text-blue-200">Project Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHero;