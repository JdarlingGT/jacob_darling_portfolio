import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const handleScheduleCall = () => {
    window.location.href = '/contact';
  };

  const handleDownloadResume = () => {
    window.location.href = '/resume';
  };

  const handleViewProjects = () => {
    window.location.href = '/projects';
  };

  const handleViewCaseStudies = () => {
    window.location.href = '/case-studies';
  };

  const ctaOptions = [
    {
      title: "Ready to Collaborate?",
      description: "Let\'s discuss how I can help bridge your marketing vision with technical reality.",
      primaryAction: {
        text: "Schedule a Call",
        icon: "Calendar",
        onClick: handleScheduleCall,
        variant: "default",
        className: "bg-conversion hover:bg-conversion/90 text-conversion-foreground conversion-glow"
      },
      secondaryAction: {
        text: "Download Resume",
        icon: "Download",
        onClick: handleDownloadResume,
        variant: "outline"
      }
    },
    {
      title: "Explore My Work",
      description: "Dive deeper into my technical projects and marketing automation case studies.",
      primaryAction: {
        text: "View Projects",
        icon: "Code",
        onClick: handleViewProjects,
        variant: "outline"
      },
      secondaryAction: {
        text: "Case Studies",
        icon: "FileText",
        onClick: handleViewCaseStudies,
        variant: "outline"
      }
    }
  ];

  const quickStats = [
    { label: "Years Experience", value: "8+", icon: "Clock" },
    { label: "Projects Delivered", value: "150+", icon: "Briefcase" },
    { label: "Team Members Trained", value: "200+", icon: "Users" },
    { label: "Client Satisfaction", value: "95%", icon: "Star" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-surface via-background to-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-6">
            <Icon name="Rocket" size={16} className="text-conversion" />
            <span className="text-sm font-medium text-text-secondary">Let's Build Together</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Ready to Transform Your
            <span className="block text-conversion">Marketing Technology?</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
            Whether you need strategic guidance, technical implementation, or team leadership, I'm here to help you build marketing systems that scale with your vision.
          </p>
        </div>

        {/* CTA Options Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {ctaOptions?.map((option, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 brand-shadow hover:scale-105 smooth-transition"
            >
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {option?.title}
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                {option?.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant={option?.primaryAction?.variant}
                  size="lg"
                  onClick={option?.primaryAction?.onClick}
                  className={option?.primaryAction?.className}
                  iconName={option?.primaryAction?.icon}
                  iconPosition="left"
                  iconSize={20}
                >
                  {option?.primaryAction?.text}
                </Button>
                <Button
                  variant={option?.secondaryAction?.variant}
                  size="lg"
                  onClick={option?.secondaryAction?.onClick}
                  iconName={option?.secondaryAction?.icon}
                  iconPosition="left"
                  iconSize={20}
                >
                  {option?.secondaryAction?.text}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickStats?.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card border border-border rounded-xl hover:brand-shadow smooth-transition"
            >
              <div className="w-12 h-12 bg-conversion/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={20} className="text-conversion" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-text-primary mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-text-secondary">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Methods */}
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-text-primary mb-6">
            Multiple Ways to Connect
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3 p-4 bg-muted/30 rounded-lg">
              <Icon name="Mail" size={20} className="text-conversion" />
              <div className="text-left">
                <div className="text-sm font-medium text-text-primary">Email</div>
                <div className="text-xs text-text-secondary">jacob@example.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-muted/30 rounded-lg">
              <Icon name="Linkedin" size={20} className="text-conversion" />
              <div className="text-left">
                <div className="text-sm font-medium text-text-primary">LinkedIn</div>
                <div className="text-xs text-text-secondary">Connect professionally</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-muted/30 rounded-lg">
              <Icon name="Calendar" size={20} className="text-conversion" />
              <div className="text-left">
                <div className="text-sm font-medium text-text-primary">Schedule</div>
                <div className="text-xs text-text-secondary">Book a meeting</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-12">
          <p className="text-text-secondary italic">
            "The best marketing technology solutions emerge when creative vision meets technical precision."
          </p>
          <p className="text-conversion font-medium mt-2">— Jacob Darling</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;