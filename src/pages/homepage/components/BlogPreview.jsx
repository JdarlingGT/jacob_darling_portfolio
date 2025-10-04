import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Marketing Automation with React and Node.js",
      excerpt: `A deep dive into architecting marketing automation platforms that can handle enterprise-scale traffic while maintaining performance and reliability.\n\nLearn about microservices architecture, real-time event processing, and API design patterns that power modern marketing technology stacks.`,
      category: "Technical Architecture",
      readTime: "8 min read",
      publishDate: "2024-09-25",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["React", "Node.js", "Marketing Automation", "Microservices"],
      views: 2847,
      likes: 156,
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Customer Journey Analytics: Implementation Guide",
      excerpt: `Step-by-step guide to implementing machine learning algorithms for customer journey analysis and behavior prediction.\n\nCover data collection strategies, model training, and real-time inference systems for marketing optimization.`,
      category: "AI & Machine Learning",
      readTime: "12 min read",
      publishDate: "2024-09-20",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      tags: ["AI", "Machine Learning", "Customer Analytics", "Python"],
      views: 1923,
      likes: 89,
      featured: false
    },
    {
      id: 3,
      title: "Performance Optimization for Marketing Technology Platforms",
      excerpt: `Best practices for optimizing marketing technology platforms for speed, scalability, and user experience.\n\nExplore caching strategies, database optimization, CDN implementation, and monitoring techniques.`,
      category: "Performance",
      readTime: "6 min read",
      publishDate: "2024-09-15",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Performance", "Optimization", "Caching", "Monitoring"],
      views: 1456,
      likes: 73,
      featured: false
    }
  ];

  const handleReadMore = (postId) => {
    window.location.href = `/blog/${postId}`;
  };

  const handleViewAllPosts = () => {
    window.location.href = '/blog';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-cta-warm/10 rounded-xl flex items-center justify-center mr-4">
              <Icon name="BookOpen" size={24} className="text-cta-warm" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Latest Insights
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Technical insights, marketing automation strategies, and thought leadership content 
            from the intersection of marketing and technology.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-card rounded-2xl overflow-hidden brand-border brand-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={blogPosts?.[0]?.image}
                  alt={blogPosts?.[0]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-conversion text-conversion-foreground text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-cta-warm/10 text-cta-warm text-sm font-medium rounded-full">
                    {blogPosts?.[0]?.category}
                  </span>
                  <span className="text-text-secondary text-sm">
                    {formatDate(blogPosts?.[0]?.publishDate)}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                  {blogPosts?.[0]?.title}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-6 whitespace-pre-line">
                  {blogPosts?.[0]?.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts?.[0]?.tags?.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{blogPosts?.[0]?.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Eye" size={16} />
                      <span>{blogPosts?.[0]?.views?.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Heart" size={16} />
                      <span>{blogPosts?.[0]?.likes} likes</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="default"
                  onClick={() => handleReadMore(blogPosts?.[0]?.id)}
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={16}
                >
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts?.slice(1)?.map((post) => (
            <article key={post?.id} className="bg-card rounded-xl overflow-hidden brand-border hover:brand-shadow smooth-transition">
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={post?.image}
                  alt={post?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                    {post?.category}
                  </span>
                  <span className="text-text-secondary text-sm">
                    {formatDate(post?.publishDate)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3 line-clamp-2">
                  {post?.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3 whitespace-pre-line">
                  {post?.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post?.tags?.slice(0, 3)?.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {post?.tags?.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md">
                      +{post?.tags?.length - 3} more
                    </span>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-text-secondary">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      <span>{post?.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Eye" size={14} />
                      <span>{post?.views?.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleReadMore(post?.id)}
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={14}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={handleViewAllPosts}
            iconName="BookOpen"
            iconPosition="left"
            iconSize={20}
          >
            View All Blog Posts
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-card rounded-2xl p-8 lg:p-12 brand-border text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-conversion/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Mail" size={32} className="text-conversion" />
            </div>
            
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Stay Updated with Latest Insights
            </h3>
            
            <p className="text-text-secondary mb-8">
              Get weekly insights on marketing technology, performance optimization, 
              and strategic implementation directly in your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-muted border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-conversion"
              />
              <Button
                variant="default"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                iconName="Send"
                iconPosition="right"
                iconSize={16}
              >
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-text-secondary mt-4">
              No spam, unsubscribe at any time. Read our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;