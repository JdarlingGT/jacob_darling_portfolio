import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PersonalGallerySection = () => {
  const [activePhoto, setActivePhoto] = useState(0);

  const photos = [
    {
      id: 0,
      src: "/assets/images/Gemini_Generated_Image_klonsaklonsaklon-1759116279741.png",
      alt: "Jacob Darling - Professional Business Portrait",
      title: "Strategic Leadership",
      description: "Leading strategic initiatives and driving marketing transformation across diverse industries.",
      context: "Professional"
    },
    {
      id: 1,
      src: "/assets/images/INterview-22-1759117511113.jpg",
      alt: "Jacob Darling - Creative Professional Portrait",
      title: "Creative Innovation",
      description: "Bringing a creative, approachable perspective to complex technical challenges.",
      context: "Creative"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-surface via-background to-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-conversion/10 text-conversion px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Camera" size={16} />
            <span>Behind the Vision</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            The Person Behind the <span className="text-conversion">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Marketing leadership requires both strategic thinking and authentic connection. 
            Here's a glimpse into the different facets of my professional approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Gallery */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-surface shadow-2xl">
              {/* Main Photo Display */}
              <div className="relative w-full h-full">
                <Image
                  src={photos?.[activePhoto]?.src}
                  alt={photos?.[activePhoto]?.alt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Photo Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${
                      activePhoto === 0 ? 'bg-conversion' : 'bg-trust-builder'
                    }`} />
                    <span className="text-xs font-medium text-white/80 uppercase tracking-wide">
                      {photos?.[activePhoto]?.context}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {photos?.[activePhoto]?.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {photos?.[activePhoto]?.description}
                  </p>
                </div>
              </div>

              {/* Photo Navigation Dots */}
              <div className="absolute bottom-6 right-6 flex space-x-2">
                {photos?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePhoto(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activePhoto === index
                        ? 'bg-white scale-110' :'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`View photo ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Photo Thumbnails */}
            <div className="flex space-x-4 mt-6">
              {photos?.map((photo, index) => (
                <button
                  key={photo?.id}
                  onClick={() => setActivePhoto(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    activePhoto === index
                      ? 'ring-2 ring-conversion scale-105' :'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={photo?.src}
                    alt={photo?.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Authentic Leadership Through Multiple Lenses
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Effective marketing leadership isn't just about strategy and execution—it's about 
                building genuine connections and maintaining authenticity across every interaction. 
                Whether I'm presenting to C-suite executives or collaborating with creative teams, 
                I bring both professional expertise and approachable authenticity to every relationship.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-conversion/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Users" size={14} className="text-conversion" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Strategic Perspective</h4>
                    <p className="text-sm text-text-secondary">
                      Leading with data-driven insights while maintaining the human element that 
                      drives authentic brand connections.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-trust-builder/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Lightbulb" size={14} className="text-trust-builder" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Creative Approach</h4>
                    <p className="text-sm text-text-secondary">
                      Balancing innovative thinking with practical execution, bringing fresh ideas 
                      that actually work in the real world.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-cta-warm/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Zap" size={14} className="text-cta-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Technical Execution</h4>
                    <p className="text-sm text-text-secondary">
                      Combining strategic vision with hands-on technical implementation to ensure 
                      marketing concepts become measurable reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Philosophy Quote */}
            <div className="bg-gradient-to-r from-conversion/5 to-trust-builder/5 rounded-2xl p-6 border border-conversion/20">
              <blockquote className="text-lg font-medium text-text-primary italic mb-4">
                "The best marketing solutions happen when creative vision meets technical reality. 
                I've built my career to be fluent in both languages."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-conversion/20 flex items-center justify-center">
                  <Icon name="Quote" size={16} className="text-conversion" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">Jacob Darling</div>
                  <div className="text-sm text-text-secondary">Marketing Director & System Architect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalGallerySection;