import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "VP of Marketing",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `Jacob transformed our marketing operations from chaos to precision. His ability to bridge the gap between our creative vision and technical execution is unmatched. The attribution model he built increased our marketing ROI visibility by 300%.`,
      rating: 5,
      relationship: "Direct Manager",
      project: "Marketing Attribution Platform",
      linkedinUrl: "#"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "CTO",
      company: "GrowthLab Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `Working with Jacob was a game-changer for our technical marketing stack. He doesn't just understand marketing—he architects solutions that scale. His automated lead scoring system reduced our sales cycle by 30% while improving lead quality.`,
      rating: 5,
      relationship: "Cross-functional Partner",
      project: "Lead Scoring Automation",
      linkedinUrl: "#"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Marketing Operations Manager",
      company: "InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: `Jacob's mentorship was invaluable to my career growth. He taught me to think systematically about marketing technology and always emphasized the importance of measurable results. His training programs are comprehensive and practical.`,
      rating: 5,
      relationship: "Team Member",
      project: "Marketing Ops Training",
      linkedinUrl: "#"
    },
    {
      id: 4,
      name: "David Park",
      role: "Head of Sales",
      company: "StartupHub",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: `The marketing-sales alignment Jacob established was phenomenal. His data-driven approach to lead qualification and nurturing resulted in a 45% increase in our conversion rates. He truly understands the entire customer journey.`,
      rating: 5,
      relationship: "Cross-functional Partner",
      project: "Sales-Marketing Alignment",
      linkedinUrl: "#"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "CEO",
      company: "Digital Dynamics",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      content: `Jacob delivered exceptional results on our marketing automation project. His strategic thinking combined with hands-on technical skills made him an invaluable consultant. The ROI on his recommendations exceeded our expectations by 200%.`,
      rating: 5,
      relationship: "Client",
      project: "Marketing Automation Consulting",
      linkedinUrl: "#"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  const currentTestimonialData = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-6">
            <Icon name="MessageSquare" size={16} className="text-conversion" />
            <span className="text-sm font-medium text-text-secondary">Social Proof</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            What Colleagues &
            <span className="block text-conversion">Clients Say</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Testimonials from marketing leaders, technical teams, and clients who've experienced the impact of strategic marketing technology implementation.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 brand-shadow">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-conversion/10 rounded-full flex items-center justify-center">
                <Icon name="Quote" size={32} className="text-conversion" />
              </div>
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-xl lg:text-2xl text-text-primary text-center leading-relaxed mb-8 font-medium">
              "{currentTestimonialData?.content}"
            </blockquote>

            {/* Rating */}
            <div className="flex justify-center mb-8">
              {[...Array(currentTestimonialData?.rating)]?.map((_, index) => (
                <Icon key={index} name="Star" size={20} className="text-cta-warm fill-current" />
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden brand-border">
                <Image
                  src={currentTestimonialData?.avatar}
                  alt={`${currentTestimonialData?.name} profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-text-primary">
                  {currentTestimonialData?.name}
                </h4>
                <p className="text-conversion font-medium">
                  {currentTestimonialData?.role}
                </p>
                <p className="text-text-secondary text-sm">
                  {currentTestimonialData?.company}
                </p>
              </div>
            </div>

            {/* Project & Relationship Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 pt-6 border-t border-border">
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Briefcase" size={16} />
                <span>Project: {currentTestimonialData?.project}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Users" size={16} />
                <span>Relationship: {currentTestimonialData?.relationship}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="flex items-center space-x-2 px-4 py-2 bg-muted/50 hover:bg-muted rounded-lg text-text-secondary hover:text-text-primary smooth-transition"
            >
              <Icon name="ChevronLeft" size={20} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full smooth-transition ${
                    index === currentTestimonial ? 'bg-conversion' : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="flex items-center space-x-2 px-4 py-2 bg-muted/50 hover:bg-muted rounded-lg text-text-secondary hover:text-text-primary smooth-transition"
            >
              <span className="hidden sm:inline">Next</span>
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* LinkedIn Integration CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 bg-card border border-border rounded-xl px-6 py-4">
            <Icon name="Linkedin" size={24} className="text-conversion" />
            <div className="text-left">
              <p className="text-text-primary font-medium">View More Recommendations</p>
              <p className="text-text-secondary text-sm">50+ endorsements on LinkedIn</p>
            </div>
            <Icon name="ExternalLink" size={16} className="text-text-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;