import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    priority: 'medium'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypeOptions = [
    { value: 'marketing-automation', label: 'Marketing Automation' },
    { value: 'conversion-optimization', label: 'Conversion Optimization' },
    { value: 'technical-integration', label: 'Technical Integration' },
    { value: 'system-architecture', label: 'System Architecture' },
    { value: 'performance-optimization', label: 'Performance Optimization' },
    { value: 'consulting', label: 'Strategic Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-months-plus', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'urgent', label: 'Urgent' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Invalid email format';
    if (!formData?.projectType) newErrors.projectType = 'Project type is required';
    if (!formData?.message?.trim()) newErrors.message = 'Message is required';
    else if (formData?.message?.trim()?.length < 20) newErrors.message = 'Message must be at least 20 characters';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        priority: 'medium'
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center bg-trust-builder/10 border border-trust-builder/20 rounded-xl p-12">
            <div className="w-16 h-16 bg-trust-builder/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} className="text-trust-builder" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Message Sent Successfully!</h2>
            <p className="text-text-secondary mb-6">
              Thank you for reaching out. I've received your message and will respond within 2-4 hours during business hours.
            </p>
            <div className="bg-background/50 rounded-lg p-4 text-sm text-text-secondary">
              <p><strong>Next Steps:</strong> I'll review your project details and send you a personalized response with initial thoughts and potential next steps.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background" id="contact-form">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Start Your Project
          </h2>
          <p className="text-lg text-text-secondary">
            Tell me about your vision, challenges, and goals. The more details you provide, 
            the better I can tailor my response to your specific needs.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-xl p-8 brand-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Input
              label="Full Name"
              type="text"
              placeholder="Your full name"
              value={formData?.name}
              onChange={(e) => handleInputChange('name', e?.target?.value)}
              error={errors?.name}
              required
            />
            
            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@company.com"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              error={errors?.email}
              required
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Input
              label="Company"
              type="text"
              placeholder="Your company name"
              value={formData?.company}
              onChange={(e) => handleInputChange('company', e?.target?.value)}
            />
            
            <Input
              label="Your Role"
              type="text"
              placeholder="e.g., Marketing Director, CTO"
              value={formData?.role}
              onChange={(e) => handleInputChange('role', e?.target?.value)}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Select
              label="Project Type"
              placeholder="Select project type"
              options={projectTypeOptions}
              value={formData?.projectType}
              onChange={(value) => handleInputChange('projectType', value)}
              error={errors?.projectType}
              required
            />
            
            <Select
              label="Priority Level"
              options={priorityOptions}
              value={formData?.priority}
              onChange={(value) => handleInputChange('priority', value)}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Select
              label="Budget Range"
              placeholder="Select budget range"
              options={budgetOptions}
              value={formData?.budget}
              onChange={(value) => handleInputChange('budget', value)}
            />
            
            <Select
              label="Timeline"
              placeholder="Select timeline"
              options={timelineOptions}
              value={formData?.timeline}
              onChange={(value) => handleInputChange('timeline', value)}
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Project Details <span className="text-error">*</span>
            </label>
            <textarea
              className="w-full h-32 px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-conversion focus:border-transparent resize-none"
              placeholder="Describe your project, challenges, goals, and any specific requirements. The more details you provide, the better I can help you."
              value={formData?.message}
              onChange={(e) => handleInputChange('message', e?.target?.value)}
            />
            {errors?.message && (
              <p className="mt-1 text-sm text-error">{errors?.message}</p>
            )}
            <p className="mt-2 text-xs text-text-secondary">
              Minimum 20 characters. Current: {formData?.message?.length}
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 mb-8">
            <div className="flex items-start space-x-3">
              <Icon name="Shield" size={20} className="text-trust-builder mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary mb-1">Privacy & Confidentiality</h4>
                <p className="text-sm text-text-secondary">
                  Your information is secure and confidential. I never share project details or contact information with third parties.
                </p>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            loading={isSubmitting}
            className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
            iconName="Send"
            iconPosition="right"
            iconSize={20}
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;