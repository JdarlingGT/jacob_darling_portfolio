import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import ResumeHeader from './components/ResumeHeader';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('experience');
  const [downloadStatus, setDownloadStatus] = useState('');

  const sections = [
    { id: 'experience', label: 'Experience', icon: 'Briefcase' },
    { id: 'education', label: 'Education', icon: 'GraduationCap' },
    { id: 'skills', label: 'Skills', icon: 'Zap' },
    { id: 'achievements', label: 'Achievements', icon: 'Trophy' }
  ];

  const handleDownload = (format) => {
    setDownloadStatus(`Downloading ${format?.toUpperCase()}...`);
    
    // Mock download simulation
    setTimeout(() => {
      setDownloadStatus(`${format?.toUpperCase()} downloaded successfully!`);
      setTimeout(() => setDownloadStatus(''), 3000);
    }, 1500);

    // In a real application, this would trigger actual file download
    console.log(`Downloading resume in ${format} format`);
  };

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'experience':
        return <ExperienceSection />;
      case 'education':
        return <EducationSection />;
      case 'skills':
        return <SkillsSection />;
      case 'achievements':
        return <AchievementsSection />;
      default:
        return <ExperienceSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Resume Header */}
          <ResumeHeader onDownload={handleDownload} />

          {/* Download Status */}
          {downloadStatus && (
            <div className="mb-8 p-4 bg-trust-builder/10 border border-trust-builder/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="Download" size={16} className="text-trust-builder" />
                <span className="text-trust-builder font-medium">{downloadStatus}</span>
              </div>
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="border-b border-border">
              <nav className="flex space-x-8 overflow-x-auto">
                {sections?.map((section) => (
                  <button
                    key={section?.id}
                    onClick={() => handleSectionChange(section?.id)}
                    className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap smooth-transition ${
                      activeSection === section?.id
                        ? 'border-conversion text-conversion' :'border-transparent text-text-secondary hover:text-text-primary hover:border-border'
                    }`}
                  >
                    <Icon name={section?.icon} size={16} />
                    <span>{section?.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Section Content */}
          <div className="mb-12">
            {renderActiveSection()}
          </div>

          {/* ATS-Friendly Notice */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="FileText" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">ATS-Optimized Resume Available</h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  This resume is optimized for Applicant Tracking Systems (ATS) with proper formatting, 
                  keyword optimization, and structured content. Available in multiple formats for different 
                  application requirements.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload('ats-pdf')}
                    iconName="FileText"
                    iconPosition="left"
                    iconSize={16}
                  >
                    ATS-Friendly PDF
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload('ats-word')}
                    iconName="FileText"
                    iconPosition="left"
                    iconSize={16}
                  >
                    ATS-Friendly Word
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-conversion/10 to-accent/10 border border-conversion/20 rounded-lg p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Ready to Discuss Opportunities?</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Let's explore how my marketing technology expertise can drive measurable results for your organization. 
                Schedule a conversation to discuss specific challenges and strategic initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  onClick={() => window.location.href = '/contact'}
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground conversion-glow"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={16}
                >
                  Schedule Interview
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/contact'}
                  iconName="Mail"
                  iconPosition="left"
                  iconSize={16}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          .print-break {
            page-break-before: always;
          }
          
          .print-avoid-break {
            page-break-inside: avoid;
          }
          
          body {
            background: white !important;
            color: black !important;
          }
          
          .bg-card,
          .bg-background {
            background: white !important;
          }
          
          .text-text-primary,
          .text-text-secondary {
            color: black !important;
          }
          
          .border-border {
            border-color: #e5e5e5 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;