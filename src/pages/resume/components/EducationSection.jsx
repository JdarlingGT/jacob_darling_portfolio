import React from 'react';
import Icon from '../../../components/AppIcon';

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Business Administration (MBA)",
      field: "Marketing & Technology Management",
      school: "Stanford Graduate School of Business",
      location: "Stanford, CA",
      duration: "09/2014 - 06/2016",
      gpa: "3.8/4.0",
      honors: "Magna Cum Laude",
      coursework: [
        "Digital Marketing Strategy",
        "Data Analytics for Marketing",
        "Technology Innovation Management",
        "Consumer Behavior Analysis",
        "Marketing Automation Systems"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Science (BS)",
      field: "Computer Science with Marketing Minor",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      duration: "08/2010 - 05/2014",
      gpa: "3.7/4.0",
      honors: "Cum Laude",
      coursework: [
        "Database Systems",
        "Web Development",
        "Statistics & Probability",
        "Marketing Research Methods",
        "Consumer Psychology"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Salesforce Certified Marketing Cloud Administrator",
      issuer: "Salesforce",
      date: "03/2024",
      credentialId: "SF-MCA-2024-789",
      verifyLink: "https://trailhead.salesforce.com/credentials/verification"
    },
    {
      id: 2,
      name: "Google Analytics 4 Certified",
      issuer: "Google",
      date: "01/2024",
      credentialId: "GA4-CERT-456",
      verifyLink: "https://skillshop.exceedlms.com/student/award/verification"
    },
    {
      id: 3,
      name: "HubSpot Marketing Software Certified",
      issuer: "HubSpot Academy",
      date: "11/2023",
      credentialId: "HS-MS-123",
      verifyLink: "https://academy.hubspot.com/achievements/verification"
    },
    {
      id: 4,
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "08/2023",
      credentialId: "AWS-SAA-789",
      verifyLink: "https://aws.amazon.com/verification/certified"
    },
    {
      id: 5,
      name: "Adobe Certified Expert - Experience Manager",
      issuer: "Adobe",
      date: "05/2023",
      credentialId: "ACE-AEM-456",
      verifyLink: "https://www.adobe.com/training-services/certification/verification.html"
    },
    {
      id: 6,
      name: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "02/2023",
      credentialId: "TDS-2023-123",
      verifyLink: "https://www.tableau.com/learn/certification/verification"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Education */}
      <div className="bg-card border border-border rounded-lg p-8">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-trust-builder rounded-lg flex items-center justify-center">
            <Icon name="GraduationCap" size={20} className="text-trust-builder-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary">Education</h2>
        </div>

        <div className="space-y-8">
          {education?.map((edu, index) => (
            <div key={edu?.id} className="relative">
              {/* Timeline Line */}
              {index !== education?.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-trust-builder rounded-full border-2 border-background"></div>
              
              {/* Content */}
              <div className="ml-16">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">{edu?.degree}</h3>
                    <p className="text-trust-builder font-medium mb-2">{edu?.field}</p>
                    <div className="flex items-center space-x-4 text-text-secondary mb-2">
                      <span className="font-medium">{edu?.school}</span>
                      <span className="flex items-center space-x-1">
                        <Icon name="MapPin" size={14} />
                        <span>{edu?.location}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span>GPA: {edu?.gpa}</span>
                      <span className="px-2 py-1 bg-trust-builder/10 text-trust-builder rounded text-xs">
                        {edu?.honors}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Calendar" size={16} />
                    <span className="font-medium">{edu?.duration}</span>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu?.coursework?.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full border border-border"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Certifications */}
      <div className="bg-card border border-border rounded-lg p-8">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-cta-warm rounded-lg flex items-center justify-center">
            <Icon name="Award" size={20} className="text-cta-warm-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary">Professional Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications?.map((cert) => (
            <div key={cert?.id} className="border border-border rounded-lg p-6 hover:border-cta-warm smooth-transition">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary mb-2">{cert?.name}</h3>
                  <p className="text-cta-warm font-medium mb-1">{cert?.issuer}</p>
                  <div className="flex items-center space-x-2 text-text-secondary text-sm">
                    <Icon name="Calendar" size={14} />
                    <span>Issued: {cert?.date}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-cta-warm/10 rounded-lg flex items-center justify-center">
                  <Icon name="Award" size={20} className="text-cta-warm" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Hash" size={14} />
                  <span>ID: {cert?.credentialId}</span>
                </div>
                <a
                  href={cert?.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-cta-warm hover:text-cta-warm/80 smooth-transition"
                >
                  <Icon name="ExternalLink" size={14} />
                  <span>Verify Credential</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;