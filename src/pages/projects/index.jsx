import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Projects data
  const projects = [
    {
      id: 1,
      clientName: "Tuohy Bailey & Moore LLP",
      websiteUrl: "https://tbmattorneys.com",
      servicesProvided: ["Full Rebranding", "Logo Design", "Website Revitalization", "Content Marketing"],
      outcome: "Revitalized the firm's brand image with a modern rebranding strategy, including a sleek new logo and website design. The enhanced online presence and strategic content resulted in a 40% increase in client inquiries and reinforced the firm's position as a leader in legal services.",
      screenshots: {
        homepage: "/assets/images/experience/Tuohy Bailey Moore/Screenshot of Home - Tuohy Bailey & Moore LLP.jpg",
        interior: "/assets/images/experience/Tuohy Bailey Moore/Screenshot of Commercial Law - Tuohy Bailey & Moore LLP.jpg",
        mobile: "/assets/images/experience/Tuohy Bailey Moore/Screenshot of Home - Tuohy Bailey & Moore LLP.jpg"
      }
    },
    {
      id: 2,
      clientName: "317 BBQ",
      websiteUrl: "https://317bbq.com",
      servicesProvided: ["Website Design", "Photography & Videography", "E-commerce"],
      outcome: "Crafted an immersive and visually compelling online platform that captured the essence of the brand. The new website, combined with high-quality visuals, led to a 30% increase in customer traffic and a 20% increase in sales within the first six months.",
      screenshots: {
        homepage: "/assets/images/experience/317 bbq/download.jpg",
        interior: "/assets/images/experience/317 bbq/download (1).jpg",
        mobile: "/assets/images/experience/317 bbq/download.jpg"
      }
    },
    {
      id: 3,
      clientName: "PrimaryCare Indy",
      websiteUrl: "https://primarycareindy.com",
      servicesProvided: ["Logo Design", "Website Design", "Paid Online Advertising", "Graphic Design"],
      outcome: "Developed a comprehensive branding and digital marketing strategy from the ground up. The cohesive brand identity and targeted advertising campaigns resulted in a 50% increase in patient appointments and a 25% increase in patient retention, significantly bolstering the clinic's market position.",
      screenshots: {
        homepage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        interior: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        mobile: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop"
      }
    },
    {
      id: 4,
      clientName: "Russell Painting Company",
      websiteUrl: "https://russellpaintingcompany.com",
      servicesProvided: ["Logo Design", "Website Development", "Content Marketing", "SEO"],
      outcome: "Successfully redefined the company's brand identity and digital footprint. The new branding and modern website design attracted more clients, resulting in a 30% increase in project engagements and enhanced market relevance.",
      screenshots: {
        homepage: "/assets/images/experience/Russell Painting Company/Screenshot of Russell Painting Company, Inc _ Full Service Residential and Commercial Painting Contractors.jpg",
        interior: "/assets/images/experience/Russell Painting Company/Screenshot of Power Washing _ Russell Painting Company, Inc.jpg",
        mobile: "/assets/images/experience/Russell Painting Company/Screenshot of Russell Painting Company, Inc _ Full Service Residential and Commercial Painting Contractors.jpg"
      }
    },
    {
      id: 5,
      clientName: "Hoosier Boy Barbershop",
      websiteUrl: "https://hoosierboybarbershop.com",
      servicesProvided: ["Website Development", "Content Marketing", "Email Marketing", "Social Media Management"],
      outcome: "Amplified the barbershop's online presence with a robust digital marketing strategy. The targeted content and email marketing campaigns fostered strong client relationships, resulting in a 40% increase in bookings and a 30% growth in social media followers.",
      screenshots: {
        homepage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop",
        interior: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop",
        mobile: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=600&fit=crop"
      }
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 3);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + 3) % 3);
  };

  const getCurrentScreenshot = () => {
    if (!selectedProject) return null;
    const screenshots = Object.values(selectedProject.screenshots);
    return screenshots[currentImageIndex];
  };

  useEffect(() => {
    document.title = 'Selected Works & Case Studies - Jacob Darling';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
              Selected Works & Case Studies
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore my branding and web development projects that showcase strategic thinking combined with creative execution.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Browser Frame Mockup */}
                <div className="bg-gray-800 p-2 rounded-t-xl">
                  <div className="bg-gray-600 h-3 rounded-full flex items-center px-2 space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-white p-1">
                  <img
                    src={project.screenshots.homepage}
                    alt={`${project.clientName} homepage`}
                    className="w-full h-48 object-cover rounded"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">{project.clientName}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.servicesProvided.map((service, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="text-conversion text-sm font-medium">Click to view details</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-card rounded-xl border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-text-primary">{selectedProject.clientName}</h2>
                <button
                  onClick={closeModal}
                  className="text-text-secondary hover:text-text-primary"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>

              {/* Screenshot Carousel */}
              <div className="mb-6">
                <div className="relative bg-gray-100 p-4 rounded-lg">
                  <img
                    src={getCurrentScreenshot()}
                    alt={`${selectedProject.clientName} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-64 object-cover rounded"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {[0, 1, 2].map((index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-conversion' : 'bg-gray-400'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcome */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">Outcome</h3>
                <p className="text-text-secondary leading-relaxed">{selectedProject.outcome}</p>
              </div>

              {/* Services Provided */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">Services Provided</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.servicesProvided.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-conversion/10 text-conversion rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Live Site Button */}
              <div className="flex justify-center">
                <Button
                  onClick={() => window.open(selectedProject.websiteUrl, '_blank')}
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                  iconName="ExternalLink"
                  iconPosition="left"
                >
                  View Live Site
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;