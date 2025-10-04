import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const TestimonialFilters = ({ activeFilter, setActiveFilter, searchTerm, setSearchTerm }) => {
  const filters = [
    { 
      key: 'all', 
      label: 'All Testimonials', 
      count: 50,
      icon: 'Users',
      color: 'bg-primary'
    },
    { 
      key: 'client', 
      label: 'Clients', 
      count: 28,
      icon: 'User',
      color: 'bg-conversion'
    },
    { 
      key: 'colleague', 
      label: 'Colleagues', 
      count: 18,
      icon: 'Users',
      color: 'bg-trust-builder'
    },
    { 
      key: 'supervisor', 
      label: 'Supervisors', 
      count: 4,
      icon: 'Crown',
      color: 'bg-accent'
    }
  ];

  return (
    <div className="mb-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {filters?.map((filter) => (
            <Button
              key={filter?.key}
              variant={activeFilter === filter?.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter?.key)}
              iconName={filter?.icon}
              iconPosition="left"
              iconSize={16}
              className={`${
                activeFilter === filter?.key 
                  ? `${filter?.color} text-white border-transparent` 
                  : 'hover:border-conversion hover:text-conversion'
              } transition-all`}
            >
              <span className="flex items-center space-x-2">
                <span>{filter?.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeFilter === filter?.key 
                    ? 'bg-white/20 text-white' :'bg-muted text-text-secondary'
                }`}>
                  {filter?.count}
                </span>
              </span>
            </Button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full lg:w-80">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Icon name="Search" size={18} className="text-text-secondary" />
          </div>
          <Input
            type="text"
            placeholder="Search testimonials, skills, or companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="pl-12 pr-12 py-3 w-full bg-background border-border focus:border-conversion focus:ring-conversion/20"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-secondary hover:text-text-primary transition-colors"
            >
              <Icon name="X" size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Search Results Info */}
      {searchTerm && (
        <div className="mt-4 p-4 bg-muted border border-border rounded-lg">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Info" size={16} />
            <span>
              Showing results for "<span className="font-medium text-text-primary">{searchTerm}</span>"
            </span>
            <button
              onClick={() => setSearchTerm('')}
              className="ml-2 text-conversion hover:text-conversion-dark transition-colors"
            >
              Clear search
            </button>
          </div>
        </div>
      )}

      {/* Active Filter Info */}
      {activeFilter !== 'all' && (
        <div className="mt-4 flex items-center space-x-2 text-sm text-text-secondary">
          <span>Filtered by:</span>
          <span className="px-3 py-1 bg-conversion/10 text-conversion rounded-full font-medium">
            {filters?.find(f => f?.key === activeFilter)?.label}
          </span>
          <button
            onClick={() => setActiveFilter('all')}
            className="text-conversion hover:text-conversion-dark transition-colors"
          >
            <Icon name="X" size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialFilters;