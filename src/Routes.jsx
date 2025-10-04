import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Toolbox from './pages/toolbox';
import Resume from './pages/resume';
import ContactPage from './pages/contact';
import Projects from './pages/projects';
import AboutPage from './pages/about';
import AboutMePage from './pages/about-me';
import AchievementsPage from './pages/achievements';
import CaseStudies from './pages/case-studies';
import Homepage from './pages/homepage';
import CaseStudyDetail from './pages/case-study-detail';
import ProjectDetail from './pages/project-detail';
import Testimonials from './pages/testimonials';
import Experience from './pages/experience';
import BlogPage from './pages/blog';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutPage />} />
        <Route path="/toolbox" element={<Toolbox />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/project-detail/:id" element={<ProjectDetail />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;