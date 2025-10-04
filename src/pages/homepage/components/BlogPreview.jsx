import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BlogPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('blog-preview');
    if (element) observer?.observe(element);

    return () => {
      if (element) observer?.unobserve(element);
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'The Integration Gap: Why Marketing Ideas Break at Handoff',
      excerpt: 'Most marketing campaigns fail not because of poor strategy, but because of poor execution. Here\'s how to bridge the gap between creative vision and technical reality.',
      category: 'strategy',
      readTime: '8 min read',
      publishDate: '3 days ago',
      tags: ['Marketing Strategy', 'Project Management', 'Integration'],
      image: '/assets/images/Evidence-Based_Approach_Infographic-1759119540923.png',
      trending: true
    },
    {
      id: 2,
      title: 'Building a 400+ Automation Marketing Stack',
      excerpt: 'A deep dive into architecting an enterprise marketing automation system that processes 50,000+ leads monthly while maintaining 99.97% uptime.',
      category: 'technical',
      readTime: '12 min read',
      publishDate: '1 week ago',
      tags: ['Marketing Automation', 'CRM', 'Systems Architecture'],
      image: '/assets/images/edge-image-optimization-pipeline-hero-1759121621363.png',
      featured: true
    },
    {
      id: 3,
      title: 'From 85,000 Bot Attacks to Zero: A Security Case Study',
      excerpt: 'How I implemented a multi-layer security infrastructure that neutralizes malicious traffic while maintaining optimal performance and user experience.',
      category: 'technical',
      readTime: '10 min read',
      publishDate: '2 weeks ago',
      tags: ['Security', 'Performance', 'Infrastructure'],
      image: '/assets/images/ChatGPT_Image_Sep_29_2025_12_16_05_AM-1759119580701.png',
      popular: true
    },
    {
      id: 4,
      title: 'The Psychology of High-Converting Checkout Flows',
      excerpt: 'Behavioral economics principles that drove a 40% increase in e-commerce conversions through strategic UX improvements and psychological triggers.',
      category: 'conversion',
      readTime: '7 min read',
      publishDate: '3 weeks ago',
      tags: ['Conversion Optimization', 'UX Design', 'Psychology'],
      image: '/assets/images/Gemini_Generated_Image_klonsaklonsaklon-1759116279741.png'
    },
    {
      id: 5,
      title: 'Marketing Attribution in a Privacy-First World',
      excerpt: 'Practical strategies for tracking marketing performance and attribution while respecting user privacy and complying with modern data regulations.',
      category: 'analytics',
      readTime: '9 min read',
      publishDate: '1 month ago',
      tags: ['Analytics', 'Privacy', 'Attribution'],
      image: '/assets/images/Gemini_Generated_Image_6zxf7o6zxf7o6zxf-1759117577100.png'
    },
    {
      id: 6,
      title: 'Scaling Content Operations with AI and Automation',
      excerpt: 'How to augment your content team with intelligent automation while maintaining quality and brand voice across all marketing channels.',
      category: 'strategy',
      readTime: '6 min read',
      publishDate: '1 month ago',
      tags: ['Content Strategy', 'AI', 'Automation'],
      image: '/assets/images/INterview-22-1759117511113.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts?.length },
    { id: 'strategy', name: 'Strategy', count: blogPosts?.filter(post => post?.category === 'strategy')?.length },
    { id: 'technical', name: 'Technical', count: blogPosts?.filter(post => post?.category === 'technical')?.length },
    { id: 'conversion', name: 'Conversion', count: blogPosts?.filter(post => post?.category === 'conversion')?.length },
    { id: 'analytics', name: 'Analytics', count: blogPosts?.filter(post => post?.category === 'analytics')?.length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts?.filter(post => post?.category === selectedCategory);

  return (
    <section id="blog-preview" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Thought Leadership & Insights
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Deep dives into marketing strategy, technical implementation, and the intersection where great ideas become scalable systems
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium smooth-transition ${
                selectedCategory === category?.id
                  ? 'bg-conversion text-conversion-foreground'
                  : 'bg-surface text-text-secondary hover:bg-conversion/10 hover:text-conversion'
              }`}
            >
              {category?.name} ({category?.count})
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts?.slice(0, 6)?.map((post, index) => (
            <motion.article
              key={post?.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-surface border border-border rounded-xl overflow-hidden hover:border-conversion/50 hover:shadow-lg smooth-transition group"
            >
              {/* Post Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img 
                  src={post?.image}
                  alt={post?.title}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  {post?.trending && (
                    <span className="px-2 py-1 bg-red-500/90 text-white text-xs font-medium rounded-full">
                      Trending
                    </span>
                  )}
                  {post?.featured && (
                    <span className="px-2 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                  {post?.popular && (
                    <span className="px-2 py-1 bg-purple-500/90 text-white text-xs font-medium rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                {/* Reading Time */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                    {post?.readTime}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    post?.category === 'strategy' ? 'bg-green-100 text-green-700' :
                    post?.category === 'technical' ? 'bg-blue-100 text-blue-700' :
                    post?.category === 'conversion'? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {post?.category?.charAt(0)?.toUpperCase() + post?.category?.slice(1)}
                  </span>
                  <span className="text-text-secondary text-sm">{post?.publishDate}</span>
                </div>

                <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-conversion smooth-transition line-clamp-2">
                  {post?.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {post?.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post?.tags?.slice(0, 2)?.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-text-secondary text-xs rounded">
                      {tag}
                    </span>
                  ))}
                  {post?.tags?.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded">
                      +{post?.tags?.length - 2} more
                    </span>
                  )}
                </div>

                {/* Read More */}
                <div className="flex items-center justify-between">
                  <button className="text-conversion hover:text-conversion/80 text-sm font-medium smooth-transition">
                    Read Article →
                  </button>
                  <div className="flex items-center space-x-3">
                    <button className="text-text-secondary hover:text-conversion smooth-transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="text-text-secondary hover:text-conversion smooth-transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Blog CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-conversion/5 to-secondary/5 border border-conversion/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Want to Read More?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Get deeper insights into marketing strategy, technical implementation, 
              and building scalable systems that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-conversion text-conversion-foreground px-6 py-3 rounded-lg font-medium hover:bg-conversion/90 smooth-transition">
                View All Articles
              </button>
              <button className="border border-border text-text-primary px-6 py-3 rounded-lg font-medium hover:border-conversion hover:text-conversion smooth-transition">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;