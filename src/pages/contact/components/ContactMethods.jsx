import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      icon: 'Mail',
      title: 'Email',
      subtitle: 'For detailed discussions',
      value: 'hoosierdarling@gmail.com',
      action: 'Send Email',
      href: 'mailto:hoosierdarling@gmail.com',
      color: 'conversion',
      description: 'Best for project inquiries, collaboration proposals, and detailed technical discussions.'
    },
    {
      id: 'phone',
      icon: 'Phone',
      title: 'Phone',
      subtitle: 'Direct conversation',
      value: '+1 (317) 443-8091',
      action: 'Call Now',
      href: 'tel:+13174438091',
      color: 'cta-warm',
      description: 'Available for urgent matters and scheduled calls during business hours.'
    },
    {
      id: 'linkedin',
      icon: 'Linkedin',
      title: 'LinkedIn',
      subtitle: 'Professional networking',
      value: 'linkedin.com/in/jacobdarling',
      action: 'Connect',
      href: 'https://linkedin.com/in/jacobdarling',
      color: 'trust-builder',
      description: 'Connect for industry insights, thought leadership content, and professional networking.'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', href: 'https://github.com/jacobdarling', color: 'text-text-secondary hover:text-conversion' },
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/jacobdarling', color: 'text-text-secondary hover:text-conversion' },
    { name: 'Medium', icon: 'BookOpen', href: 'https://medium.com/@jacobdarling', color: 'text-text-secondary hover:text-trust-builder' },
    { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com/@jacobdarling', color: 'text-text-secondary hover:text-error' }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the communication method that works best for your needs. 
            I'm committed to providing timely, thoughtful responses across all channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods?.map((method) => (
            <div key={method?.id} className="bg-background border border-border rounded-xl p-8 brand-shadow smooth-transition hover:border-border/50">
              <div className="text-center">
                <div className={`w-16 h-16 bg-${method?.color}/10 rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon name={method?.icon} size={32} className={`text-${method?.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-2">{method?.title}</h3>
                <p className="text-text-secondary mb-4">{method?.subtitle}</p>
                
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <p className="font-mono text-sm text-text-primary break-all">{method?.value}</p>
                </div>
                
                <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                  {method?.description}
                </p>
                
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => window.open(method?.href, '_blank')}
                  iconName="ExternalLink"
                  iconPosition="right"
                  iconSize={16}
                >
                  {method?.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Response Times - Removed Office Hours Section */}
        <div className="bg-background border border-border rounded-xl p-8 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-trust-builder/10 rounded-lg flex items-center justify-center">
                <Icon name="MessageCircle" size={20} className="text-trust-builder" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Response Times</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex justify-between items-center md:flex-col md:text-center">
                <span className="text-text-secondary">Email Inquiries</span>
                <span className="text-text-primary font-medium">2-4 hours</span>
              </div>
              <div className="flex justify-between items-center md:flex-col md:text-center">
                <span className="text-text-secondary">Phone Calls</span>
                <span className="text-text-primary font-medium">Same day</span>
              </div>
              <div className="flex justify-between items-center md:flex-col md:text-center">
                <span className="text-text-secondary">LinkedIn Messages</span>
                <span className="text-text-primary font-medium">4-8 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-text-primary mb-6">Follow My Work</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks?.map((social) => (
              <a
                key={social?.name}
                href={social?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 border border-border rounded-lg flex items-center justify-center smooth-transition hover:border-conversion ${social?.color}`}
                title={social?.name}
              >
                <Icon name={social?.icon} size={20} />
              </a>
            ))}
          </div>
          <p className="text-sm text-text-secondary mt-4">
            Stay updated with my latest projects, insights, and industry thoughts
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;