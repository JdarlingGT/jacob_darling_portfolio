import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TestimonialGrid = ({ activeFilter, searchTerm }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Walsh",
      role: "Marketing Director",
      company: "TechFlow Industries",
      relationship: "client",
      content: "Jacob transformed our entire marketing infrastructure. His implementation of automated workflows reduced our manual tasks by 80% while increasing lead quality significantly. The ROI was immediate and sustained.",
      fullContent: "Jacob transformed our entire marketing infrastructure with a level of expertise I rarely see. His implementation of automated workflows reduced our manual tasks by 80% while increasing lead quality significantly. The 'Guardian' AI system he architected not only streamlined our processes but provided insights we never had before. The ROI was immediate and sustained - we saw a 40% increase in qualified leads within the first month. His ability to translate complex technical concepts into actionable business solutions is exceptional.",
      image: "/assets/images/no_image.png",
      linkedinUrl: "https://linkedin.com/in/example",
      skills: ["Marketing Automation", "AI Integration", "Workflow Optimization"],
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "David Rodriguez",
      role: "Senior Systems Administrator",
      company: "Healthcare Solutions Inc",
      relationship: "colleague",
      content: "Working with Jacob on healthcare platform security was eye-opening. His multi-layered Cloudflare defense architecture neutralized over 85,000 malicious attempts monthly while maintaining 99.9% uptime.",
      fullContent: "Working with Jacob on healthcare platform security was eye-opening. His multi-layered Cloudflare defense architecture neutralized over 85,000 malicious attempts monthly while maintaining 99.9% uptime. What impressed me most was his holistic approach - he didn't just implement security measures, he created 'The Fortress' system that continuously adapts and learns. His performance tuning achieved an 86% cache-hit ratio, eliminating downtime completely. Jacob brings both strategic vision and hands-on technical expertise that's rare in our industry.",
      image: "/assets/images/no_image.png",
      linkedinUrl: "https://linkedin.com/in/example",
      skills: ["Security Architecture", "Performance Engineering", "Infrastructure Management"],
      date: "2023-11-20"
    },
    {
      id: 3,
      name: "Lisa Chen",
      role: "Chief Executive Officer",
      company: "Riley Bennett Egloff LLP",
      relationship: "supervisor",
      content: "During Jacob's tenure, he contributed to a 50% increase in our firm's annual revenue through strategic marketing planning. His digital transformation initiatives saved us 40% on marketing expenses while dramatically increasing our reach.",
      fullContent: "During Jacob's tenure, he contributed to a 50% increase in our firm's annual revenue through strategic marketing planning. His digital transformation initiatives saved us 40% on marketing expenses while dramatically increasing our reach. Jacob led our comprehensive firm-wide digital rebrand and technical SEO overhaul that resulted in a 35% increase in qualified client inquiries. His creation and management of RBE Magazine established us as thought leaders in our space. Jacob's rare combination of marketing strategy and technical implementation made him invaluable to our growth.",
      image: "/assets/images/no_image.png",
      linkedinUrl: "https://linkedin.com/in/example",
      skills: ["Digital Transformation", "Revenue Growth", "Brand Strategy"],
      date: "2023-08-10"
    },
    {
      id: 4,
      name: "Mark Thompson",
      role: "Technology Consultant",
      company: "Digital Innovation Labs",
      relationship: "colleague",
      content: "Jacob's ability to integrate disparate systems is remarkable. His 'Conductor' data pipeline seamlessly connected five different platforms, creating a single source of truth for all customer data across our organization.",
      fullContent: "Jacob's ability to integrate disparate systems is remarkable. His 'Conductor' data pipeline seamlessly connected five different platforms (WooCommerce, LearnDash, Gravity Forms, FluentCRM), creating a single source of truth for all customer data across our organization. The complexity of this integration would have taken most teams months - Jacob architected and implemented it in weeks. His documentation and training ensured our team could maintain and extend the system. This project alone saved us thousands in operational costs and countless hours of manual data reconciliation.",
      image: "/assets/images/no_image.png",
      linkedinUrl: "https://linkedin.com/in/example",
      skills: ["Systems Integration", "Data Architecture", "Platform Development"],
      date: "2024-02-28"
    },
    {
      id: 5,
      name: "Rachel Martinez",
      role: "Digital Marketing Manager",
      company: "Growth Dynamics",
      relationship: "client",
      content: "The analytics transformation Jacob implemented was game-changing. His \'Compass\' system gave us precise attribution modeling and enabled us to maximize our marketing ROI across all channels.",
      fullContent: "The analytics transformation Jacob implemented was game-changing. His 'Compass' system gave us precise attribution modeling and enabled us to maximize our marketing ROI across all channels. Before Jacob, we were essentially flying blind with our ad spend. His new GTM architecture and Google Ads conversion reconfiguration focused on high-value actions, giving us crystal-clear insights into what drives revenue. Our marketing efficiency improved by 60% while scaling our campaigns 3x. Jacob doesn't just implement solutions - he builds systems that grow with your business.",
      image: "/assets/images/no_image.png",
      linkedinUrl: "https://linkedin.com/in/example",
      skills: ["Analytics Implementation", "Attribution Modeling", "ROI Optimization"],
      date: "2023-12-05"
    },
    {
      id: 6,
      name: "Alex Kumar",
      role: "Product Manager",
      company: "InnovateCorp",
      relationship: "client",
      content: "Jacob\'s e-commerce optimization transformed our static website into an automated revenue engine. The innovative checkout system he engineered increased our conversions by 40% within the first quarter.",
      fullContent: "Jacob's e-commerce optimization transformed our static website into an automated revenue engine. The innovative checkout system he engineered increased our conversions by 40% within the first quarter. His 'Launchpad' provider directory not only improved user experience but created new revenue streams we hadn't considered. Jacob's approach combines technical excellence with business acumen - he understands that technology should drive measurable business outcomes. The system he built continues to perform exceptionally, requiring minimal maintenance while delivering consistent results.",
      image: "/assets/images/no_image.png",
      linkedinUrl: "https://linkedin.com/in/example",
      skills: ["E-commerce Development", "Conversion Optimization", "Revenue Engineering"],
      date: "2024-03-12"
    }
  ];

  const filteredTestimonials = testimonials?.filter(testimonial => {
    const matchesFilter = activeFilter === 'all' || testimonial?.relationship === activeFilter;
    const matchesSearch = !searchTerm || 
      testimonial?.content?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      testimonial?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      testimonial?.company?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      testimonial?.skills?.some(skill => skill?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  const getRelationshipBadge = (relationship) => {
    const badges = {
      client: { color: 'bg-conversion text-white', text: 'Client', icon: 'User' },
      colleague: { color: 'bg-trust-builder text-white', text: 'Colleague', icon: 'Users' },
      supervisor: { color: 'bg-primary text-white', text: 'Supervisor', icon: 'Crown' }
    };
    
    return badges?.[relationship] || badges?.client;
  };

  const toggleExpanded = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {filteredTestimonials?.map((testimonial) => (
        <div 
          key={testimonial?.id}
          className="bg-background border border-border rounded-xl overflow-hidden brand-shadow hover:shadow-lg transition-all duration-300 group"
        >
          <div className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial?.image} 
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-muted group-hover:border-conversion transition-colors"
                />
                <div>
                  <h3 className="text-lg font-bold text-text-primary">
                    {testimonial?.name}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {testimonial?.role}
                  </p>
                  <p className="text-sm font-medium text-conversion">
                    {testimonial?.company}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
                  getRelationshipBadge(testimonial?.relationship)?.color
                }`}>
                  <Icon name={getRelationshipBadge(testimonial?.relationship)?.icon} size={12} />
                  <span>{getRelationshipBadge(testimonial?.relationship)?.text}</span>
                </span>
                
                {testimonial?.linkedinUrl && (
                  <a 
                    href={testimonial?.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-conversion transition-colors"
                  >
                    <Icon name="ExternalLink" size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-text-secondary leading-relaxed mb-6">
              "{expandedCard === testimonial?.id ? testimonial?.fullContent : testimonial?.content}"
            </blockquote>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {testimonial?.skills?.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">
                {new Date(testimonial?.date)?.toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
              </span>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExpanded(testimonial?.id)}
                iconName={expandedCard === testimonial?.id ? "ChevronUp" : "ChevronDown"}
                iconPosition="right"
                iconSize={16}
              >
                {expandedCard === testimonial?.id ? 'Show Less' : 'Read Full'}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialGrid;