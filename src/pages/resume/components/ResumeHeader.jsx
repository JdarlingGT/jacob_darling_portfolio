import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResumeHeader = ({ onDownload }) => {
  const contactInfo = [
    { icon: 'Mail', text: 'hoosierdarling@gmail.com', type: 'email' },
    { icon: 'Phone', text: '317 443-8091', type: 'phone' },
    { icon: 'MapPin', text: 'Indianapolis, IN', type: 'location' },
    { icon: 'Linkedin', text: 'linkedin.com/in/jacobdarling', type: 'linkedin' },
    { icon: 'Github', text: 'github.com/JdarlingGT', type: 'github' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-8 mb-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-conversion">
            <Image
              src="/assets/images/Gemini_Generated_Image_klonsaklonsaklon-1759116279741.png"
              alt="Jacob Darling Professional Headshot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header Content */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-text-primary mb-2">Jacob Darling</h1>
            <h2 className="text-xl text-conversion font-semibold mb-4">Marketing Technology Leader</h2>
            <p className="text-text-secondary leading-relaxed max-w-3xl">
              Experienced marketing technology professional specializing in building scalable digital solutions 
              that drive business growth. Proven expertise in web development, marketing automation, and creating 
              high-performing websites for healthcare, legal, and local businesses across Indianapolis and beyond.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {contactInfo?.map((contact, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <Icon name={contact?.icon} size={16} className="text-text-secondary" />
                </div>
                <span className="text-text-secondary text-sm">{contact?.text}</span>
              </div>
            ))}
          </div>

          {/* Download Actions */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="default"
              onClick={() => onDownload('pdf')}
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
              iconName="Download"
              iconPosition="left"
              iconSize={16}
            >
              Download PDF
            </Button>
            <Button
              variant="outline"
              onClick={() => onDownload('word')}
              iconName="FileText"
              iconPosition="left"
              iconSize={16}
            >
              Download Word
            </Button>
            <Button
              variant="ghost"
              onClick={() => onDownload('txt')}
              iconName="File"
              iconPosition="left"
              iconSize={16}
            >
              Plain Text
            </Button>
            <Button
              variant="ghost"
              onClick={() => window.print()}
              iconName="Printer"
              iconPosition="left"
              iconSize={16}
            >
              Print
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;