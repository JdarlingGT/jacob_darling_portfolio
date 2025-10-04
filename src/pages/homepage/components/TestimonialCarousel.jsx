import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "VP of Marketing",
      company: "TechCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `Jacob transformed our entire marketing technology stack. His ability to understand both the strategic marketing objectives and the technical implementation details is unparalleled.\n\nThe automation platform he built increased our conversion rates by 340% while reducing our customer acquisition costs by 60%. He's not just a developer - he's a strategic partner who thinks like a marketer.`,
      rating: 5,
      project: "Marketing Automation Platform",
      linkedinUrl: "https://linkedin.com/in/sarahchen",
      metrics: ["340% conversion increase", "60% CAC reduction", "50K+ users served"]
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "CTO",
      company: "RetailMax Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `Working with Jacob was a game-changer for our data analytics capabilities. He built a customer journey analytics platform that uses machine learning to predict customer behavior with 250% better accuracy.\n\nWhat impressed me most was his ability to translate complex technical concepts into business value. He's equally comfortable in the boardroom and the server room.`,
      rating: 5,
      project: "AI-Powered Analytics Platform",
      linkedinUrl: "https://linkedin.com/in/michaelrodriguez",
      metrics: ["250% prediction accuracy", "$2.3M revenue impact", "15+ data sources integrated"]
    },
    {
      id: 3,
      name: "Emily Watson",
      position: "Head of Digital Strategy",
      company: "GlobalBrand Co",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: `Jacob architected our global omnichannel marketing infrastructure that now serves 25+ countries. The microservices architecture he designed increased our campaign deployment speed by 500%.\n\nHis leadership during the project was exceptional. He managed cross-functional teams across multiple time zones and delivered everything on time and under budget. A true professional.`,
      rating: 5,
      project: "Global Marketing Infrastructure",
      linkedinUrl: "https://linkedin.com/in/emilywatson",
      metrics: ["500% deployment speed", "99.9% uptime", "25+ countries served"]
    },
    {
      id: 4,
      name: "David Park",
      position: "Director of Operations",
      company: "StartupVentures",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: `Jacob helped us scale from a startup to enterprise-level operations. He built our entire marketing technology foundation from scratch, including lead scoring, nurturing workflows, and analytics dashboards.\n\nHis mentoring of our junior developers was invaluable. He doesn't just deliver solutions - he builds teams and capabilities that last long after the project is complete.`,
      rating: 5,
      project: "Startup to Enterprise Scaling",
      linkedinUrl: "https://linkedin.com/in/davidpark",
      metrics: ["10x lead quality improvement", "5 developers mentored", "Zero downtime migration"]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  const handleLinkedInClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-cta-warm fill-current" : "text-muted"}
      />
    ));
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-trust-builder/10 rounded-xl flex items-center justify-center mr-4">
              <Icon name="MessageSquare" size={24} className="text-trust-builder" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Client Testimonials
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real feedback from marketing leaders, CTOs, and strategic partners who have experienced 
            the impact of bridging marketing vision with technical execution.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 lg:p-12 brand-border brand-shadow">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden brand-border mx-auto lg:mx-0">
                    <Image
                      src={testimonials?.[currentTestimonial]?.avatar}
                      alt={`${testimonials?.[currentTestimonial]?.name} profile picture`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => handleLinkedInClick(testimonials?.[currentTestimonial]?.linkedinUrl)}
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-conversion rounded-full flex items-center justify-center hover:bg-conversion/90 smooth-transition"
                    title="View LinkedIn Profile"
                  >
                    <Icon name="Linkedin" size={16} className="text-conversion-foreground" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {testimonials?.[currentTestimonial]?.name}
                </h3>
                <p className="text-conversion font-medium mb-1">
                  {testimonials?.[currentTestimonial]?.position}
                </p>
                <p className="text-text-secondary mb-4">
                  {testimonials?.[currentTestimonial]?.company}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                  {renderStars(testimonials?.[currentTestimonial]?.rating)}
                </div>

                {/* Project Tag */}
                <div className="inline-block px-3 py-1 bg-muted rounded-full text-sm text-text-secondary">
                  {testimonials?.[currentTestimonial]?.project}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Icon name="Quote" size={48} className="text-conversion/20 absolute -top-4 -left-4" />
                  <blockquote className="text-lg text-text-primary leading-relaxed whitespace-pre-line relative z-10">
                    {testimonials?.[currentTestimonial]?.content}
                  </blockquote>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  {testimonials?.[currentTestimonial]?.metrics?.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-sm font-medium text-conversion">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 bg-muted hover:bg-secondary/20 rounded-full flex items-center justify-center smooth-transition"
                title="Previous testimonial"
              >
                <Icon name="ChevronLeft" size={20} className="text-text-primary" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 bg-muted hover:bg-secondary/20 rounded-full flex items-center justify-center smooth-transition"
                title="Next testimonial"
              >
                <Icon name="ChevronRight" size={20} className="text-text-primary" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full smooth-transition ${
                    index === currentTestimonial ? 'bg-conversion' : 'bg-muted hover:bg-secondary/40'
                  }`}
                  title={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium smooth-transition ${
                isAutoPlaying 
                  ? 'bg-conversion text-conversion-foreground' 
                  : 'bg-muted text-text-secondary hover:bg-secondary/20'
              }`}
              title={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
              <span className="hidden sm:inline">
                {isAutoPlaying ? 'Pause' : 'Play'}
              </span>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-card rounded-xl brand-border">
            <div className="text-2xl font-bold text-trust-builder mb-2">98%</div>
            <div className="text-sm text-text-secondary">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl brand-border">
            <div className="text-2xl font-bold text-conversion mb-2">150+</div>
            <div className="text-sm text-text-secondary">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl brand-border">
            <div className="text-2xl font-bold text-cta-warm mb-2">5.0</div>
            <div className="text-sm text-text-secondary">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl brand-border">
            <div className="text-2xl font-bold text-secondary mb-2">25+</div>
            <div className="text-sm text-text-secondary">Enterprise Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;