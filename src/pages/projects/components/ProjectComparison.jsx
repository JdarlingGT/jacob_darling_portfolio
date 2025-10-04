import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ProjectComparison = ({ projects, onClose, onRemoveProject }) => {
  if (projects?.length === 0) return null;

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

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-4 bg-card border border-border rounded-xl brand-shadow overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Project Comparison</h2>
            <p className="text-text-secondary">Compare {projects?.length} selected projects</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
          />
        </div>

        {/* Comparison Content */}
        <div className="p-6 overflow-auto h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects?.map((project) => (
              <div key={project?.id} className="bg-background border border-border rounded-lg overflow-hidden">
                {/* Project Header */}
                <div className="relative">
                  <div className="h-32 overflow-hidden bg-muted">
                    <Image
                      src={project?.image}
                      alt={project?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => onRemoveProject(project?.id)}
                    className="absolute top-2 right-2 w-6 h-6 bg-destructive/90 hover:bg-destructive text-destructive-foreground rounded-full flex items-center justify-center smooth-transition"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </div>

                {/* Project Details */}
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{project?.title}</h3>
                    <p className="text-sm text-text-secondary line-clamp-2">{project?.description}</p>
                  </div>

                  {/* Status & Complexity */}
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                      project?.status === 'Live' ?'bg-success/10 text-success border-success/20' 
                        : project?.status === 'In Development' ?'bg-warning/10 text-warning border-warning/20' :'bg-muted/50 text-muted-foreground border-border'
                    }`}>
                      {project?.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                      project?.complexity === 'Advanced' ?'bg-destructive/10 text-destructive border-destructive/20'
                        : project?.complexity === 'Intermediate' ?'bg-warning/10 text-warning border-warning/20' :'bg-success/10 text-success border-success/20'
                    }`}>
                      {project?.complexity}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium text-text-primary mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project?.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 rounded text-xs font-medium border ${getTechColor(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Stats */}
                  {project?.githubStats && (
                    <div>
                      <h4 className="text-sm font-medium text-text-primary mb-2">GitHub Stats</h4>
                      <div className="flex items-center space-x-4 text-sm text-text-secondary">
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={14} />
                          <span>{project?.githubStats?.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="GitFork" size={14} />
                          <span>{project?.githubStats?.forks}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Eye" size={14} />
                          <span>{project?.githubStats?.watchers}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-medium text-text-primary mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {project?.features?.slice(0, 3)?.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                          <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    {project?.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project?.liveUrl, '_blank')}
                        iconName="ExternalLink"
                        iconPosition="right"
                        className="flex-1"
                      >
                        Live Demo
                      </Button>
                    )}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComparison;