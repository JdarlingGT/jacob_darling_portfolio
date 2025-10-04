import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillGrid = ({ skills, selectedCategory, searchTerm }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Filter skills based on category and search
  const filteredSkills = skills?.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill?.category === selectedCategory;
    const matchesSearch = skill?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         skill?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return 'bg-success';
    if (proficiency >= 75) return 'bg-accent';
    if (proficiency >= 60) return 'bg-warning';
    return 'bg-muted-foreground';
  };

  const getProficiencyLabel = (proficiency) => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 75) return 'Advanced';
    if (proficiency >= 60) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills?.map((skill) => (
          <div
            key={skill?.id}
            className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 smooth-transition cursor-pointer group"
            onClick={() => setSelectedSkill(skill)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 smooth-transition">
                  <Icon name={skill?.icon} size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground group-hover:text-accent smooth-transition">
                    {skill?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{skill?.category}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(skill?.proficiency)} text-white`}>
                  {getProficiencyLabel(skill?.proficiency)}
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {skill?.description}
            </p>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-card-foreground font-medium">{skill?.proficiency}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${getProficiencyColor(skill?.proficiency)}`}
                    style={{ width: `${skill?.proficiency}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Experience</p>
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-card-foreground">{skill?.experience}</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Recent Projects</p>
                <div className="flex flex-wrap gap-1">
                  {skill?.projects?.slice(0, 2)?.map((project, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                    >
                      {project}
                    </span>
                  ))}
                  {skill?.projects?.length > 2 && (
                    <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                      +{skill?.projects?.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {skill?.certifications && skill?.certifications?.length > 0 && (
                <div className="flex items-center space-x-2 pt-2 border-t border-border">
                  <Icon name="Award" size={16} className="text-accent" />
                  <span className="text-sm text-accent font-medium">
                    {skill?.certifications?.length} Certification{skill?.certifications?.length > 1 ? 's' : ''}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {filteredSkills?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold text-card-foreground mb-2">No skills found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}
      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-card rounded-xl border border-border brand-shadow max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Icon name={selectedSkill?.icon} size={32} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">{selectedSkill?.name}</h2>
                    <p className="text-muted-foreground">{selectedSkill?.category}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getProficiencyColor(selectedSkill?.proficiency)} text-white`}>
                        {getProficiencyLabel(selectedSkill?.proficiency)} - {selectedSkill?.proficiency}%
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedSkill(null)}
                  iconName="X"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedSkill?.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-3">Experience</h3>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={20} className="text-accent" />
                      <span className="text-card-foreground">{selectedSkill?.experience}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-3">Last Used</h3>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={20} className="text-accent" />
                      <span className="text-card-foreground">{selectedSkill?.lastUsed}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">Projects</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedSkill?.projects?.map((project, idx) => (
                      <div key={idx} className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                        <Icon name="Folder" size={16} className="text-accent" />
                        <span className="text-card-foreground">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedSkill?.certifications && selectedSkill?.certifications?.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-3">Certifications</h3>
                    <div className="space-y-3">
                      {selectedSkill?.certifications?.map((cert, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Icon name="Award" size={20} className="text-accent" />
                            <div>
                              <p className="font-medium text-card-foreground">{cert?.name}</p>
                              <p className="text-sm text-muted-foreground">{cert?.issuer} • {cert?.date}</p>
                            </div>
                          </div>
                          {cert?.verified && (
                            <div className="flex items-center space-x-1 text-success">
                              <Icon name="CheckCircle" size={16} />
                              <span className="text-sm font-medium">Verified</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillGrid;