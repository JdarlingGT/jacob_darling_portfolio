import React from 'react';
import Icon from '../../../components/AppIcon';

const ToolboxStats = ({ skills }) => {
  // Calculate statistics
  const totalSkills = skills?.length;
  const expertSkills = skills?.filter(skill => skill?.proficiency >= 90)?.length;
  const advancedSkills = skills?.filter(skill => skill?.proficiency >= 75 && skill?.proficiency < 90)?.length;
  const recentlyUsed = skills?.filter(skill => {
    const lastUsedDate = new Date(skill.lastUsed);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo?.setDate(thirtyDaysAgo?.getDate() - 30);
    return lastUsedDate >= thirtyDaysAgo;
  })?.length;

  const averageProficiency = Math.round(
    skills?.reduce((sum, skill) => sum + skill?.proficiency, 0) / skills?.length
  );

  const categories = [...new Set(skills.map(skill => skill.category))];
  const totalProjects = [...new Set(skills.flatMap(skill => skill.projects))]?.length;

  const stats = [
    {
      id: 'total',
      label: 'Total Skills',
      value: totalSkills,
      icon: 'Code',
      color: 'text-accent bg-accent/10',
      description: 'Across all categories'
    },
    {
      id: 'expert',
      label: 'Expert Level',
      value: expertSkills,
      icon: 'Star',
      color: 'text-success bg-success/10',
      description: '90%+ proficiency'
    },
    {
      id: 'advanced',
      label: 'Advanced Level',
      value: advancedSkills,
      icon: 'TrendingUp',
      color: 'text-warning bg-warning/10',
      description: '75-89% proficiency'
    },
    {
      id: 'recent',
      label: 'Recently Used',
      value: recentlyUsed,
      icon: 'Clock',
      color: 'text-destructive bg-destructive/10',
      description: 'Last 30 days'
    },
    {
      id: 'average',
      label: 'Avg Proficiency',
      value: `${averageProficiency}%`,
      icon: 'BarChart',
      color: 'text-accent bg-accent/10',
      description: 'Overall skill level'
    },
    {
      id: 'categories',
      label: 'Categories',
      value: categories?.length,
      icon: 'Grid',
      color: 'text-success bg-success/10',
      description: 'Skill domains'
    },
    {
      id: 'projects',
      label: 'Projects',
      value: totalProjects,
      icon: 'Folder',
      color: 'text-warning bg-warning/10',
      description: 'Applied in practice'
    },
    {
      id: 'experience',
      label: 'Years Experience',
      value: '8+',
      icon: 'Calendar',
      color: 'text-destructive bg-destructive/10',
      description: 'Professional experience'
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-card-foreground">Skills Overview</h3>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="TrendingUp" size={16} />
          <span>Updated {new Date()?.toLocaleDateString()}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats?.map((stat) => (
          <div
            key={stat?.id}
            className="bg-muted rounded-lg p-4 hover:bg-muted/80 smooth-transition"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat?.color}`}>
                <Icon name={stat?.icon} size={20} />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-card-foreground">{stat?.value}</p>
              </div>
            </div>
            <div>
              <p className="font-medium text-card-foreground text-sm">{stat?.label}</p>
              <p className="text-xs text-muted-foreground">{stat?.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Proficiency distribution */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="font-semibold text-card-foreground mb-4">Proficiency Distribution</h4>
        <div className="space-y-3">
          {[
            { label: 'Expert (90-100%)', count: expertSkills, color: 'bg-success' },
            { label: 'Advanced (75-89%)', count: advancedSkills, color: 'bg-accent' },
            { label: 'Intermediate (60-74%)', count: skills?.filter(s => s?.proficiency >= 60 && s?.proficiency < 75)?.length, color: 'bg-warning' },
            { label: 'Beginner (0-59%)', count: skills?.filter(s => s?.proficiency < 60)?.length, color: 'bg-muted-foreground' }
          ]?.map((level) => (
            <div key={level?.label} className="flex items-center space-x-3">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-card-foreground">{level?.label}</span>
                  <span className="text-muted-foreground">{level?.count} skills</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${level?.color} transition-all duration-500`}
                    style={{ width: `${(level?.count / totalSkills) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolboxStats;