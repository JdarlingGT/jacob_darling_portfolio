import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange, skillCounts }) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">Categories</h3>
      <div className="space-y-2">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg text-left smooth-transition ${
              selectedCategory === category?.id
                ? 'bg-accent text-accent-foreground'
                : 'hover:bg-muted text-card-foreground'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Icon 
                name={category?.icon} 
                size={20} 
                className={selectedCategory === category?.id ? 'text-accent-foreground' : 'text-accent'} 
              />
              <span className="font-medium">{category?.name}</span>
            </div>
            <span className={`text-sm px-2 py-1 rounded-full ${
              selectedCategory === category?.id
                ? 'bg-accent-foreground/20 text-accent-foreground'
                : 'bg-muted text-muted-foreground'
            }`}>
              {skillCounts?.[category?.id] || 0}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;