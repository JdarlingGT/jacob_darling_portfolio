import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    relationship: 'client',
    testimonial: '',
    projectType: '',
    allowPublic: false,
    linkedinUrl: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-conversion/10 border border-conversion/20 rounded-xl p-12">
            <div className="w-16 h-16 bg-conversion rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={32} className="text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Thank You for Your Testimonial!
            </h2>
            
            <p className="text-text-secondary mb-8">
              Your testimonial has been received and will be reviewed before being published. 
              I appreciate you taking the time to share your experience.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
                <Icon name="Clock" size={16} />
                <span>Review process typically takes 1-2 business days</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
                <Icon name="Mail" size={16} />
                <span>You'll be notified once your testimonial is published</span>
              </div>
            </div>
            
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  role: '',
                  relationship: 'client',
                  testimonial: '',
                  projectType: '',
                  allowPublic: false,
                  linkedinUrl: ''
                });
              }}
              className="mt-8"
            >
              Submit Another Testimonial
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Share Your <span className="text-conversion">Experience</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Have we worked together? I'd love to hear about your experience and how our 
            collaboration impacted your business. Your feedback helps others understand 
            the value of strategic marketing technology implementation.
          </p>
        </div>

        <div className="bg-background border border-border rounded-xl p-8 lg:p-12 brand-shadow">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="your.email@company.com"
                  required
                  className="w-full"
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Company <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData?.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="role"
                  value={formData?.role}
                  onChange={handleInputChange}
                  placeholder="Your job title"
                  required
                  className="w-full"
                />
              </div>
            </div>

            {/* Relationship & Project Type */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Working Relationship <span className="text-red-500">*</span>
                </label>
                <select
                  name="relationship"
                  value={formData?.relationship}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-conversion/20 focus:border-conversion transition-colors"
                >
                  <option value="client">Client - I hired Jacob</option>
                  <option value="colleague">Colleague - We worked together</option>
                  <option value="supervisor">Supervisor - Jacob reported to me</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Project Type
                </label>
                <Input
                  type="text"
                  name="projectType"
                  value={formData?.projectType}
                  onChange={handleInputChange}
                  placeholder="e.g., Marketing Automation, Website Development"
                  className="w-full"
                />
              </div>
            </div>

            {/* LinkedIn URL */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">
                LinkedIn Profile (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Icon name="ExternalLink" size={18} className="text-text-secondary" />
                </div>
                <Input
                  type="url"
                  name="linkedinUrl"
                  value={formData?.linkedinUrl}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full pl-12"
                />
              </div>
              <p className="text-sm text-text-secondary mt-2">
                Including your LinkedIn profile helps verify your testimonial
              </p>
            </div>

            {/* Testimonial */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">
                Your Testimonial <span className="text-red-500">*</span>
              </label>
              <textarea
                name="testimonial"
                value={formData?.testimonial}
                onChange={handleInputChange}
                placeholder="Please share your experience working with Jacob. What challenges did you face? How did Jacob help solve them? What were the measurable outcomes?"
                required
                rows={8}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-conversion/20 focus:border-conversion transition-colors resize-vertical"
              />
              <p className="text-sm text-text-secondary mt-2">
                Specific results and metrics make testimonials more valuable
              </p>
            </div>

            {/* Permissions */}
            <div className="bg-muted border border-border rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="allowPublic"
                  checked={formData?.allowPublic}
                  onChange={handleInputChange}
                  id="allowPublic"
                  className="mt-1 w-4 h-4 text-conversion bg-background border-border rounded focus:ring-conversion/20"
                />
                <label htmlFor="allowPublic" className="text-sm text-text-secondary leading-relaxed">
                  <span className="font-medium text-text-primary">Permission to publish:</span> I give 
                  permission for this testimonial to be published on Jacob's website, portfolio, 
                  and marketing materials. I understand this will be publicly visible and may be 
                  used for promotional purposes.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                variant="default"
                size="lg"
                disabled={isSubmitting || !formData?.name || !formData?.email || !formData?.company || !formData?.role || !formData?.testimonial}
                iconName={isSubmitting ? "Loader2" : "Send"}
                iconPosition="left"
                iconSize={18}
                className={`px-8 py-4 ${isSubmitting ? 'animate-spin' : ''}`}
              >
                {isSubmitting ? 'Submitting Testimonial...' : 'Submit Testimonial'}
              </Button>
              
              <p className="text-sm text-text-secondary mt-4">
                Your testimonial will be reviewed before being published
              </p>
            </div>
          </form>
        </div>

        {/* Contact Alternative */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-conversion/10 border border-conversion/20 rounded-full">
            <Icon name="MessageSquare" size={16} className="text-conversion" />
            <span className="text-sm text-conversion">
              Prefer to provide feedback directly? 
              <a 
                href="mailto:hoosierdarling@gmail.com?subject=Testimonial%20Feedback"
                className="font-medium hover:underline ml-1"
              >
                Send me an email
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialForm;