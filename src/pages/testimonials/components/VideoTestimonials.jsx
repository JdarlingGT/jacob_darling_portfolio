import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoTestimonials = [
    {
      id: 1,
      name: "Thomas Anderson",
      role: "VP of Digital Strategy",
      company: "Enterprise Solutions Group",
      thumbnail: "/assets/images/no_image.png",
      videoUrl: "https://example.com/testimonial-1.mp4",
      duration: "2:45",
      preview: "Jacob\'s transformation of our marketing infrastructure exceeded all expectations. The automated workflows and AI integration delivered immediate ROI...",
      skills: ["Marketing Automation", "AI Integration", "Digital Transformation"]
    },
    {
      id: 2,
      name: "Maria Gonzalez",
      role: "Chief Marketing Officer",
      company: "TechForward Inc",
      thumbnail: "/assets/images/no_image.png",
      videoUrl: "https://example.com/testimonial-2.mp4",
      duration: "3:12",
      preview: "The analytics pipeline Jacob built gave us unprecedented insight into our customer journey. Our conversion rates improved by 40%...",
      skills: ["Analytics Implementation", "Conversion Optimization", "Data Architecture"]
    },
    {
      id: 3,
      name: "Robert Kim",
      role: "Systems Architecture Lead",
      company: "CloudScale Dynamics",
      thumbnail: "/assets/images/no_image.png",
      videoUrl: "https://example.com/testimonial-3.mp4",
      duration: "4:08",
      preview: "Jacob's security architecture is world-class. The multi-layered defense system neutralized thousands of attacks while maintaining perfect uptime...",
      skills: ["Security Architecture", "Performance Engineering", "Infrastructure Management"]
    }
  ];

  const handleVideoPlay = (videoId) => {
    setActiveVideo(videoId);
    // In a real implementation, this would trigger video playback
    // For demo purposes, we'll simulate video functionality
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Video <span className="text-conversion">Testimonials</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Watch authentic client interviews discussing real project outcomes, 
            challenges overcome, and the measurable impact of our collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videoTestimonials?.map((video) => (
            <div 
              key={video?.id}
              className="bg-background border border-border rounded-xl overflow-hidden brand-shadow hover:shadow-lg transition-all duration-300 group"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img 
                  src={video?.thumbnail} 
                  alt={`${video?.name} video testimonial`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <button
                    onClick={() => handleVideoPlay(video?.id)}
                    className="w-16 h-16 bg-conversion rounded-full flex items-center justify-center hover:bg-conversion-dark hover:scale-110 transition-all shadow-lg"
                  >
                    <Icon name="Play" size={24} className="text-white ml-1" />
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video?.duration}
                </div>

                {/* Quality Badge */}
                <div className="absolute top-4 left-4 bg-conversion text-white px-2 py-1 rounded text-xs font-medium">
                  HD
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      {video?.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {video?.role}
                    </p>
                    <p className="text-sm font-medium text-conversion">
                      {video?.company}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Icon name="Share2" size={16} className="text-text-secondary hover:text-conversion" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Icon name="ExternalLink" size={16} className="text-text-secondary hover:text-conversion" />
                    </button>
                  </div>
                </div>

                <blockquote className="text-sm text-text-secondary leading-relaxed mb-4">
                  "{video?.preview}"
                </blockquote>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {video?.skills?.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-conversion/10 text-conversion text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Watch Button */}
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleVideoPlay(video?.id)}
                  iconName="Play"
                  iconPosition="left"
                  iconSize={16}
                  className="group-hover:shadow-lg transition-all"
                >
                  Watch Full Testimonial
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal Placeholder */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-background rounded-xl max-w-4xl w-full aspect-video relative">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-conversion transition-colors"
              >
                <Icon name="X" size={24} />
              </button>
              
              <div className="w-full h-full bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Play" size={48} className="text-conversion mx-auto mb-4" />
                  <p className="text-text-secondary">
                    Video player would be implemented here
                  </p>
                  <p className="text-sm text-text-secondary mt-2">
                    Integration with video hosting service required
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonials;