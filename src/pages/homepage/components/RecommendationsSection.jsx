import React from 'react';
import { motion } from 'framer-motion';

const RecommendationsSection = () => {
  const testimonials = [
    {
      quote: "Jacob displays a combination of creative and analytical skills, with proven ability to assess and implement marketing strategies that produce a positive return on investment. He excels in managing multiple projects concurrently with strong detail, problem solving, and follow-through.",
      name: "Kevin Martin See",
      title: "IBMer | Connector | Ally"
    },
    {
      quote: "I found Jacob to have great communication skills and creative abilities. He is focused and engaged in the projects he directs and participates in. What stands out the most in working with him is his energy and enthusiasm for what he does.",
      name: "Terrence L. Black",
      title: "Co-Owner, ResQ Organics"
    },
    {
      quote: "Jacob is hardworking, creative and a pleasure to work with. He has skills in web design, branding, and personal communication. I would work with Jacob again and recommend others to do the same.",
      name: "Nick Brown",
      title: "DMA, Inc."
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            What My Colleagues Say
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Professional testimonials from colleagues and collaborators who have experienced firsthand the impact of strategic thinking combined with technical execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
                {/* Quote icon background */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg className="w-12 h-12 text-conversion" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Quote */}
                <blockquote className="text-text-secondary leading-relaxed mb-6 relative z-10">
                  "{testimonial?.quote}"
                </blockquote>

                {/* Author */}
                <div className="relative z-10">
                  <div className="font-bold text-text-primary mb-1">
                    {testimonial?.name}
                  </div>
                  <div className="text-conversion text-sm font-medium">
                    {testimonial?.title}
                  </div>
                </div>

                {/* Hover effect indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-conversion via-accent to-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;