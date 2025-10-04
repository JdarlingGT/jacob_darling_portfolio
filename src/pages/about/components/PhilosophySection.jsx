import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      id: 0,
      title: "Bridge Builder",
      subtitle: "Connecting Vision with Reality",
      description: `I believe the best marketing technology solutions emerge when creative vision meets technical precision. My role isn't just to execute—it's to translate ambitious marketing strategies into scalable, measurable systems that deliver consistent results.`,
      icon: "Bridge",
      color: "conversion",
      stats: { metric: "Cross-functional", value: "Projects Led", number: "50+" }
    },
    {
      id: 1,
      title: "Systems Thinker",
      subtitle: "Building Infrastructure that Scales",
      description: `Every campaign is part of a larger ecosystem. I design marketing technology stacks that don't just solve today's problems—they anticipate tomorrow's opportunities. Scalable architecture, clean data flows, and automated optimization are the foundation of sustainable growth.`,
      icon: "Settings",
      color: "trust-builder",
      stats: { metric: "Automation", value: "Systems Built", number: "25+" }
    },
    {
      id: 2,
      title: "Performance Optimizer",
      subtitle: "Measurable Results Drive Everything",
      description: `Beautiful campaigns mean nothing without measurable impact. I build comprehensive attribution models, implement advanced analytics, and create feedback loops that turn data into actionable insights. Every decision is backed by evidence, every optimization is tracked.`,
      icon: "TrendingUp",
      color: "cta-warm",
      stats: { metric: "Performance", value: "Improvement Avg", number: "40%" }
    },
    {
      id: 3,
      title: "Collaborative Leader",
      subtitle: "Empowering Teams Through Technology",
      description: `The best marketing technology isn't just powerful—it's accessible. I focus on creating solutions that empower entire teams, with intuitive interfaces, comprehensive documentation, and training programs that ensure adoption and success across all stakeholders.`,
      icon: "Users",
      color: "secondary",
      stats: { metric: "Team", value: "Members Trained", number: "200+" }
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-6">
            <Icon name="Compass" size={16} className="text-conversion" />
            <span className="text-sm font-medium text-text-secondary">Core Philosophy</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            The Principles That
            <span className="block text-conversion">Drive My Work</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Four foundational beliefs that shape how I approach marketing technology challenges and build solutions that stand the test of time.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Philosophy Cards */}
          <div className="space-y-4">
            {philosophies?.map((philosophy, index) => (
              <div
                key={philosophy?.id}
                className={`p-6 rounded-xl border cursor-pointer smooth-transition ${
                  activePhilosophy === index
                    ? 'bg-card border-conversion brand-shadow'
                    : 'bg-muted/30 border-border hover:border-muted hover:bg-muted/50'
                }`}
                onClick={() => setActivePhilosophy(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activePhilosophy === index ? `bg-${philosophy?.color}` : 'bg-muted'
                  } smooth-transition`}>
                    <Icon 
                      name={philosophy?.icon} 
                      size={20} 
                      className={activePhilosophy === index ? `text-${philosophy?.color}-foreground` : 'text-text-secondary'} 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-1 smooth-transition ${
                      activePhilosophy === index ? 'text-text-primary' : 'text-text-secondary'
                    }`}>
                      {philosophy?.title}
                    </h3>
                    <p className={`text-sm smooth-transition ${
                      activePhilosophy === index ? 'text-conversion' : 'text-text-secondary'
                    }`}>
                      {philosophy?.subtitle}
                    </p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={16} 
                    className={`smooth-transition ${
                      activePhilosophy === index ? 'text-conversion rotate-90' : 'text-text-secondary'
                    }`} 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Active Philosophy Details */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-card border border-border rounded-xl p-8 brand-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-${philosophies?.[activePhilosophy]?.color} flex items-center justify-center`}>
                  <Icon 
                    name={philosophies?.[activePhilosophy]?.icon} 
                    size={24} 
                    className={`text-${philosophies?.[activePhilosophy]?.color}-foreground`} 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {philosophies?.[activePhilosophy]?.title}
                  </h3>
                  <p className="text-conversion font-medium">
                    {philosophies?.[activePhilosophy]?.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed mb-8">
                {philosophies?.[activePhilosophy]?.description}
              </p>

              {/* Stats */}
              <div className="bg-muted/30 rounded-lg p-6">
                <div className="text-center">
                  <div className={`text-3xl font-bold text-${philosophies?.[activePhilosophy]?.color} mb-1`}>
                    {philosophies?.[activePhilosophy]?.stats?.number}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {philosophies?.[activePhilosophy]?.stats?.metric} {philosophies?.[activePhilosophy]?.stats?.value}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;