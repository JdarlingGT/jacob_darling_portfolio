import React from 'react';
import Header from '../../components/ui/Header';
import Image from '../../components/AppImage';

const GraphicDesignPage = () => {
  const graphicDesignWorks = [
    {
      id: 1,
      src: "/assets/images/Graphic design work/2020 Forty Under 40 Ad.jpg",
      alt: "2020 Forty Under 40 Ad",
    },
    {
      id: 2,
      src: "/assets/images/Graphic design work/2021 Health Care Ad.png",
      alt: "2021 Health Care Ad",
    },
    {
      id: 3,
      src: "/assets/images/Graphic design work/Adobe_Express_20220515_1036510.9916695776003877.png",
      alt: "Adobe Express Design",
    },
    {
      id: 4,
      src: "/assets/images/Graphic design work/VID_20220607_154659_435~2.mp4",
      alt: "Promotional Video",
      isVideo: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-text-primary mb-12 text-center">
            Graphic Design Portfolio
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graphicDesignWorks.map((work) => (
              <div key={work.id} className="bg-card rounded-lg shadow-lg overflow-hidden">
                {work.isVideo ? (
                  <video controls className="w-full h-64 object-cover" loading="lazy">
                    <source src={work.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={work.src}
                    alt={work.alt}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-4">
                  <p className="text-sm text-text-secondary">{work.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignPage;
