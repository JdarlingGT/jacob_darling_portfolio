import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LearningTimeline = ({ learningHistory }) => {
  const [selectedYear, setSelectedYear] = useState(new Date()?.getFullYear());
  
  const years = [...new Set(learningHistory.map(item => new Date(item.date).getFullYear()))]?.sort((a, b) => b - a);
  const filteredHistory = learningHistory?.filter(item => new Date(item.date)?.getFullYear() === selectedYear);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'certification': return 'Award';
      case 'course': return 'BookOpen';
      case 'project': return 'Code';
      case 'workshop': return 'Users';
      default: return 'Star';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'certification': return 'text-success bg-success/10';
      case 'course': return 'text-accent bg-accent/10';
      case 'project': return 'text-warning bg-warning/10';
      case 'workshop': return 'text-destructive bg-destructive/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-card-foreground">Learning Timeline</h3>
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={20} className="text-muted-foreground" />
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e?.target?.value))}
            className="bg-muted border border-border rounded-lg px-3 py-2 text-card-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {years?.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-6">
          {filteredHistory?.map((item, index) => (
            <div key={item?.id} className="relative flex items-start space-x-4">
              {/* Timeline dot */}
              <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${getTypeColor(item?.type)}`}>
                <Icon name={getTypeIcon(item?.type)} size={20} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-card-foreground">{item?.title}</h4>
                    <p className="text-muted-foreground mb-2">{item?.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{new Date(item.date)?.toLocaleDateString()}</span>
                      </div>
                      {item?.duration && (
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{item?.duration}</span>
                        </div>
                      )}
                      {item?.provider && (
                        <div className="flex items-center space-x-1">
                          <Icon name="Building" size={14} />
                          <span>{item?.provider}</span>
                        </div>
                      )}
                    </div>

                    {item?.skills && item?.skills?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item?.skills?.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {item?.status === 'completed' && (
                    <div className="flex items-center space-x-1 text-success ml-4">
                      <Icon name="CheckCircle" size={16} />
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  )}
                  
                  {item?.status === 'in-progress' && (
                    <div className="flex items-center space-x-1 text-warning ml-4">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm font-medium">In Progress</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHistory?.length === 0 && (
          <div className="text-center py-8">
            <Icon name="Calendar" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No learning activities found for {selectedYear}</p>
          </div>
        )}
      </div>
      {/* Summary stats */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['certification', 'course', 'project', 'workshop']?.map(type => {
            const count = filteredHistory?.filter(item => item?.type === type)?.length;
            return (
              <div key={type} className="text-center">
                <div className={`w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center ${getTypeColor(type)}`}>
                  <Icon name={getTypeIcon(type)} size={20} />
                </div>
                <p className="text-2xl font-bold text-card-foreground">{count}</p>
                <p className="text-sm text-muted-foreground capitalize">{type}s</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LearningTimeline;