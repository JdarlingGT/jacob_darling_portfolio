import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DownloadableCV = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const cvData = {
    personalInfo: {
      name: 'Jacob Darling',
      title: 'Marketing Director & Systems Architect',
      email: 'hoosierdarling@gmail.com',
      phone: '+1 (317) 443-8091',
      address: 'Indianapolis, IN',
      linkedin: 'linkedin.com/in/jacobdarling',
      website: 'jacobdarling.dev'
    },
    summary: 'Full-stack digital transformation leader with expertise in marketing automation, systems architecture, and performance optimization. Proven track record of building scalable marketing ecosystems that drive measurable revenue growth and operational efficiency.',
    experience: [
      {
        title: 'Marketing Director & Systems Architect',
        company: 'Graston Technique®',
        location: 'Indianapolis, IN',
        period: 'Aug 2023 – Present',
        achievements: [
          'Led full-stack digital transformation for national healthcare education platform, operating as both brand strategist and systems architect',
          'Architected "Guardian" AI assistant and over 400 automated workflows, reducing manual data entry by hours per week and decreasing support tickets by 70%',
          'Engineered "Launchpad" provider directory and innovative e-commerce checkout system, transforming static assets into automated revenue engine with 40% conversion increase',
          'Overhauled entire analytics pipeline ("The Compass"), implementing new GTM architecture and reconfiguring Google Ads conversions for precise attribution and maximized marketing ROI',
          'Hardened web infrastructure ("The Fortress"), deploying multi-layered Cloudflare defense neutralizing ~85,000 malicious bot hits monthly',
          'Tuned server performance ("The Engine Room") to eliminate downtime and achieve 86% cache-hit ratio',
          'Designed "The Conductor" data pipeline integrating five disparate platforms (WooCommerce, LearnDash, Gravity Forms, FluentCRM) for unified customer data management'
        ]
      },
      {
        title: 'Interim Director of Marketing',
        company: 'Ultimate Technologies Group',
        location: 'Fishers, IN',
        period: 'Mar 2023 – Jul 2023',
        achievements: [
          'Stabilized marketing operations during critical leadership transition',
          'Streamlined lead generation workflows and improved GTM tracking',
          'Implemented new CRM efficiencies resulting in 40% improvement in campaign production timelines'
        ]
      },
      {
        title: 'Marketing Manager & Administrator',
        company: 'Riley Bennett Egloff, LLP',
        location: 'Indianapolis, IN',
        period: 'Jun 2015 – Mar 2023',
        achievements: [
          'Directed decade of marketing evolution from traditional outreach to fully digital operation',
          'Led comprehensive firm-wide digital rebrand and technical SEO overhaul resulting in 35% increase in qualified client inquiries',
          'Contributed to 50% increase in firm\'s annual revenue through strategic marketing planning and execution',
          'Transitioned firm from traditional to digital-first marketing, achieving 40% cost savings while increasing reach and impact',
          'Created and managed quarterly publication RBE Magazine, establishing key channel for thought leadership and community involvement'
        ]
      },
      {
        title: 'Marketing Coordinator',
        company: 'Deerfield Financial Advisors',
        location: 'Indianapolis, IN',
        period: 'Jun 2013 – Jun 2015',
        achievements: [
          'Implemented integrated marketing campaigns for financial services firm ensuring strict FINRA and SEC compliance',
          'Planned and executed over 20 client seminars, leading to 15% increase in client referrals'
        ]
      },
      {
        title: 'Marketing Coordinator',
        company: 'Pike Medical Consultants',
        location: 'Indianapolis, IN',
        period: 'Sep 2009 – Jun 2013',
        achievements: [
          'Directed all marketing initiatives, delivering average of 45% growth in patient visits over three-year period while maintaining positive ROI',
          'Led design, development, and marketing strategy for UrgentCare Indy website, building digital presence from ground up',
          'Integrated Clockwise MD online check-in system to reduce wait times and streamline patient onboarding'
        ]
      }
    ],
    skills: [
      'Marketing Automation & CRM Architecture',
      'AI Integration & Workflow Automation',
      'Performance Engineering & Optimization',
      'Security & Infrastructure Management',
      'Data Analytics & Attribution Modeling',
      'Digital Transformation Strategy',
      'E-commerce Platform Development',
      'Technical SEO & Conversion Optimization',
      'Multi-Platform System Integration',
      'Project Management & Team Leadership'
    ],
    education: [
      {
        degree: 'Digital Marketing & Systems Architecture',
        institution: 'Self-Directed Continuous Learning',
        year: 'Ongoing Professional Development'
      }
    ]
  };

  const generateCV = () => {
    setIsGenerating(true);
    
    // Create CV content as HTML
    const cvHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${cvData?.personalInfo?.name} - CV</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 40px 20px; }
        .header { text-align: center; border-bottom: 3px solid #3B82F6; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { font-size: 2.5em; color: #1E40AF; margin-bottom: 10px; }
        .header h2 { font-size: 1.3em; color: #6B7280; margin-bottom: 20px; }
        .contact-info { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; font-size: 0.9em; }
        .contact-info span { background: #F3F4F6; padding: 5px 10px; border-radius: 4px; }
        .section { margin: 30px 0; }
        .section h3 { font-size: 1.4em; color: #1E40AF; border-bottom: 2px solid #E5E7EB; padding-bottom: 5px; margin-bottom: 15px; }
        .summary { font-size: 1.1em; line-height: 1.7; color: #4B5563; font-style: italic; }
        .experience-item, .education-item { margin-bottom: 25px; }
        .experience-item h4 { font-size: 1.2em; color: #1F2937; margin-bottom: 5px; }
        .company-period { color: #6B7280; font-size: 0.95em; margin-bottom: 10px; }
        .achievements { list-style: none; }
        .achievements li { background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%233B82F6" viewBox="0 0 16 16"><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>') no-repeat left top; padding-left: 25px; margin-bottom: 8px; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px; }
        .skill-item { background: #EFF6FF; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #3B82F6; }
        @media print { body { max-width: none; margin: 0; padding: 20px; } }
    </style>
</head>
<body>
    <div class="header">
        <h1>${cvData?.personalInfo?.name}</h1>
        <h2>${cvData?.personalInfo?.title}</h2>
        <div class="contact-info">
            <span>📧 ${cvData?.personalInfo?.email}</span>
            <span>📱 ${cvData?.personalInfo?.phone}</span>
            <span>🏠 ${cvData?.personalInfo?.address}</span>
            <span>💼 ${cvData?.personalInfo?.linkedin}</span>
        </div>
    </div>

    <div class="section">
        <h3>Professional Summary</h3>
        <div class="summary">${cvData?.summary}</div>
    </div>

    <div class="section">
        <h3>Professional Experience</h3>
        ${cvData?.experience?.map(exp => `
            <div class="experience-item">
                <h4>${exp?.title}</h4>
                <div class="company-period">${exp?.company} | ${exp?.location} • ${exp?.period}</div>
                <ul class="achievements">
                    ${exp?.achievements?.map(achievement => `<li>${achievement}</li>`)?.join('')}
                </ul>
            </div>
        `)?.join('')}
    </div>

    <div class="section">
        <h3>Core Competencies</h3>
        <div class="skills-grid">
            ${cvData?.skills?.map(skill => `<div class="skill-item">${skill}</div>`)?.join('')}
        </div>
    </div>

    <div class="section">
        <h3>Education & Development</h3>
        ${cvData?.education?.map(edu => `
            <div class="education-item">
                <h4>${edu?.degree}</h4>
                <div class="company-period">${edu?.institution} • ${edu?.year}</div>
            </div>
        `)?.join('')}
    </div>
</body>
</html>`;

    // Create and download the file
    const blob = new Blob([cvHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${cvData?.personalInfo?.name?.replace(' ', '_')}_CV.html`;
    document.body?.appendChild(a);
    a?.click();
    document.body?.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
  };

  const generatePDF = () => {
    setIsGenerating(true);
    // Simple approach: open the CV in a new window for print/save as PDF
    const cvContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>${cvData?.personalInfo?.name} - CV</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 40px; }
            .header { text-align: center; border-bottom: 2px solid #3B82F6; padding-bottom: 20px; margin-bottom: 30px; }
            .header h1 { font-size: 28px; color: #1E40AF; margin-bottom: 8px; }
            .header h2 { font-size: 18px; color: #666; margin-bottom: 15px; }
            .contact-info { font-size: 12px; }
            .section { margin: 25px 0; }
            .section h3 { font-size: 16px; color: #1E40AF; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 12px; }
            .summary { font-size: 14px; line-height: 1.6; color: #555; }
            .experience-item { margin-bottom: 20px; }
            .experience-item h4 { font-size: 14px; font-weight: bold; margin-bottom: 4px; }
            .company-period { color: #666; font-size: 12px; margin-bottom: 8px; }
            .achievements { font-size: 12px; margin-left: 20px; }
            .achievements li { margin-bottom: 4px; }
            .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; font-size: 12px; }
            .skill-item { background: #f5f5f5; padding: 6px 10px; border-radius: 4px; }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>${cvData?.personalInfo?.name}</h1>
            <h2>${cvData?.personalInfo?.title}</h2>
            <div class="contact-info">
                ${cvData?.personalInfo?.email} | ${cvData?.personalInfo?.phone} | ${cvData?.personalInfo?.address}
            </div>
        </div>
        <div class="section">
            <h3>Professional Summary</h3>
            <div class="summary">${cvData?.summary}</div>
        </div>
        <div class="section">
            <h3>Professional Experience</h3>
            ${cvData?.experience?.map(exp => `
                <div class="experience-item">
                    <h4>${exp?.title} - ${exp?.company}</h4>
                    <div class="company-period">${exp?.location} • ${exp?.period}</div>
                    <ul class="achievements">
                        ${exp?.achievements?.map(achievement => `<li>${achievement}</li>`)?.join('')}
                    </ul>
                </div>
            `)?.join('')}
        </div>
        <div class="section">
            <h3>Core Competencies</h3>
            <div class="skills-grid">
                ${cvData?.skills?.map(skill => `<div class="skill-item">${skill}</div>`)?.join('')}
            </div>
        </div>
        <div class="section">
            <h3>Education & Development</h3>
            ${cvData?.education?.map(edu => `
                <div class="education-item">
                    <h4>${edu?.degree}</h4>
                    <div class="company-period">${edu?.institution} - ${edu?.year}</div>
                </div>
            `)?.join('')}
        </div>
        <script>
            window.onload = function() {
                window.print();
                setTimeout(function() { window.close(); }, 1000);
            };
        </script>
    </body>
    </html>`;

    const newWindow = window.open('', '_blank');
    newWindow?.document?.write(cvContent);
    newWindow?.document?.close();

    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Download My CV
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get a comprehensive overview of my experience, skills, and achievements. 
            Choose your preferred format for easy viewing and sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CV Preview */}
          <div className="bg-background border border-border rounded-xl overflow-hidden brand-shadow">
            <div className="p-6 border-b border-border bg-muted">
              <h3 className="text-xl font-bold text-text-primary mb-2">CV Preview</h3>
              <p className="text-sm text-text-secondary">
                Professional resume with comprehensive work history and technical expertise
              </p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-border">
                  <h4 className="text-lg font-bold text-text-primary">{cvData?.personalInfo?.name}</h4>
                  <p className="text-conversion font-medium">{cvData?.personalInfo?.title}</p>
                  <div className="flex flex-wrap justify-center gap-3 mt-3 text-xs">
                    <span className="bg-muted px-2 py-1 rounded">{cvData?.personalInfo?.email}</span>
                    <span className="bg-muted px-2 py-1 rounded">{cvData?.personalInfo?.phone}</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-text-primary mb-2">Professional Summary</h5>
                  <p className="text-sm text-text-secondary line-clamp-3">{cvData?.summary}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-text-primary mb-2">Experience Highlights</h5>
                  {cvData?.experience?.slice(0, 2)?.map((exp, index) => (
                    <div key={index} className="mb-3">
                      <h6 className="text-sm font-medium text-text-primary">{exp?.title}</h6>
                      <p className="text-xs text-text-secondary">{exp?.company} • {exp?.period}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h5 className="font-semibold text-text-primary mb-2">Key Skills</h5>
                  <div className="flex flex-wrap gap-1">
                    {cvData?.skills?.slice(0, 6)?.map((skill, index) => (
                      <span key={index} className="text-xs bg-conversion/10 text-conversion px-2 py-1 rounded">
                        {skill?.split(' ')?.[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Options */}
          <div className="space-y-6">
            <div className="bg-background border border-border rounded-xl p-8 brand-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-conversion/10 rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={24} className="text-conversion" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">HTML Format</h3>
                  <p className="text-sm text-text-secondary">
                    Formatted web page with professional styling
                  </p>
                </div>
              </div>
              
              <ul className="text-sm text-text-secondary space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-conversion" />
                  <span>Professional formatting and design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-conversion" />
                  <span>Easy to view in any web browser</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-conversion" />
                  <span>Print-friendly layout</span>
                </li>
              </ul>
              
              <Button
                variant="default"
                fullWidth
                onClick={generateCV}
                disabled={isGenerating}
                iconName={isGenerating ? "Loader2" : "Download"}
                iconPosition="left"
                iconSize={16}
                className={isGenerating ? "animate-spin" : ""}
              >
                {isGenerating ? 'Generating...' : 'Download HTML CV'}
              </Button>
            </div>

            <div className="bg-background border border-border rounded-xl p-8 brand-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-trust-builder/10 rounded-lg flex items-center justify-center">
                  <Icon name="Printer" size={24} className="text-trust-builder" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Print/PDF Version</h3>
                  <p className="text-sm text-text-secondary">
                    Print-optimized version for PDF creation
                  </p>
                </div>
              </div>
              
              <ul className="text-sm text-text-secondary space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-trust-builder" />
                  <span>Optimized for printing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-trust-builder" />
                  <span>Can be saved as PDF from browser</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-trust-builder" />
                  <span>Perfect for ATS systems</span>
                </li>
              </ul>
              
              <Button
                variant="outline"
                fullWidth
                onClick={generatePDF}
                disabled={isGenerating}
                iconName={isGenerating ? "Loader2" : "Printer"}
                iconPosition="left"
                iconSize={16}
                className={isGenerating ? "animate-spin" : ""}
              >
                {isGenerating ? 'Generating...' : 'Open Print Version'}
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-background border border-border rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} className="text-conversion mt-1" />
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Need a Custom Format?</h4>
                  <p className="text-sm text-text-secondary mb-3">
                    I can provide my CV in specific formats required by your organization or ATS system.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open('mailto:hoosierdarling@gmail.com?subject=Custom CV Format Request', '_blank')}
                    iconName="Mail"
                    iconPosition="left"
                    iconSize={14}
                  >
                    Request Custom Format
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadableCV;