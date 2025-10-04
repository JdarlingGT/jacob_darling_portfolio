import React from 'react';
import Header from '../../components/ui/Header';

const VideoProjectsPage = () => {
  const videos = [
    { id: 1, url: "https://youtu.be/K6kco8-OZO0", title: "Creative Video 1" },
    { id: 2, url: "https://youtu.be/RfkVYOZR1Ao?si=ym9r9JOY5ncZ3o2_", title: "Creative Video 2" },
    { id: 3, url: "https://youtu.be/sc1bKoq1gVs?si=dKNqgmPppRFfsPAD", title: "Creative Video 3" },
    { id: 4, url: "https://youtu.be/gB8szYMVPVs?si=f5K9AH6cVBsLrvOC", title: "Creative Video 4" },
    { id: 5, url: "https://youtu.be/CGUT9tQvj7Y", title: "Creative Video 5" },
    { id: 6, url: "https://youtu.be/kN1G4BIXA9k", title: "Creative Video 6" },
    { id: 7, url: "https://youtu.be/2qKhmvxeUg4", title: "Creative Video 7" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-text-primary mb-12 text-center">
            Creative Video Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="315"
                  src={video.url.replace("youtu.be", "www.youtube.com/embed")}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64"
                ></iframe>
                <div className="p-4">
                  <p className="text-sm text-text-secondary">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoProjectsPage;
