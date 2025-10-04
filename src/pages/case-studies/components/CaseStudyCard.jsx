import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyCard = ({ caseStudy, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatMetric = (value, type) => {
    if (type === 'percentage') return `${value}%`;
    if (type === 'currency') return `$${value?.toLocaleString()}`;
    if (type === 'number') return value?.toLocaleString();
    return value;
  };

  return (
    <div 
      className="bg-card border border-border rounded-lg overflow-hidden brand-shadow smooth-transition hover:scale-[1.02] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(caseStudy)}
    >
      {/* Header Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={caseStudy?.image}
          alt={caseStudy?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-conversion/90 text-conversion-foreground text-xs font-medium rounded-full">
            {caseStudy?.category}
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-background/90 text-text-primary text-xs font-medium rounded-full">
            {caseStudy?.duration}
          </span>
        </div>

        {/* Client Logo */}
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">{caseStudy?.client?.charAt(0)}</span>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Title & Client */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-2">
            {caseStudy?.title}
          </h3>
          <p className="text-text-secondary font-medium">
            {caseStudy?.client} • {caseStudy?.industry}
          </p>
        </div>

        {/* Description */}
        <p className="text-text-secondary mb-6 line-clamp-3">
          {caseStudy?.description}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {caseStudy?.keyMetrics?.slice(0, 2)?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-conversion mb-1">
                {formatMetric(metric?.value, metric?.type)}
              </div>
              <div className="text-xs text-text-secondary">
                {metric?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudy?.technologies?.slice(0, 3)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {caseStudy?.technologies?.length > 3 && (
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md">
              +{caseStudy?.technologies?.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e?.stopPropagation();
              onViewDetails(caseStudy);
            }}
            iconName="Eye"
            iconPosition="left"
            iconSize={16}
          >
            View Details
          </Button>

          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => e?.stopPropagation()}
              className="p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-muted smooth-transition"
            >
              <Icon name="Download" size={16} />
            </button>
            <button
              onClick={(e) => e?.stopPropagation()}
              className="p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-muted smooth-transition"
            >
              <Icon name="Share2" size={16} />
            </button>
          </div>
        </div>
      </div>
      {/* Hover Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-conversion/5 pointer-events-none smooth-transition" />
      )}
    </div>
  );
};

export default CaseStudyCard;