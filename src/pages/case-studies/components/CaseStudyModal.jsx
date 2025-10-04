import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyModal = ({ caseStudy, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !caseStudy) return null;

  const formatMetric = (value, type) => {
    if (type === 'percentage') return `${value}%`;
    if (type === 'currency') return `$${value?.toLocaleString()}`;
    if (type === 'number') return value?.toLocaleString();
    return value;
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'FileText' },
    { id: 'metrics', label: 'Results', icon: 'TrendingUp' },
    { id: 'process', label: 'Process', icon: 'Settings' },
    { id: 'testimonial', label: 'Testimonial', icon: 'MessageSquare' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === caseStudy?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? caseStudy?.gallery?.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative w-full max-w-6xl max-h-[90vh] mx-4 bg-background border border-border rounded-lg brand-shadow overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-conversion rounded-lg flex items-center justify-center">
              <span className="text-conversion-foreground font-bold">
                {caseStudy?.client?.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                {caseStudy?.title}
              </h2>
              <p className="text-text-secondary">
                {caseStudy?.client} • {caseStudy?.industry}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              iconSize={16}
            >
              Download PDF
            </Button>
            <button
              onClick={onClose}
              className="p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-muted smooth-transition"
            >
              <Icon name="X" size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex h-[calc(90vh-120px)]">
          {/* Sidebar Navigation */}
          <div className="w-64 border-r border-border p-6 overflow-y-auto">
            <nav className="space-y-2">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left smooth-transition ${
                    activeTab === tab?.id
                      ? 'bg-conversion text-conversion-foreground'
                      : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={tab?.icon} size={20} />
                  <span className="font-medium">{tab?.label}</span>
                </button>
              ))}
            </nav>

            {/* Quick Stats */}
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-text-primary mb-3">Quick Stats</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-text-secondary text-sm">Duration</span>
                  <span className="text-text-primary text-sm font-medium">
                    {caseStudy?.duration}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary text-sm">Category</span>
                  <span className="text-text-primary text-sm font-medium">
                    {caseStudy?.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary text-sm">Team Size</span>
                  <span className="text-text-primary text-sm font-medium">
                    {caseStudy?.teamSize}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'overview' && (
              <div className="p-8">
                {/* Image Gallery */}
                <div className="relative mb-8">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={caseStudy?.gallery?.[currentImageIndex]}
                      alt={`${caseStudy?.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {caseStudy?.gallery?.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 smooth-transition"
                        >
                          <Icon name="ChevronLeft" size={20} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 smooth-transition"
                        >
                          <Icon name="ChevronRight" size={20} />
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {caseStudy?.gallery?.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full smooth-transition ${
                                index === currentImageIndex
                                  ? 'bg-white' :'bg-white/50 hover:bg-white/75'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                      <Icon name="AlertTriangle" size={20} className="mr-2 text-warning" />
                      Challenge
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {caseStudy?.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                      <Icon name="Lightbulb" size={20} className="mr-2 text-conversion" />
                      Solution
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {caseStudy?.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-muted text-text-primary rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Results & Impact
                </h3>
                
                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {caseStudy?.keyMetrics?.map((metric, index) => (
                    <div key={index} className="bg-muted rounded-lg p-6 text-center">
                      <div className="text-4xl font-bold text-conversion mb-2">
                        {formatMetric(metric?.value, metric?.type)}
                      </div>
                      <div className="text-text-primary font-medium mb-1">
                        {metric?.label}
                      </div>
                      <div className="text-text-secondary text-sm">
                        {metric?.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Before/After Comparison */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-xl font-bold text-text-primary mb-4">
                    Before vs After
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-text-primary mb-3 flex items-center">
                        <Icon name="TrendingDown" size={16} className="mr-2 text-destructive" />
                        Before Implementation
                      </h5>
                      <ul className="space-y-2">
                        {caseStudy?.beforeAfter?.before?.map((item, index) => (
                          <li key={index} className="text-text-secondary flex items-start">
                            <Icon name="X" size={16} className="mr-2 text-destructive mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-text-primary mb-3 flex items-center">
                        <Icon name="TrendingUp" size={16} className="mr-2 text-success" />
                        After Implementation
                      </h5>
                      <ul className="space-y-2">
                        {caseStudy?.beforeAfter?.after?.map((item, index) => (
                          <li key={index} className="text-text-secondary flex items-start">
                            <Icon name="Check" size={16} className="mr-2 text-success mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Implementation Process
                </h3>
                
                <div className="space-y-6">
                  {caseStudy?.process?.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 w-12 h-12 bg-conversion rounded-full flex items-center justify-center text-conversion-foreground font-bold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-text-primary mb-2">
                          {step?.title}
                        </h4>
                        <p className="text-text-secondary mb-3">
                          {step?.description}
                        </p>
                        <div className="text-sm text-text-secondary">
                          <strong>Duration:</strong> {step?.duration} • 
                          <strong className="ml-2">Key Activities:</strong> {step?.activities?.join(', ')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'testimonial' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Client Testimonial
                </h3>
                
                <div className="bg-muted rounded-lg p-8">
                  <div className="flex items-start mb-6">
                    <Icon name="Quote" size={32} className="text-conversion mr-4 flex-shrink-0" />
                    <blockquote className="text-lg text-text-primary leading-relaxed italic">
                      {caseStudy?.testimonial?.quote}
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-conversion rounded-full flex items-center justify-center text-conversion-foreground font-bold text-xl mr-4">
                      {caseStudy?.testimonial?.author?.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">
                        {caseStudy?.testimonial?.author}
                      </div>
                      <div className="text-text-secondary">
                        {caseStudy?.testimonial?.position}
                      </div>
                      <div className="text-text-secondary text-sm">
                        {caseStudy?.client}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Testimonial */}
                {caseStudy?.testimonial?.videoUrl && (
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-text-primary mb-4">
                      Video Testimonial
                    </h4>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <Button
                        variant="default"
                        className="bg-conversion hover:bg-conversion/90"
                        iconName="Play"
                        iconPosition="left"
                        iconSize={20}
                      >
                        Play Video
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;