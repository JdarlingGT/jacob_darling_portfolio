import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = [
    { id: 'all', name: 'All Posts', count: 15 },
    { id: 'marketing-automation', name: 'Marketing Automation', count: 6 },
    { id: 'systems-architecture', name: 'Systems Architecture', count: 4 },
    { id: 'industry-insights', name: 'Industry Insights', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Marketing Automation Workflows That Actually Convert",
      excerpt: "Learn how to design marketing automation sequences that guide prospects through your funnel and drive real business results.",
      author: "Jacob Darling",
      publishDate: "2025-01-02",
      readTime: "8 min read",
      category: "marketing-automation",
      featured: true,
      tags: ["Automation", "Conversion", "Lead Nurturing"],
      image: "/assets/images/Evidence-Based_Approach_Infographic-1759119540923.png",
      content: "Complete guide to marketing automation best practices...",
      views: 2847,
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      title: "The Guardian AI: How I Built a Conversational Assistant That Reduced Support Tickets by 70%",
      excerpt: "Deep dive into architecting an AI assistant that handles customer inquiries, automates responses, and integrates seamlessly with existing systems.",
      author: "Jacob Darling",
      publishDate: "2024-12-28",
      readTime: "12 min read",
      category: "systems-architecture",
      featured: true,
      tags: ["AI", "Automation", "Customer Support"],
      image: "/assets/images/ChatGPT_Image_Sep_29_2025_12_16_05_AM-1759119580701.png",
      content: "Technical implementation of AI-powered customer support...",
      views: 3521,
      likes: 198,
      comments: 31
    },
    {
      id: 3,
      title: "From Static to Dynamic: Transforming Healthcare Websites with Data-Driven Architecture",
      excerpt: "Case study on how I transformed a static healthcare website into a dynamic, data-driven platform that increased conversions by 40%.",
      author: "Jacob Darling",
      publishDate: "2024-12-15",
      readTime: "10 min read",
      category: "industry-insights",
      featured: false,
      tags: ["Healthcare", "Web Development", "Conversion Optimization"],
      image: "/assets/images/image-1759121288329.png",
      content: "Healthcare website transformation strategies...",
      views: 1923,
      likes: 89,
      comments: 15
    },
    {
      id: 4,
      title: "The Compass Analytics Pipeline: Implementing GTM Architecture for Maximum ROI",
      excerpt: "How to build a comprehensive analytics pipeline that provides actionable insights and maximizes marketing return on investment.",
      author: "Jacob Darling",
      publishDate: "2024-12-01",
      readTime: "15 min read",
      category: "systems-architecture",
      featured: false,
      tags: ["Analytics", "GTM", "ROI Optimization"],
      image: "/assets/images/edge-image-optimization-pipeline-hero-1759121621363.png",
      content: "Advanced analytics implementation guide...",
      views: 2156,
      likes: 124,
      comments: 18
    },
    {
      id: 5,
      title: "Security First: Hardening Web Infrastructure with Multi-Layered Defense",
      excerpt: "Learn how to implement comprehensive security measures that protect against 85,000+ monthly bot attacks while maintaining performance.",
      author: "Jacob Darling",
      publishDate: "2024-11-20",
      readTime: "11 min read",
      category: "systems-architecture",
      featured: false,
      tags: ["Security", "Infrastructure", "Performance"],
      image: "/assets/images/download-1759120020924.png",
      content: "Web security implementation strategies...",
      views: 1745,
      likes: 78,
      comments: 12
    },
    {
      id: 6,
      title: "Legal Industry Digital Transformation: 35% Increase in Client Inquiries",
      excerpt: "How I helped a law firm transition from traditional marketing to digital-first strategy, resulting in significant business growth.",
      author: "Jacob Darling",
      publishDate: "2024-11-05",
      readTime: "9 min read",
      category: "industry-insights",
      featured: false,
      tags: ["Legal Industry", "Digital Marketing", "Client Acquisition"],
      image: "/assets/images/INterview-22-1759117511113.jpg",
      content: "Legal industry marketing transformation...",
      views: 1432,
      likes: 67,
      comments: 9
    }
  ];

  const filteredPosts = useMemo(() => {
    return blogPosts?.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post?.category === selectedCategory;
      const matchesSearch = post?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                          post?.excerpt?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                          post?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts?.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts?.length / postsPerPage);

  const featuredPost = blogPosts?.find(post => post?.featured) || blogPosts?.[0];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog - Jacob Darling | Marketing Technology Insights</title>
        <meta name="description" content="Marketing automation insights, technical tutorials, and industry analysis from Jacob Darling. Learn about systems architecture, automation workflows, and digital transformation." />
        <meta name="keywords" content="marketing automation, systems architecture, digital transformation, web development, Indianapolis" />
      </Helmet>
      {/* Hero Section with Featured Article */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-card py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Marketing Technology
              <span className="text-conversion block mt-2">Insights & Tutorials</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Deep dives into marketing automation, systems architecture, and digital transformation 
              strategies that drive real business results.
            </p>
          </div>

          {/* Featured Article Carousel */}
          {featuredPost && (
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={featuredPost?.image}
                    alt={featuredPost?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-conversion text-conversion-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-conversion text-sm font-medium">
                      {categories?.find(cat => cat?.id === featuredPost?.category)?.name}
                    </span>
                    <span className="text-text-secondary text-sm">{featuredPost?.publishDate}</span>
                    <span className="text-text-secondary text-sm">{featuredPost?.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4 line-clamp-2">
                    {featuredPost?.title}
                  </h2>
                  <p className="text-text-secondary mb-6 line-clamp-3">
                    {featuredPost?.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-text-secondary">
                        <Icon name="Eye" size={16} />
                        <span className="text-sm">{featuredPost?.views?.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-text-secondary">
                        <Icon name="Heart" size={16} />
                        <span className="text-sm">{featuredPost?.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-text-secondary">
                        <Icon name="MessageCircle" size={16} />
                        <span className="text-sm">{featuredPost?.comments}</span>
                      </div>
                    </div>
                    <Button variant="default" className="bg-conversion hover:bg-conversion/90">
                      Read Article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="py-8 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
              <Input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                className="pl-10"
              />
            </div>

            {/* Category Navigation */}
            <div className="flex flex-wrap gap-2">
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => {
                    setSelectedCategory(category?.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category?.id
                      ? 'bg-conversion text-conversion-foreground'
                      : 'bg-muted text-text-secondary hover:bg-card hover:text-text-primary border border-border'
                  }`}
                >
                  {category?.name}
                  <span className="ml-2 text-xs opacity-75">({category?.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Articles Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {paginatedPosts?.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {paginatedPosts?.map((post) => (
                  <article key={post?.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post?.image}
                        alt={post?.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-conversion text-xs font-medium">
                          {categories?.find(cat => cat?.id === post?.category)?.name}
                        </span>
                        <span className="text-text-secondary text-xs">{post?.publishDate}</span>
                        <span className="text-text-secondary text-xs">{post?.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary mb-3 line-clamp-2 group-hover:text-conversion transition-colors">
                        {post?.title}
                      </h3>
                      <p className="text-text-secondary mb-4 line-clamp-3 text-sm">
                        {post?.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1 text-text-secondary">
                            <Icon name="Eye" size={14} />
                            <span className="text-xs">{post?.views?.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-text-secondary">
                            <Icon name="Heart" size={14} />
                            <span className="text-xs">{post?.likes}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-conversion hover:text-conversion hover:bg-conversion/10">
                          Read More
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-4">
                        {post?.tags?.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-muted text-text-secondary text-xs rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    iconName="ChevronLeft"
                    iconPosition="left"
                  >
                    Previous
                  </Button>
                  <div className="flex space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)?.map(pageNum => (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                          currentPage === pageNum
                            ? 'bg-conversion text-conversion-foreground'
                            : 'bg-muted text-text-secondary hover:bg-card'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    iconName="ChevronRight"
                    iconPosition="right"
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">No Articles Found</h3>
              <p className="text-text-secondary">
                Try adjusting your search criteria or browse all categories
              </p>
            </div>
          )}
        </div>
      </section>
      {/* Newsletter Signup */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Stay Updated with Marketing Technology Insights
          </h2>
          <p className="text-text-secondary mb-8 text-lg">
            Get the latest articles, case studies, and technical tutorials delivered to your inbox.
            No spam, just actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1"
            />
            <Button className="bg-conversion hover:bg-conversion/90 px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-text-secondary text-sm mt-4">
            Join 1,200+ marketing professionals who trust our insights
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;