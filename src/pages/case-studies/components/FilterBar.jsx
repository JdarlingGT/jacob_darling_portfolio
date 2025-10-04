import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FilterBar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  searchQuery, 
  onSearchChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange
}) => {
  const industryOptions = [
    { value: 'all', label: 'All Industries' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'saas', label: 'SaaS' },
    { value: 'fintech', label: 'FinTech' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'manufacturing', label: 'Manufacturing' }
  ];

  const technologyOptions = [
    { value: 'all', label: 'All Technologies' },
    { value: 'hubspot', label: 'HubSpot' },
    { value: 'salesforce', label: 'Salesforce' },
    { value: 'marketo', label: 'Marketo' },
    { value: 'zapier', label: 'Zapier' },
    { value: 'react', label: 'React' },
    { value: 'python', label: 'Python' },
    { value: 'javascript', label: 'JavaScript' }
  ];

  const projectTypeOptions = [
    { value: 'all', label: 'All Project Types' },
    { value: 'automation', label: 'Marketing Automation' },
    { value: 'integration', label: 'System Integration' },
    { value: 'optimization', label: 'Performance Optimization' },
    { value: 'migration', label: 'Platform Migration' },
    { value: 'analytics', label: 'Analytics & Reporting' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'impact', label: 'Highest Impact' },
    { value: 'duration', label: 'Project Duration' },
    { value: 'alphabetical', label: 'Alphabetical' }
  ];

  const hasActiveFilters = filters?.industry !== 'all' || 
                          filters?.technology !== 'all' || 
                          filters?.projectType !== 'all' || 
                          searchQuery?.length > 0;

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
        />
        <input
          type="text"
          placeholder="Search case studies by title, client, or technology..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-conversion focus:border-transparent smooth-transition"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary smooth-transition"
          >
            <Icon name="X" size={16} />
          </button>
        )}
      </div>
      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Select
          label="Industry"
          options={industryOptions}
          value={filters?.industry}
          onChange={(value) => onFilterChange('industry', value)}
          className="w-full"
        />

        <Select
          label="Technology"
          options={technologyOptions}
          value={filters?.technology}
          onChange={(value) => onFilterChange('technology', value)}
          className="w-full"
        />

        <Select
          label="Project Type"
          options={projectTypeOptions}
          value={filters?.projectType}
          onChange={(value) => onFilterChange('projectType', value)}
          className="w-full"
        />

        <Select
          label="Sort By"
          options={sortOptions}
          value={sortBy}
          onChange={onSortChange}
          className="w-full"
        />
      </div>
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Filter Status */}
        <div className="flex items-center space-x-4">
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              iconName="X"
              iconPosition="left"
              iconSize={16}
            >
              Clear Filters
            </Button>
          )}
          <span className="text-sm text-text-secondary">
            {hasActiveFilters ? 'Filtered results' : 'Showing all case studies'}
          </span>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-text-secondary mr-2">View:</span>
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-md smooth-transition ${
                viewMode === 'grid' ?'bg-conversion text-conversion-foreground' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-md smooth-transition ${
                viewMode === 'list' ?'bg-conversion text-conversion-foreground' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;