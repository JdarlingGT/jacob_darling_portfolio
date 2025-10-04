import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProjectFilters = ({ 
  searchTerm, 
  onSearchChange, 
  selectedType, 
  onTypeChange, 
  selectedTech, 
  onTechChange, 
  selectedComplexity, 
  onComplexityChange,
  onClearFilters,
  projectCount 
}) => {
  const projectTypes = [
    { value: 'all', label: 'All Projects' },
    { value: 'web-app', label: 'Web Applications' },
    { value: 'mobile-app', label: 'Mobile Apps' },
    { value: 'api', label: 'APIs & Backend' },
    { value: 'automation', label: 'Marketing Automation' },
    { value: 'data-viz', label: 'Data Visualization' },
    { value: 'ai-ml', label: 'AI/ML Projects' },
    { value: 'devtools', label: 'Developer Tools' }
  ];

  const technologies = [
    { value: 'all', label: 'All Technologies' },
    { value: 'react', label: 'React' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'vuejs', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'express', label: 'Express' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'postgresql', label: 'PostgreSQL' },
    { value: 'aws', label: 'AWS' },
    { value: 'docker', label: 'Docker' }
  ];

  const complexityLevels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const hasActiveFilters = selectedType !== 'all' || selectedTech !== 'all' || selectedComplexity !== 'all' || searchTerm?.length > 0;

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-text-primary mb-1">Filter Projects</h2>
          <p className="text-sm text-text-secondary">
            Showing {projectCount} project{projectCount !== 1 ? 's' : ''}
          </p>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            className="text-text-secondary hover:text-text-primary"
          >
            Clear Filters
          </Button>
        )}
      </div>
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search projects by name, description, or technology..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="pl-10"
          />
          <Icon 
            name="Search" 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
          />
        </div>
      </div>
      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          label="Project Type"
          options={projectTypes}
          value={selectedType}
          onChange={onTypeChange}
          className="w-full"
        />

        <Select
          label="Technology"
          options={technologies}
          value={selectedTech}
          onChange={onTechChange}
          searchable
          className="w-full"
        />

        <Select
          label="Complexity"
          options={complexityLevels}
          value={selectedComplexity}
          onChange={onComplexityChange}
          className="w-full"
        />
      </div>
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-text-secondary">Active filters:</span>
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <span className="px-2 py-1 bg-conversion/10 text-conversion border border-conversion/20 rounded-md">
                  Search: "{searchTerm}"
                </span>
              )}
              {selectedType !== 'all' && (
                <span className="px-2 py-1 bg-conversion/10 text-conversion border border-conversion/20 rounded-md">
                  Type: {projectTypes?.find(t => t?.value === selectedType)?.label}
                </span>
              )}
              {selectedTech !== 'all' && (
                <span className="px-2 py-1 bg-conversion/10 text-conversion border border-conversion/20 rounded-md">
                  Tech: {technologies?.find(t => t?.value === selectedTech)?.label}
                </span>
              )}
              {selectedComplexity !== 'all' && (
                <span className="px-2 py-1 bg-conversion/10 text-conversion border border-conversion/20 rounded-md">
                  Level: {complexityLevels?.find(c => c?.value === selectedComplexity)?.label}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;