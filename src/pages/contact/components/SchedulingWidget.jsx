import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SchedulingWidget = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  // Generate next 14 days for scheduling
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date?.setDate(today?.getDate() + i);
      
      // Skip weekends for business meetings
      if (date?.getDay() !== 0 && date?.getDay() !== 6) {
        dates?.push({
          date: date,
          formatted: date?.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          }),
          value: date?.toISOString()?.split('T')?.[0]
        });
      }
    }
    
    return dates?.slice(0, 10); // Show 10 available dates
  };

  const availableSlots = [
    { time: '9:00 AM', value: '09:00', available: true },
    { time: '10:00 AM', value: '10:00', available: true },
    { time: '11:00 AM', value: '11:00', available: false },
    { time: '1:00 PM', value: '13:00', available: true },
    { time: '2:00 PM', value: '14:00', available: true },
    { time: '3:00 PM', value: '15:00', available: true },
    { time: '4:00 PM', value: '16:00', available: false },
    { time: '5:00 PM', value: '17:00', available: true }
  ];

  const meetingTypes = [
    {
      id: 'strategy-call',
      title: 'Strategy Discovery Call',
      duration: '30 minutes',
      description: 'Perfect for initial project discussions and strategic planning',
      icon: 'Target',
      color: 'conversion'
    },
    {
      id: 'technical-review',
      title: 'Technical Deep Dive',
      duration: '45 minutes',
      description: 'In-depth technical discussion for complex implementations',
      icon: 'Code',
      color: 'trust-builder'
    },
    {
      id: 'consultation',
      title: 'Full Consultation',
      duration: '60 minutes',
      description: 'Comprehensive project review and solution architecture',
      icon: 'Users',
      color: 'cta-warm'
    }
  ];

  const [selectedMeetingType, setSelectedMeetingType] = useState('strategy-call');

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return;
    
    setIsBooking(true);
    
    // Simulate booking API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsBooking(false);
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center bg-trust-builder/10 border border-trust-builder/20 rounded-xl p-12">
            <div className="w-16 h-16 bg-trust-builder/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Calendar" size={32} className="text-trust-builder" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Meeting Scheduled!</h2>
            <p className="text-text-secondary mb-6">
              Your strategy call has been confirmed. You'll receive a calendar invitation with meeting details shortly.
            </p>
            <div className="bg-background/50 rounded-lg p-6 text-left max-w-md mx-auto">
              <h4 className="font-semibold text-text-primary mb-3">Meeting Details:</h4>
              <div className="space-y-2 text-sm text-text-secondary">
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="text-text-primary">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="text-text-primary">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="text-text-primary">30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform:</span>
                  <span className="text-text-primary">Google Meet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-surface" id="schedule-meeting">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Schedule a Strategy Call
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Book a focused conversation to discuss your project goals, challenges, and how we can work together 
            to achieve measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Meeting Type Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-text-primary mb-6">Choose Meeting Type</h3>
            <div className="space-y-4">
              {meetingTypes?.map((type) => (
                <div
                  key={type?.id}
                  className={`p-4 rounded-lg border cursor-pointer smooth-transition ${
                    selectedMeetingType === type?.id
                      ? `border-${type?.color} bg-${type?.color}/10`
                      : 'border-border bg-background hover:border-border/50'
                  }`}
                  onClick={() => setSelectedMeetingType(type?.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 bg-${type?.color}/10 rounded-lg flex items-center justify-center`}>
                      <Icon name={type?.icon} size={20} className={`text-${type?.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary mb-1">{type?.title}</h4>
                      <p className="text-sm text-text-secondary mb-2">{type?.description}</p>
                      <span className={`text-xs font-medium text-${type?.color}`}>{type?.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Date & Time Selection */}
          <div className="lg:col-span-2">
            <div className="bg-background border border-border rounded-xl p-6 brand-shadow">
              <h3 className="text-xl font-bold text-text-primary mb-6">Select Date & Time</h3>
              
              {/* Date Selection */}
              <div className="mb-8">
                <h4 className="font-semibold text-text-primary mb-4">Available Dates</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {generateAvailableDates()?.map((dateOption) => (
                    <button
                      key={dateOption?.value}
                      className={`p-3 rounded-lg border text-center smooth-transition ${
                        selectedDate === dateOption?.formatted
                          ? 'border-conversion bg-conversion/10 text-conversion' :'border-border bg-surface hover:border-border/50 text-text-primary'
                      }`}
                      onClick={() => setSelectedDate(dateOption?.formatted)}
                    >
                      <div className="text-sm font-medium">{dateOption?.formatted}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div className="mb-8">
                  <h4 className="font-semibold text-text-primary mb-4">Available Times (EST)</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {availableSlots?.map((slot) => (
                      <button
                        key={slot?.value}
                        disabled={!slot?.available}
                        className={`p-3 rounded-lg border text-center smooth-transition ${
                          !slot?.available
                            ? 'border-border bg-muted text-text-secondary cursor-not-allowed opacity-50'
                            : selectedTime === slot?.time
                            ? 'border-conversion bg-conversion/10 text-conversion' :'border-border bg-surface hover:border-border/50 text-text-primary'
                        }`}
                        onClick={() => slot?.available && setSelectedTime(slot?.time)}
                      >
                        <div className="text-sm font-medium">{slot?.time}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Booking Confirmation */}
              {selectedDate && selectedTime && (
                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold text-text-primary mb-4">Confirm Your Meeting</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-text-secondary">Date:</span>
                      <div className="font-medium text-text-primary">{selectedDate}</div>
                    </div>
                    <div>
                      <span className="text-text-secondary">Time:</span>
                      <div className="font-medium text-text-primary">{selectedTime} EST</div>
                    </div>
                    <div>
                      <span className="text-text-secondary">Duration:</span>
                      <div className="font-medium text-text-primary">30 minutes</div>
                    </div>
                  </div>
                  
                  <Button
                    variant="default"
                    size="lg"
                    fullWidth
                    loading={isBooking}
                    onClick={handleBooking}
                    className="bg-conversion hover:bg-conversion/90 text-conversion-foreground conversion-glow"
                    iconName="Calendar"
                    iconPosition="left"
                    iconSize={20}
                  >
                    {isBooking ? 'Booking Meeting...' : 'Confirm Meeting'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Meeting Information */}
        <div className="mt-12 bg-background border border-border rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">What to Expect</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-trust-builder mt-1" />
                  <span>Detailed discussion of your project goals and challenges</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-trust-builder mt-1" />
                  <span>Initial strategic recommendations and approach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-trust-builder mt-1" />
                  <span>Timeline and budget discussion</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-trust-builder mt-1" />
                  <span>Next steps and potential collaboration outline</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Meeting Details</h3>
              <div className="space-y-3 text-text-secondary">
                <div className="flex items-center space-x-3">
                  <Icon name="Video" size={16} className="text-conversion" />
                  <span>Video call via Google Meet (link sent after booking)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-conversion" />
                  <span>All times shown in Eastern Standard Time (EST)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={16} className="text-conversion" />
                  <span>Calendar invitation sent immediately after confirmation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={16} className="text-conversion" />
                  <span>All discussions are confidential and secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingWidget;