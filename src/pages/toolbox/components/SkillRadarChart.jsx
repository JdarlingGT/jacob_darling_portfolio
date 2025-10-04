import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillRadarChart = ({ skills, selectedCategory }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Filter skills by category
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills?.filter(skill => skill?.category === selectedCategory);

  // Calculate radar chart points for up to 8 skills
  const displaySkills = filteredSkills?.slice(0, 8);
  const angleStep = (2 * Math.PI) / displaySkills?.length;
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 120;

  const getRadarPoints = (proficiency) => {
    return displaySkills?.map((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const radius = (proficiency / 100) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return `${x},${y}`;
    })?.join(' ');
  };

  const getSkillPosition = (index, radius = maxRadius + 20) => {
    const angle = index * angleStep - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
  };

  if (displaySkills?.length === 0) {
    return (
      <div className="bg-card rounded-xl p-8 text-center">
        <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground">No skills found for this category</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-card-foreground">Skills Radar</h3>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span>Current Level</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 border-2 border-accent rounded-full"></div>
            <span>Target Level</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <svg width="300" height="300" className="mx-auto">
          {/* Grid circles */}
          {[20, 40, 60, 80, 100]?.map((percentage) => (
            <circle
              key={percentage}
              cx={centerX}
              cy={centerY}
              r={(percentage / 100) * maxRadius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          ))}

          {/* Grid lines */}
          {displaySkills?.map((_, index) => {
            const angle = index * angleStep - Math.PI / 2;
            const endX = centerX + maxRadius * Math.cos(angle);
            const endY = centerY + maxRadius * Math.sin(angle);
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
              />
            );
          })}

          {/* Current proficiency polygon */}
          <polygon
            points={getRadarPoints(100)}
            fill="rgba(59, 130, 246, 0.2)"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Target proficiency polygon */}
          <polygon
            points={getRadarPoints(120)}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.6"
          />

          {/* Skill points */}
          {displaySkills?.map((skill, index) => {
            const angle = index * angleStep - Math.PI / 2;
            const radius = (skill?.proficiency / 100) * maxRadius;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            return (
              <circle
                key={skill?.id}
                cx={x}
                cy={y}
                r="6"
                fill="#3b82f6"
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer hover:r-8 transition-all"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              />
            );
          })}

          {/* Skill labels */}
          {displaySkills?.map((skill, index) => {
            const position = getSkillPosition(index);
            return (
              <text
                key={`label-${skill?.id}`}
                x={position?.x}
                y={position?.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-card-foreground text-sm font-medium"
                style={{ fontSize: '12px' }}
              >
                {skill?.name}
              </text>
            );
          })}
        </svg>

        {/* Hover tooltip */}
        {hoveredSkill && (
          <div className="absolute top-4 right-4 bg-popover border border-border rounded-lg p-4 min-w-64 brand-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name={hoveredSkill?.icon} size={24} className="text-accent" />
              <div>
                <h4 className="font-semibold text-popover-foreground">{hoveredSkill?.name}</h4>
                <p className="text-sm text-muted-foreground">{hoveredSkill?.category}</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Proficiency</span>
                <span className="text-popover-foreground font-medium">{hoveredSkill?.proficiency}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${hoveredSkill?.proficiency}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Recent Projects:</p>
              <div className="flex flex-wrap gap-1">
                {hoveredSkill?.projects?.slice(0, 3)?.map((project, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {['Beginner', 'Intermediate', 'Advanced', 'Expert']?.map((level, index) => (
          <div key={level} className="text-center">
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div 
                className="bg-accent h-2 rounded-full"
                style={{ width: `${(index + 1) * 25}%` }}
              ></div>
            </div>
            <span className="text-xs text-muted-foreground">{level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillRadarChart;