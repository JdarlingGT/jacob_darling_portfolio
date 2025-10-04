import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ExperienceHero from './components/ExperienceHero';
import CareerTimeline from './components/CareerTimeline';
import SkillsProgression from './components/SkillsProgression';
import EducationSection from './components/EducationSection';
import DownloadResume from './components/DownloadResume';
import AchievementMetrics from './components/AchievementMetrics';
import ProfessionalDevelopment from './components/ProfessionalDevelopment';

const Experience = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Experience & Career Journey | Jacob Darling</title>
        <meta name="description" content="Explore Jacob Darling's complete professional experience, career progression, and achievements in marketing automation, systems architecture, and digital transformation." />
        <meta name="keywords" content="professional experience, career history, marketing director, systems architect, digital transformation, resume" />
      </Helmet>

      <Header />

      <main className="pt-20">
        <ExperienceHero />
        
        <AchievementMetrics />
        
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CareerTimeline 
              activeItem={activeTimelineItem}
              setActiveItem={setActiveTimelineItem}
            />
          </div>
        </section>

        <SkillsProgression />
        
        <EducationSection />
        
        <ProfessionalDevelopment />
        
        <DownloadResume />
      </main>
    </div>
  );
};

export default Experience;