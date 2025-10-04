import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, onCompare, isSelected }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const getTechColor = (tech) => {
    const colors = {
      'React': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'Node.js': 'bg-green-500/10 text-green-400 border-green-500/20',
      'Python': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      'TypeScript': 'bg-blue-600/10 text-blue-300 border-blue-600/20',
      'JavaScript': 'bg-yellow-600/10 text-yellow-300 border-yellow-600/20',
      'Next.js': 'bg-gray-500/10 text-gray-300 border-gray-500/20',
      'Vue.js': 'bg-green-600/10 text-green-300 border-green-600/20',
      'Angular': 'bg-red-500/10 text-red-400 border-red-500/20',
      'Express': 'bg-gray-600/10 text-gray-400 border-gray-600/20',
      'MongoDB': 'bg-green-700/10 text-green-500 border-green-700/20',
      'PostgreSQL': 'bg-blue-700/10 text-blue-500 border-blue-700/20',
      'AWS': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      'Docker': 'bg-blue-800/10 text-blue-600 border-blue-800/20'
    };
    return colors?.[tech] || 'bg-muted/50 text-muted-foreground border-border';
  };

  const getComplexityColor = (level) => {
    const colors = {
      'Beginner': 'bg-success/10 text-success border-success/20',
      'Intermediate': 'bg-warning/10 text-warning border-warning/20',
      'Advanced': 'bg-destructive/10 text-destructive border-destructive/20'
    };
    return colors?.[level] || 'bg-muted/50 text-muted-foreground border-border';
  };

  return (
    <div className={`group relative bg-card border border-border rounded-xl overflow-hidden smooth-transition hover:border-conversion/30 hover:brand-shadow ${isSelected ? 'ring-2 ring-conversion/50' : ''}`}>
      {/* Selection Checkbox */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => onCompare(project?.id)}
          className={`w-6 h-6 rounded border-2 flex items-center justify-center smooth-transition ${
            isSelected 
              ? 'bg-conversion border-conversion text-conversion-foreground' 
              : 'border-border bg-background/80 backdrop-blur-sm hover:border-conversion/50'
          }`}
        >
          {isSelected && <Icon name="Check" size={14} />}
        </button>
      </div>
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={project?.image}
          alt={project?.title}
          className={`w-full h-full object-cover smooth-transition group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleImageLoad}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon name="Image" size={32} className="text-muted-foreground" />
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
            project?.status === 'Live' ?'bg-success/10 text-success border-success/20' 
              : project?.status === 'In Development' ?'bg-warning/10 text-warning border-warning/20' :'bg-muted/50 text-muted-foreground border-border'
          }`}>
            {project?.status}
          </span>
        </div>

        {/* Live Demo Overlay */}
        {project?.liveUrl && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
            <Button
              variant="default"
              size="sm"
              onClick={() => window.open(project?.liveUrl, '_blank')}
              iconName="ExternalLink"
              iconPosition="right"
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
            >
              View Live Demo
            </Button>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-conversion smooth-transition">
              {project?.title}
            </h3>
            <p className="text-sm text-text-secondary line-clamp-2">
              {project?.description}
            </p>
          </div>
        </div>

        {/* Complexity Badge */}
        <div className="mb-4">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getComplexityColor(project?.complexity)}`}>
            <Icon name="Zap" size={12} className="mr-1" />
            {project?.complexity}
          </span>
        </div>

        {/* Technology Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project?.technologies?.slice(0, 4)?.map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-md text-xs font-medium border ${getTechColor(tech)}`}
              >
                {tech}
              </span>
            ))}
            {project?.technologies?.length > 4 && (
              <span className="px-2 py-1 rounded-md text-xs font-medium bg-muted/50 text-muted-foreground border border-border">
                +{project?.technologies?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-text-secondary">
          <div className="flex items-center space-x-4">
            {project?.githubStats && (
              <>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} />
                  <span>{project?.githubStats?.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="GitFork" size={14} />
                  <span>{project?.githubStats?.forks}</span>
                </div>
              </>
            )}
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{project?.lastUpdated}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            iconName="Eye"
            iconPosition="left"
            className="flex-1"
          >
            View Details
          </Button>
          {project?.githubUrl && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(project?.githubUrl, '_blank')}
              iconName="Github"
              iconPosition="left"
            >
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;