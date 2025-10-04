import React, { useEffect, useRef, useState } from 'react';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';

const ApproachSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  const principles = [
    {
      icon: 'Layers',
      title: 'Build for the System, Not Just the Campaign',
      description: 'I design holistic, full-funnel marketing ecosystems that ensure scalability and a seamless customer experience.',
      delay: '0ms'
    },
    {
      icon: 'Bridge',
      title: 'Translate Complexity into Clarity',
      description: 'I act as the bridge between creative vision and the MarTech stack, ensuring technical and strategic alignment across teams.',
      delay: '200ms'
    },
    {
      icon: 'BarChart3',
      title: 'Measure What Matters, Automate the Rest',
      description: 'I implement robust analytics and attribution models, then automate workflows to drive efficiency and focus on data-driven growth.',
      delay: '400ms'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            My Approach: <span className="text-conversion">Architecting for Growth</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Every project is built on three core principles that ensure sustainable, 
            measurable success for your marketing initiatives.
          </p>
        </div>

        {/* Creative Vision Section with Photo */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Artistic Photo */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <AppImage
                  src="/assets/images/1732967007485-1759120141831.jpg"
                  alt="Jacob Darling - Creative visionary approach to technical challenges"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-conversion/20 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-conversion text-conversion-foreground px-6 py-3 rounded-full font-semibold shadow-lg">
                Creative Problem-Solving
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
                Where <span className="text-conversion">Vision</span> Meets <span className="text-conversion">Execution</span>
              </h3>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                My approach combines artistic thinking with technical precision. I don't just solve problems—I reimagine them through a creative lens that transforms complex challenges into elegant, scalable solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-conversion/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-conversion rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Innovative Thinking</h4>
                    <p className="text-text-secondary text-sm">Approaching technical challenges with creative methodology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-conversion/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-conversion rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Artistic Precision</h4>
                    <p className="text-text-secondary text-sm">Balancing creative vision with technical implementation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-conversion/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-conversion rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Strategic Excellence</h4>
                    <p className="text-text-secondary text-sm">Delivering solutions that are both beautiful and functional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {principles?.map((principle, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? principle?.delay : '0ms' }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-conversion/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-conversion/20 group-hover:scale-110 transition-all duration-300">
                <Icon name={principle?.icon} size={32} className="text-conversion" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text-primary mb-4 leading-tight">
                {principle?.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {principle?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Visual Element */}
        <div className="mt-16 text-center">
          <div className="w-32 h-1 bg-gradient-to-r from-conversion/20 via-conversion to-conversion/20 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;