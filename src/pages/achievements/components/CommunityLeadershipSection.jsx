import React from 'react';
import Icon from '../../../components/AppIcon';
import { motion } from 'framer-motion';

const CommunityLeadershipSection = () => {
  const achievements = [
    {
      title: "Board President, HOA",
      organization: "School 80 Condominiums",
      period: "(2019 - Present)",
      description: "Lead governance, manage budgets, and facilitate communications for the School 80 Condominiums residential community, ensuring fiscal responsibility and strategic planning.",
      icon: "Home",
      logo: "/assets/images/Logo-1759610700707.png",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Board Member, Arts Non-Profit", 
      organization: "Primary Colours",
      period: "(2018 - 2019)",
      description: "Supported the Indianapolis non-profit Primary Colours by providing marketing leadership, redesigning the website, and developing sponsorship strategies for fundraising events.",
      icon: "Palette",
      logo: "/assets/images/PC-Logo-1759610614733.jpg",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Target Marketing Competition Winner",
      organization: "Indiana University", 
      period: "(2006)",
      description: "Led a team to first place in a university-wide competition at Indiana University by developing and presenting an innovative marketing strategy that was recognized by a panel of industry judges.",
      icon: "Trophy",
      logo: "/assets/images/Indiana_University_seal.svg-1759610505683.png",
      color: "from-amber-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Awards & Community Leadership
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Recognition for excellence and commitment to community impact through strategic leadership and innovative thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements?.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:scale-[1.03] relative overflow-hidden h-full flex flex-col">
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Header with Icon/Logo */}
                <div className="relative mb-6">
                  <div className="flex items-center justify-center mb-4">
                    {achievement?.logo ? (
                      <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <img 
                          src={achievement?.logo}
                          alt={`${achievement?.organization} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${achievement?.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <Icon name={achievement?.icon} size={32} className="text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-text-primary mb-2 leading-tight">
                      {achievement?.title}
                    </h3>
                    <div className="text-conversion font-semibold mb-1">
                      {achievement?.organization}
                    </div>
                    <div className="text-sm text-text-secondary font-medium">
                      {achievement?.period}
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="relative flex-grow">
                  <p className="text-text-secondary leading-relaxed">
                    {achievement?.description}
                  </p>
                </div>
                
                {/* Hover effect indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityLeadershipSection;