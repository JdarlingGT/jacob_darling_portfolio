import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ProjectDetails = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'features', label: 'Features', icon: 'List' },
    { id: 'tech', label: 'Technology', icon: 'Code' },
    { id: 'code', label: 'Code Preview', icon: 'FileCode' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-4 bg-card border border-border rounded-xl brand-shadow overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">{project?.title}</h2>
              <p className="text-text-secondary">{project?.type} • {project?.complexity}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {project?.liveUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project?.liveUrl, '_blank')}
                iconName="ExternalLink"
                iconPosition="right"
              >
                Live Demo
              </Button>
            )}
            {project?.githubUrl && (
              <Button
                variant="default"
                onClick={() => window.open(project?.githubUrl, '_blank')}
                iconName="Github"
                iconPosition="left"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
              >
                View Code
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              iconName="X"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border">
          <div className="flex space-x-0 px-6">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-3 border-b-2 smooth-transition ${
                  activeTab === tab?.id
                    ? 'border-conversion text-conversion' :'border-transparent text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span className="font-medium">{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-auto h-full">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Project Image */}
              <div className="h-64 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Project Description</h3>
                <p className="text-text-secondary leading-relaxed">{project?.longDescription}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-background border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-conversion mb-1">{project?.githubStats?.stars || 0}</div>
                  <div className="text-sm text-text-secondary">GitHub Stars</div>
                </div>
                <div className="bg-background border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-conversion mb-1">{project?.githubStats?.forks || 0}</div>
                  <div className="text-sm text-text-secondary">Forks</div>
                </div>
                <div className="bg-background border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-conversion mb-1">{project?.githubStats?.watchers || 0}</div>
                  <div className="text-sm text-text-secondary">Watchers</div>
                </div>
                <div className="bg-background border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-conversion mb-1">{project?.commits || 0}</div>
                  <div className="text-sm text-text-secondary">Commits</div>
                </div>
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Project Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Status:</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        project?.status === 'Live' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                      }`}>
                        {project?.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Complexity:</span>
                      <span className="text-text-primary">{project?.complexity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Last Updated:</span>
                      <span className="text-text-primary">{project?.lastUpdated}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Duration:</span>
                      <span className="text-text-primary">{project?.duration}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Key Metrics</h4>
                  <div className="space-y-2 text-sm">
                    {project?.metrics?.map((metric, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-text-secondary">{metric?.label}:</span>
                        <span className="text-text-primary font-medium">{metric?.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-text-primary">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background border border-border rounded-lg">
                    <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {project?.challenges && (
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4">Challenges Overcome</h4>
                  <div className="space-y-3">
                    {project?.challenges?.map((challenge, index) => (
                      <div key={index} className="p-4 bg-background border border-border rounded-lg">
                        <h5 className="font-medium text-text-primary mb-2">{challenge?.title}</h5>
                        <p className="text-text-secondary text-sm">{challenge?.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-2 rounded-lg text-sm font-medium border ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project?.architecture && (
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4">Architecture Overview</h4>
                  <div className="bg-background border border-border rounded-lg p-6">
                    <p className="text-text-secondary leading-relaxed">{project?.architecture}</p>
                  </div>
                </div>
              )}

              {project?.deployment && (
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4">Deployment & Infrastructure</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project?.deployment?.map((item, index) => (
                      <div key={index} className="p-4 bg-background border border-border rounded-lg">
                        <h5 className="font-medium text-text-primary mb-2">{item?.service}</h5>
                        <p className="text-text-secondary text-sm">{item?.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-text-primary">Code Snippets</h3>
              {project?.codeSnippets?.map((snippet, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-text-primary">{snippet?.title}</h4>
                  <div className="bg-background border border-border rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
                      <span className="text-sm font-mono text-text-secondary">{snippet?.language}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigator.clipboard?.writeText(snippet?.code)}
                        iconName="Copy"
                        iconPosition="left"
                      >
                        Copy
                      </Button>
                    </div>
                    <pre className="p-4 text-sm font-mono text-text-primary overflow-x-auto">
                      <code>{snippet?.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;