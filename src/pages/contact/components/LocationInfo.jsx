import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationInfo = () => {
  const locations = [
    {
      id: 'primary',
      title: 'Primary Location',
      type: 'Indianapolis, IN',
      address: '920 E. 62nd Street Unit L$\nIndianapolis, IN 46220',
      coordinates: { lat: 39.7684, lng: -86.1581 },
      hours: 'Flexible scheduling\nacross all time zones',
      phone: '+1 (317) 443-8091',
      features: ['In-person meetings', 'Video conferencing', 'Flexible scheduling']
    },
    {
      id: 'remote',
      title: 'Remote Operations',
      type: 'Global Reach',
      address: 'Available worldwide via\nvideo conferencing',
      coordinates: null,
      hours: 'Flexible scheduling across\nall major time zones',
      phone: 'Same contact number',
      features: ['Video calls', '24/7 support', 'Async collaboration']
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Where We Can Meet
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Whether you prefer in-person collaboration or remote meetings, 
            I'm equipped to work with you in the way that suits your team best.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations?.map((location) => (
            <div key={location?.id} className="bg-surface border border-border rounded-xl overflow-hidden brand-shadow">
              {/* Map or Visual */}
              <div className="h-64 bg-muted relative overflow-hidden">
                {location?.coordinates ? (
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title={location?.title}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${location?.coordinates?.lat},${location?.coordinates?.lng}&z=14&output=embed`}
                    className="border-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-conversion/20 to-trust-builder/20">
                    <div className="text-center">
                      <Icon name="Globe" size={48} className="text-conversion mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-text-primary mb-2">Global Availability</h3>
                      <p className="text-text-secondary">Connecting across time zones</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Location Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{location?.title}</h3>
                    <span className="inline-block bg-conversion/10 text-conversion px-3 py-1 rounded-full text-sm font-medium">
                      {location?.type}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-conversion/10 rounded-lg flex items-center justify-center">
                    <Icon name={location?.id === 'primary' ? 'MapPin' : 'Monitor'} size={24} className="text-conversion" />
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="MapPin" size={16} className="text-text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Address</h4>
                      <p className="text-text-secondary whitespace-pre-line">{location?.address}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Clock" size={16} className="text-text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Availability</h4>
                      <p className="text-text-secondary whitespace-pre-line">{location?.hours}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Phone" size={16} className="text-text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Phone</h4>
                      <p className="text-text-secondary">{location?.phone}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Star" size={16} className="text-text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Available Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {location?.features?.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-muted text-text-secondary px-3 py-1 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-surface border border-border rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Meeting Preferences</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              I adapt to your preferred meeting style and can accommodate various formats 
              to ensure productive collaboration regardless of location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-conversion/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-conversion" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">In-Person Meetings</h4>
              <p className="text-sm text-text-secondary">
                Face-to-face collaboration for complex projects and strategic planning sessions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-trust-builder/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Video" size={32} className="text-trust-builder" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Video Conferences</h4>
              <p className="text-sm text-text-secondary">
                High-quality video calls with screen sharing for remote collaboration
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cta-warm/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageSquare" size={32} className="text-cta-warm" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Async Communication</h4>
              <p className="text-sm text-text-secondary">
                Flexible communication through email, Slack, or project management tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;