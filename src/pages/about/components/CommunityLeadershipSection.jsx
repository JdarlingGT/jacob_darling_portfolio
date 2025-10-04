import React from 'react';
import Icon from '../../../components/AppIcon';

const CommunityLeadershipSection = () => {
  const leadershipRoles = [
    {
      id: 1,
      title: "President",
      organization: "School 80 Condominiums HOA",
      period: "2019 - Present",
      description: "Leading governance, strategic planning, and budget management for our residential community.",
      responsibilities: [
        "Strategic planning and governance oversight",
        "Budget management and financial planning",
        "Community engagement and resident relations",
        "Vendor management and property maintenance coordination"
      ],
      icon: "Home",
      color: "conversion",
      logo: "/assets/images/Logo-1759610700707.png"
    },
    {
      id: 2,
      title: "Board Member & Marketing Lead",
      organization: "Primary Colours",
      period: "2018 - 2019",
      description: "Supported an Indianapolis non-profit dedicated to serving the visual arts. During my tenure, we exhibited the work of over 200 local artists and generated more than $46,000 for the local arts community.",
      responsibilities: [
        "Marketing strategy and campaign development",
        "Community outreach and artist relations",
        "Event planning and exhibition coordination",
        "Revenue generation and fundraising initiatives"
      ],
      icon: "Palette",
      color: "trust-builder",
      logo: "/assets/images/PC-Logo-1759610614733.jpg",
      metrics: {
        artists: "200+",
        revenue: "$46,000+",
        impact: "Local Arts Community"
      }
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={16} className="text-conversion" />
            <span className="text-sm font-medium text-text-secondary">Community Leadership</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Community Leadership
            <span className="block text-conversion">& Impact</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            I believe that the same skills that build successful marketing systems can also build stronger communities. I am committed to giving back through leadership and service.
          </p>
        </div>

        {/* Leadership Roles */}
        <div className="grid lg:grid-cols-2 gap-8">
          {leadershipRoles?.map((role) => (
            <div
              key={role?.id}
              className="bg-card border border-border rounded-xl p-8 smooth-transition hover:brand-shadow hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                {role?.logo ? (
                  <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center flex-shrink-0 p-2">
                    <img 
                      src={role?.logo} 
                      alt={`${role?.organization} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className={`w-14 h-14 rounded-lg bg-${role?.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={role?.icon} size={24} className={`text-${role?.color}-foreground`} />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary mb-1">
                    {role?.title}
                  </h3>
                  <p className="text-lg font-semibold text-conversion mb-2">
                    {role?.organization}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} className="text-text-secondary" />
                    <span className="text-sm text-text-secondary font-medium">
                      {role?.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">
                {role?.description}
              </p>

              {/* Metrics (if available) */}
              {role?.metrics && (
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-conversion mb-1">
                      {role?.metrics?.artists}
                    </div>
                    <div className="text-xs text-text-secondary">
                      Artists Exhibited
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-trust-builder mb-1">
                      {role?.metrics?.revenue}
                    </div>
                    <div className="text-xs text-text-secondary">
                      Generated
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-cta-warm mb-1">
                      Community
                    </div>
                    <div className="text-xs text-text-secondary">
                      Impact
                    </div>
                  </div>
                </div>
              )}

              {/* Responsibilities */}
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
                  <Icon name="CheckSquare" size={16} className="mr-2 text-conversion" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {role?.responsibilities?.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Icon name="ArrowRight" size={14} className="text-trust-builder mt-1 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-conversion/10 via-trust-builder/10 to-conversion/10 rounded-2xl p-8 lg:p-12 border border-border">
            <Icon name="Heart" size={32} className="text-conversion mx-auto mb-6" />
            <blockquote className="text-xl lg:text-2xl font-medium text-text-primary leading-relaxed mb-6">
              "The same skills that build successful marketing systems can also build stronger communities."
            </blockquote>
            <p className="text-lg text-text-secondary">
              My commitment to community leadership reflects my belief that technology and strategic thinking should serve not just business objectives, but also the greater good of the communities we live and work in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityLeadershipSection;