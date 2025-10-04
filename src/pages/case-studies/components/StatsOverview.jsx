import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000)?.toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000)?.toFixed(1)}K`;
    }
    return num?.toString();
  };

  return (
    <div className="bg-card border border-border rounded-lg p-8 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-2">
          Proven Results Across Industries
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Our case studies demonstrate measurable impact through strategic marketing automation 
          and systems architecture implementations.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats?.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-conversion/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name={stat?.icon} size={24} className="text-conversion" />
            </div>
            <div className="text-3xl font-bold text-text-primary mb-2">
              {stat?.prefix}{formatNumber(stat?.value)}{stat?.suffix}
            </div>
            <div className="text-text-secondary font-medium">
              {stat?.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsOverview;