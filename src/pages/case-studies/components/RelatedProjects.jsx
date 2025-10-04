import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RelatedProjects = ({ projects, onProjectClick }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-text-primary">
          Related Projects
        </h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.location.href = '/projects'}
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
        >
          View All Projects
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <div
            key={project?.id}
            className="bg-muted rounded-lg overflow-hidden cursor-pointer smooth-transition hover:scale-[1.02] hover:shadow-lg"
            onClick={() => onProjectClick(project)}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="px-2 py-1 bg-conversion/90 text-conversion-foreground text-xs font-medium rounded">
                  {project?.type}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h4 className="font-semibold text-text-primary mb-2 line-clamp-2">
                {project?.title}
              </h4>
              <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                {project?.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project?.technologies?.slice(0, 2)?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-background text-text-secondary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project?.technologies?.length > 2 && (
                    <span className="px-2 py-1 bg-background text-text-secondary text-xs rounded">
                      +{project?.technologies?.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  {project?.githubUrl && (
                    <button
                      onClick={(e) => {
                        e?.stopPropagation();
                        window.open(project?.githubUrl, '_blank');
                      }}
                      className="p-1 text-text-secondary hover:text-text-primary smooth-transition"
                    >
                      <Icon name="Github" size={16} />
                    </button>
                  )}
                  {project?.liveUrl && (
                    <button
                      onClick={(e) => {
                        e?.stopPropagation();
                        window.open(project?.liveUrl, '_blank');
                      }}
                      className="p-1 text-text-secondary hover:text-text-primary smooth-transition"
                    >
                      <Icon name="ExternalLink" size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;