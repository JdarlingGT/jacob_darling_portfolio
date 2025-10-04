import React, { useState, useEffect, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilters from './components/ProjectFilters';
import ProjectComparison from './components/ProjectComparison';
import ProjectDetails from './components/ProjectDetails';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [sortBy, setSortBy] = useState('recent');

  // Mock projects data
  const projects = [
    {
      id: 1,
      title: "AI-Powered Chatbot & CRM Integration",
      description: "An intelligent, self-service support system that boosts efficiency and enhances the customer experience.",
      longDescription: `I architected and built an AI-powered chatbot that integrated directly with our core business systems (WooCommerce, LearnDash, and FluentCRM) via Cloudflare Workers. This wasn't just a simple FAQ bot; it was a CRM-aware assistant. It could look up a user's order, understand their training history, and provide personalized guidance based on their specific needs.\n\nBy handling the majority of common inquiries automatically, the chatbot dramatically improved our self-service rate and increased the quality of support hand-offs to our human team. This system provides a better, faster experience for our users and allows our team to operate far more efficiently.`,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop",
      type: "automation",
      status: "Live",
      complexity: "Advanced",
      technologies: ["OpenAI", "Cloudflare Workers", "WooCommerce", "LearnDash", "FluentCRM", "JavaScript"],
      githubUrl: "https://github.com/jacobdarling/ai-chatbot-crm",
      liveUrl: "https://chatbot-demo.jacobdarling.dev",
      lastUpdated: "Jan 2025",
      duration: "4 months",
      commits: 445,
      githubStats: {
        stars: 312,
        forks: 87,
        watchers: 156
      },
      features: [
        "CRM-aware intelligent responses",
        "Order status lookup integration",
        "Training history analysis",
        "Personalized user guidance",
        "Multi-system data integration",
        "Automated support escalation",
        "Real-time learning capabilities",
        "Performance analytics dashboard"
      ],
      metrics: [
        { label: "Self-Service Rate Improvement", value: "75%" },
        { label: "Support Ticket Reduction", value: "60%" },
        { label: "Response Time", value: "< 3s" },
        { label: "Customer Satisfaction", value: "4.7/5" }
      ],
      challenges: [
        {
          title: "Multi-System Integration",
          description: "Successfully integrated three different platforms (WooCommerce, LearnDash, FluentCRM) to provide comprehensive user context for intelligent responses."
        },
        {
          title: "Real-time Data Synchronization",
          description: "Implemented efficient caching and webhook systems to ensure chatbot responses reflect the most current user data across all platforms."
        }
      ],
      architecture: "Cloudflare Workers-based architecture with OpenAI API integration and real-time connections to WooCommerce, LearnDash, and FluentCRM systems.",
      deployment: [
        { service: "Cloudflare Workers", description: "Serverless edge computing platform" },
        { service: "OpenAI API", description: "GPT-powered natural language processing" },
        { service: "Webhook Integration", description: "Real-time data sync with CRM systems" }
      ],
      codeSnippets: [
        {
          title: "CRM Context Integration",
          language: "JavaScript",
          code: `async function getUserContext(userId) {\n  const [orders, courses, crmData] = await Promise.all([\n    fetchWooCommerceOrders(userId),\n    fetchLearnDashProgress(userId),\n    fetchFluentCRMData(userId)\n  ]);\n  \n  return {\n    recentOrders: orders.slice(0, 5),\n    courseProgress: courses.filter(c => c.status === 'in-progress'),\n    customerTags: crmData.tags,\n    supportHistory: crmData.interactions\n  };\n}`
        }
      ]
    },
    {
      id: 2,
      title: "Events Hub & Instructor Tools",
      description: "A unified administrative dashboard for data-driven event management and instructor empowerment.",
      longDescription: `I built a unified Events Hub that consolidated data from LearnDash, WooCommerce, and FluentCRM into a single, actionable dashboard. The system features enrollment velocity indicators to flag events that need a marketing boost and provides a detailed breakdown of instrument SKUs purchased by each attendee, allowing instructors to tailor their training.\n\nThis tool has streamlined instructor operations and gives our team much faster, more actionable insights, allowing us to make smarter decisions about resource allocation and marketing focus.`,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      type: "web-app",
      status: "Live",
      complexity: "Advanced",
      technologies: ["React", "Node.js", "LearnDash API", "WooCommerce API", "FluentCRM", "PostgreSQL"],
      githubUrl: "https://github.com/jacobdarling/events-hub",
      liveUrl: "https://events-hub.jacobdarling.dev",
      lastUpdated: "Dec 2024",
      duration: "5 months",
      commits: 678,
      githubStats: {
        stars: 234,
        forks: 56,
        watchers: 89
      },
      features: [
        "Multi-platform data consolidation",
        "Enrollment velocity tracking",
        "Instructor-specific dashboards",
        "Attendee equipment analysis",
        "Marketing campaign triggers",
        "Real-time event monitoring",
        "Automated reporting system",
        "Resource allocation optimization"
      ],
      metrics: [
        { label: "Data Consolidation Speed", value: "85% faster" },
        { label: "Marketing Response Time", value: "3x faster" },
        { label: "Instructor Efficiency", value: "40% improvement" },
        { label: "Event Success Rate", value: "92%" }
      ],
      challenges: [
        {
          title: "Multi-Platform Data Synchronization",
          description: "Created a robust ETL pipeline to synchronize data from three different platforms while maintaining data integrity and real-time updates."
        },
        {
          title: "Predictive Analytics Implementation",
          description: "Developed enrollment velocity algorithms that accurately predict event risk levels, enabling proactive marketing interventions."
        }
      ],
      architecture: "React frontend with Node.js backend, PostgreSQL data warehouse, and real-time API integrations with LearnDash, WooCommerce, and FluentCRM.",
      deployment: [
        { service: "AWS EC2", description: "Scalable application hosting" },
        { service: "RDS PostgreSQL", description: "Managed relational database" },
        { service: "API Gateway", description: "Centralized API management" }
      ],
      codeSnippets: [
        {
          title: "Enrollment Velocity Calculator",
          language: "JavaScript",
          code: `function calculateEnrollmentVelocity(event) {\n  const timeToEvent = new Date(event.startDate) - new Date();\n  const daysRemaining = Math.ceil(timeToEvent / (1000 * 60 * 60 * 24));\n  \n  const currentEnrollments = event.enrollments.length;\n  const targetEnrollments = event.capacity * 0.8; // 80% capacity target\n  \n  const requiredVelocity = (targetEnrollments - currentEnrollments) / daysRemaining;\n  const currentVelocity = calculateCurrentVelocity(event.enrollments);\n  \n  return {\n    status: currentVelocity >= requiredVelocity ? 'on-track' : 'at-risk',\n    gap: Math.max(0, requiredVelocity - currentVelocity),\n    recommendedActions: generateMarketingRecommendations(event, currentVelocity)\n  };\n}`
        }
      ]
    },
    {
      id: 3,
      title: "Quote-to-Order System with Payment Plans",
      description: "A seamless, automated system that reduces sales friction and unlocks new revenue opportunities.",
      longDescription: `I architected an advanced quote-to-order system that transformed the sales process. The team can now generate a quote in a Gravity Form, which automatically creates a pending order in WooCommerce and sends a secure "pay-by-link" to the customer. Crucially, I integrated Stripe to offer ACF-driven payment plans (from 3 to 18 months), making high-value packages much more accessible.\n\nThis system has significantly increased our close rate on phone orders and lowered the operational overhead required to manage complex payment plans, directly contributing to top-line revenue growth.`,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      type: "web-app",
      status: "Live",
      complexity: "Advanced",
      technologies: ["WordPress", "WooCommerce", "Gravity Forms", "Stripe API", "Advanced Custom Fields", "PHP"],
      githubUrl: "https://github.com/jacobdarling/quote-to-order",
      liveUrl: "https://quote-system-demo.jacobdarling.dev",
      lastUpdated: "Nov 2024",
      duration: "3 months",
      commits: 356,
      githubStats: {
        stars: 178,
        forks: 34,
        watchers: 67
      },
      features: [
        "Automated quote generation",
        "Secure pay-by-link system",
        "Flexible payment plans (3-18 months)",
        "Stripe integration",
        "WooCommerce order automation",
        "Customer payment tracking",
        "Sales team notifications",
        "Revenue analytics dashboard"
      ],
      metrics: [
        { label: "Close Rate Improvement", value: "35%" },
        { label: "Payment Plan Adoption", value: "60%" },
        { label: "Processing Time Reduction", value: "80%" },
        { label: "Revenue Growth", value: "28%" }
      ],
      challenges: [
        {
          title: "Complex Payment Plan Logic",
          description: "Developed sophisticated payment scheduling system that handles variable terms, automatic retries, and dunning management through Stripe integration."
        },
        {
          title: "Order State Management",
          description: "Created robust order lifecycle management that handles pending, partial, and completed payment states while maintaining data integrity across systems."
        }
      ],
      architecture: "WordPress-based system with WooCommerce for order management, Gravity Forms for quote generation, and Stripe for payment processing and plan management.",
      deployment: [
        { service: "WordPress Hosting", description: "Managed WordPress environment" },
        { service: "Stripe Dashboard", description: "Payment processing and plan management" },
        { service: "Email Automation", description: "Customer communication system" }
      ],
      codeSnippets: [
        {
          title: "Payment Plan Creation",
          language: "PHP",
          code: `function create_payment_plan($order_id, $plan_months) {\n    $order = wc_get_order($order_id);\n    $total = $order->get_total();\n    $monthly_amount = $total / $plan_months;\n    \n    $stripe_customer = create_stripe_customer($order);\n    \n    $subscription = \\Stripe\\Subscription::create([\n        'customer' => $stripe_customer->id,\n        'items' => [[\n            'price_data' => [\n                'currency' => 'usd',\n                'product' => get_stripe_product_id(),\n                'unit_amount' => $monthly_amount * 100,\n                'recurring' => ['interval' => 'month']\n            ]\n        ]],\n        'metadata' => ['wc_order_id' => $order_id]\n    ]);\n    \n    update_post_meta($order_id, '_payment_plan_id', $subscription->id);\n    return $subscription;\n}`
        }
      ]
    },
    {
      id: 4,
      title: "Provider Directory & Analytics Dashboard",
      description: "A data-driven dashboard that proves ROI and drives member retention.",
      longDescription: `I built a custom analytics dashboard that syncs with the GA4 API to display key performance metrics for each provider's profile, including views, link clicks, top traffic sources, and weekly engagement trends. By providing clear, actionable insights and benchmarks against peer averages, this dashboard gives our providers undeniable proof of the ROI their membership delivers.\n\nThis has led to a visible lift in provider engagement and has become a powerful tool for driving upgrades and securing long-term renewals.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      type: "data-viz",
      status: "Live",
      complexity: "Advanced",
      technologies: ["React", "Google Analytics 4 API", "Node.js", "D3.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/jacobdarling/provider-analytics",
      liveUrl: "https://provider-dashboard.jacobdarling.dev",
      lastUpdated: "Dec 2024",
      duration: "4 months",
      commits: 523,
      githubStats: {
        stars: 267,
        forks: 45,
        watchers: 78
      },
      features: [
        "GA4 API integration",
        "Real-time analytics dashboard",
        "Peer benchmarking system",
        "ROI calculation tools",
        "Traffic source analysis",
        "Engagement trend tracking",
        "Automated reporting",
        "Member retention insights"
      ],
      metrics: [
        { label: "Provider Engagement Lift", value: "45%" },
        { label: "Renewal Rate Improvement", value: "30%" },
        { label: "Dashboard Usage", value: "89%" },
        { label: "ROI Proof Delivery", value: "100%" }
      ],
      challenges: [
        {
          title: "GA4 API Complexity",
          description: "Navigated the complex GA4 Reporting API to extract meaningful metrics and transform them into actionable insights for non-technical users."
        },
        {
          title: "Peer Benchmarking Algorithm",
          description: "Developed sophisticated algorithms to create fair peer comparisons based on member tier, location, and specialization while maintaining privacy."
        }
      ],
      architecture: "React dashboard with Node.js backend, GA4 API integration for real-time data, and MongoDB for storing historical analytics and benchmarks.",
      deployment: [
        { service: "AWS ECS", description: "Containerized application deployment" },
        { service: "MongoDB Atlas", description: "Cloud database for analytics storage" },
        { service: "GA4 API", description: "Real-time analytics data source" }
      ],
      codeSnippets: [
        {
          title: "GA4 Data Extraction",
          language: "JavaScript",
          code: "async function fetchProviderAnalytics(providerId, dateRange) {\n  const analyticsClient = getGA4Client();\n  \n  const request = {\n    property: 'properties/YOUR-GA4-PROPERTY-ID',\n    dateRanges: [{ startDate: dateRange.start, endDate: dateRange.end }],\n    dimensions: [{ name: 'pagePath' }, { name: 'source' }],\n    metrics: [{ name: 'screenPageViews' }, { name: 'engagements' }],\n    dimensionFilter: {\n      filter: {\n        fieldName: 'pagePath',\n        stringFilter: { value: `/providers/${providerId}` }\n      }\n    }\n  };\n  \n  const [response] = await analyticsClient.runReport(request);\n  return transformAnalyticsData(response);\n}"
        }
      ]
    },
    {
      id: 5,
      title: "GTM & GA4 Data Layer Revamp",
      description: "Building a foundation of truth for accurate, data-driven marketing decisions.",
      longDescription: `I led a complete revamp of our data layer and GTM container. I implemented a normalized event schema (e.g., gravityFormSubmission, purchaseCompleted) and used server-side PHP hooks to push clean, reliable data into GTM and GA4. I then reconfigured our ad platforms to optimize for high-intent signals only.\n\nThis project resulted in a significant ROAS lift and a sharp reduction in false-positive conversions, giving our leadership team trustworthy data to make smarter, more profitable marketing decisions.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      type: "analytics",
      status: "Live",
      complexity: "Advanced",
      technologies: ["Google Tag Manager", "Google Analytics 4", "PHP", "JavaScript", "Google Ads API", "WordPress"],
      githubUrl: "https://github.com/jacobdarling/gtm-ga4-revamp",
      liveUrl: null,
      lastUpdated: "Oct 2024",
      duration: "3 months",
      commits: 234,
      githubStats: {
        stars: 156,
        forks: 28,
        watchers: 45
      },
      features: [
        "Normalized event schema",
        "Server-side event tracking",
        "Clean data layer architecture",
        "Ad platform optimization",
        "Attribution model improvement",
        "False-positive reduction",
        "ROAS optimization",
        "Marketing decision support"
      ],
      metrics: [
        { label: "ROAS Improvement", value: "40%" },
        { label: "False-Positive Reduction", value: "85%" },
        { label: "Data Accuracy", value: "98%" },
        { label: "Marketing Efficiency", value: "35% increase" }
      ],
      challenges: [
        {
          title: "Legacy Data Cleanup",
          description: "Systematically identified and cleaned years of inconsistent tracking implementations while maintaining historical data continuity."
        },
        {
          title: "Cross-Platform Attribution",
          description: "Developed sophisticated attribution models that accurately track customer journeys across multiple touchpoints and platforms."
        }
      ],
      architecture: "WordPress-based implementation with server-side PHP hooks, GTM container management, and GA4 configuration for enhanced e-commerce tracking.",
      deployment: [
        { service: "Google Tag Manager", description: "Centralized tag management system" },
        { service: "Google Analytics 4", description: "Advanced analytics and reporting" },
        { service: "Google Ads", description: "Optimized conversion tracking" }
      ],
      codeSnippets: [
        {
          title: "Normalized Event Tracking",
          language: "PHP",
          code: `function push_normalized_event($event_name, $event_data) {\n    $normalized_data = array(\n        'event' => $event_name,\n        'event_category' => $event_data['category'],\n        'event_action' => $event_data['action'],\n        'event_label' => $event_data['label'],\n        'value' => floatval($event_data['value']),\n        'currency' => 'USD',\n        'user_id' => get_current_user_id(),\n        'timestamp' => time()\n    );\n    \n    // Push to GTM dataLayer\n    echo \"<script>dataLayer.push(\" . json_encode($normalized_data) . \");</script>\";\n    \n    // Log for debugging\n    error_log('GTM Event: ' . json_encode($normalized_data));\n}`
        }
      ]
    },
    {
      id: 6,
      title: "Training Lifecycle Automation",
      description: "An end-to-end automated system that creates a seamless student journey from purchase to certification.",
      longDescription: `I architected a fully integrated, end-to-end automation pipeline. Now, a single purchase in WooCommerce instantly triggers an enrollment in the correct LearnDash group, which then fires an evaluation form via Gravity Forms. Upon completion, the system logs the data, applies tags via WP Fusion into FluentCRM, and automatically makes the user's certificate available.\n\nThis system has achieved a near-zero reduction in certificate delays and has led to a notable decrease in related support tickets, creating a frictionless and professional experience for our students.`,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      type: "automation",
      status: "Live",
      complexity: "Advanced",
      technologies: ["WordPress", "WooCommerce", "LearnDash", "Gravity Forms", "WP Fusion", "FluentCRM", "PHP"],
      githubUrl: "https://github.com/jacobdarling/training-automation",
      liveUrl: null,
      lastUpdated: "Nov 2024",
      duration: "4 months",
      commits: 456,
      githubStats: {
        stars: 289,
        forks: 67,
        watchers: 112
      },
      features: [
        "Automated enrollment system",
        "Certificate generation",
        "CRM tag management",
        "Progress tracking",
        "Email automation",
        "Evaluation workflows",
        "Student journey mapping",
        "Support ticket reduction"
      ],
      metrics: [
        { label: "Certificate Delay Reduction", value: "98%" },
        { label: "Support Ticket Decrease", value: "65%" },
        { label: "Student Satisfaction", value: "4.8/5" },
        { label: "Process Efficiency", value: "90% improvement" }
      ],
      challenges: [
        {
          title: "Multi-Platform Integration",
          description: "Successfully integrated five different WordPress plugins to create a seamless automation workflow without conflicts or data loss."
        },
        {
          title: "State Management Complexity",
          description: "Developed robust state management system to track student progress across multiple stages while handling edge cases and error recovery."
        }
      ],
      architecture: "WordPress-based ecosystem with WooCommerce for purchases, LearnDash for training, and FluentCRM for customer relationship management, all connected through automated workflows.",
      deployment: [
        { service: "WordPress", description: "Content management and automation platform" },
        { service: "WooCommerce", description: "E-commerce and payment processing" },
        { service: "LearnDash", description: "Learning management system" },
        { service: "FluentCRM", description: "Customer relationship management" }
      ],
      codeSnippets: [
        {
          title: "Automated Enrollment Trigger",
          language: "PHP",
          code: `add_action('woocommerce_order_status_completed', 'auto_enroll_student');\n\nfunction auto_enroll_student($order_id) {\n    $order = wc_get_order($order_id);\n    $customer_id = $order->get_customer_id();\n    \n    foreach ($order->get_items() as $item) {\n        $product_id = $item->get_product_id();\n        $course_id = get_post_meta($product_id, '_related_course', true);\n        \n        if ($course_id) {\n            // Enroll in LearnDash course\n            ld_update_course_access($customer_id, $course_id, true);\n            \n            // Add CRM tags\n            wp_fusion_apply_tags(['enrolled', 'course_' . $course_id], $customer_id);\n            \n            // Log enrollment\n            error_log(\"Student {$customer_id} enrolled in course {$course_id}\");\n        }\n    }\n}`
        }
      ]
    },
    {
      id: 7,
      title: "Edge Security Overhaul with Cloudflare",description: "A proactive, multi-layered defense strategy that neutralized threats, reduced server load, and enhanced performance.",
      longDescription: `I architected and implemented a comprehensive security overhaul using Cloudflare. This created a digital fortress that stopped threats before they could even reach our server. I deployed a WAF with custom firewall rules, implemented rate limiting on critical endpoints (like logins and xmlrpc), and activated Bot Fight Mode, which now blocks over 85,000 malicious hits every month.\n\nBy also implementing tiered caching with an 86% hit ratio, we not only hardened our security but also dramatically improved site performance. The result is a faster, safer experience for users and a significant reduction in origin server load, ensuring business continuity even during coordinated attacks.`,
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop",type: "security",status: "Live",complexity: "Advanced",
      technologies: ["Cloudflare", "WAF Rules", "Rate Limiting", "Bot Management", "CDN", "SSL/TLS"],
      githubUrl: "https://github.com/jacobdarling/cloudflare-security",liveUrl: null,lastUpdated: "Sep 2024",duration: "2 months",
      commits: 123,
      githubStats: {
        stars: 345,
        forks: 78,
        watchers: 134
      },
      features: [
        "WAF custom rule deployment","Bot Fight Mode activation","Rate limiting configuration","Tiered caching strategy","SSL/TLS optimization","DDoS protection","Performance monitoring","Threat analytics dashboard"
      ],
      metrics: [
        { label: "Malicious Hits Blocked", value: "85,000+/month" },
        { label: "Cache Hit Ratio", value: "86%" },
        { label: "Server Load Reduction", value: "70%" },
        { label: "Site Performance Improvement", value: "40%" }
      ],
      challenges: [
        {
          title: "Balancing Security and Performance",description: "Carefully tuned security rules to block malicious traffic while ensuring legitimate users experienced improved performance through intelligent caching."
        },
        {
          title: "Custom Rule Development",description: "Developed sophisticated WAF rules that could distinguish between legitimate traffic and sophisticated attack patterns specific to our application."
        }
      ],
      architecture: "Cloudflare edge network with custom WAF rules, rate limiting policies, and intelligent caching strategies protecting origin WordPress infrastructure.",
      deployment: [
        { service: "Cloudflare WAF", description: "Web application firewall protection" },
        { service: "Bot Management", description: "Intelligent bot detection and mitigation" },
        { service: "CDN", description: "Global content delivery and caching" },
        { service: "Analytics", description: "Security and performance monitoring" }
      ],
      codeSnippets: [
        {
          title: "Custom WAF Rule Configuration",language: "JavaScript",
          code: `// Cloudflare Workers script for advanced security\naddEventListener('fetch', event => {\n  event.respondWith(handleRequest(event.request))\n})\n\nasync function handleRequest(request) {\n  const url = new URL(request.url)\n  const clientIP = request.headers.get('CF-Connecting-IP')\n  \n  // Block known malicious patterns\n  if (url.pathname.includes('xmlrpc.php') && request.method === 'POST') {\n    return new Response('Access Denied', { status: 403 })\n  }\n  \n  // Rate limiting for login attempts\n  if (url.pathname.includes('wp-login.php')) {\n    const rateLimitKey = \`login_attempts_\${clientIP}\`\n    // Implement rate limiting logic\n  }\n  \n  return fetch(request)\n}`
        }
      ]
    },
    {
      id: 8,
      title: "MarketingOS - Campaign Automation Platform",description: "Comprehensive marketing automation platform with AI-powered campaign optimization, multi-channel orchestration, and real-time analytics dashboard.",
      longDescription: `MarketingOS is a comprehensive marketing automation platform designed to streamline campaign management across multiple channels. Built with React and Node.js, it features AI-powered campaign optimization, real-time analytics, and seamless integration with popular marketing tools.\n\nThe platform handles over 10,000 campaigns monthly and has improved client ROI by an average of 340%. Key innovations include predictive audience segmentation, automated A/B testing, and dynamic content personalization.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",type: "automation",status: "Live",complexity: "Advanced",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Python", "Docker"],
      githubUrl: "https://github.com/jacobdarling/marketingos",liveUrl: "https://marketingos-demo.vercel.app",lastUpdated: "Dec 2024",duration: "8 months",
      commits: 847,
      githubStats: {
        stars: 234,
        forks: 67,
        watchers: 89
      },
      features: [
        "AI-powered campaign optimization","Multi-channel orchestration (Email, SMS, Social)","Real-time analytics dashboard","Predictive audience segmentation","Automated A/B testing framework","Dynamic content personalization","CRM integration (Salesforce, HubSpot)","Advanced reporting and attribution"
      ],
      metrics: [
        { label: "Monthly Campaigns", value: "10,000+" },
        { label: "Average ROI Improvement", value: "340%" },
        { label: "Client Retention", value: "94%" },
        { label: "Processing Speed", value: "< 2s" }
      ],
      challenges: [
        {
          title: "Real-time Data Processing",description: "Implemented Redis caching and WebSocket connections to handle real-time campaign performance updates for thousands of concurrent users."
        },
        {
          title: "AI Model Integration",description: "Built custom ML pipeline using Python and TensorFlow to predict optimal send times and content variations, improving engagement by 45%."
        }
      ],
      architecture: "Microservices architecture deployed on AWS with Docker containers. React frontend communicates with Node.js API gateway, which orchestrates multiple specialized services for campaign management, analytics, and AI processing.",
      deployment: [
        { service: "AWS ECS", description: "Container orchestration for scalable microservices" },
        { service: "MongoDB Atlas", description: "Managed database with automatic scaling" },
        { service: "Redis ElastiCache", description: "High-performance caching layer" },
        { service: "CloudFront CDN", description: "Global content delivery network" }
      ],
      codeSnippets: [
        {
          title: "Campaign Optimization Algorithm",language: "Python",
          code: `def optimize_campaign_timing(campaign_data, audience_segments):\n    \"\"\"\n    AI-powered campaign timing optimization\n    \"\"\"\n    model = load_model('campaign_optimizer_v2.h5')\n    \n    features = extract_features(campaign_data, audience_segments)\n    predictions = model.predict(features)\n    \n    optimal_times = []\n    for segment, prediction in zip(audience_segments, predictions):\n        optimal_time = calculate_optimal_send_time(\n            segment['timezone'], \n            segment['behavior_pattern'],\n            prediction['engagement_score']\n        )\n        optimal_times.append(optimal_time)\n    \n    return optimal_times`
        }
      ]
    },
    {
      id: 9,
      title: "Strategic Leadership Consulting Platform",description: "Executive consulting platform bridging marketing strategy with technical execution, featuring AI-powered business insights and leadership development tools.",
      longDescription: `A comprehensive consulting platform designed for marketing leaders who need to navigate the intersection of strategy and technology. Built with modern web technologies, this platform delivers AI-powered business insights, strategic planning tools, and leadership development resources.\n\nServing Fortune 500 companies and growing startups alike, the platform has helped over 150 marketing leaders increase their team's technical capabilities by 65% while improving strategic alignment across organizations.`,
      image: "/assets/images/INterview-22-1759117511113.jpg",type: "consulting",status: "Live",complexity: "Advanced",
      technologies: ["React", "TypeScript", "Next.js", "Supabase", "OpenAI", "Tailwind CSS"],
      githubUrl: "https://github.com/jacobdarling/leadership-platform",liveUrl: "https://strategic-leadership-platform.vercel.app",lastUpdated: "Jan 2025",duration: "6 months",
      commits: 567,
      githubStats: {
        stars: 189,
        forks: 42,
        watchers: 78
      },
      features: [
        "AI-powered strategic assessments","Leadership development frameworks","Technical skill gap analysis","Cross-functional team alignment tools","ROI tracking and attribution","Executive reporting dashboards","Industry benchmarking tools","Strategic planning templates"
      ],
      metrics: [
        { label: "Marketing Leaders Served", value: "150+" },
        { label: "Technical Capability Increase", value: "65%" },
        { label: "Strategic Alignment Improvement", value: "78%" },
        { label: "Client Satisfaction Score", value: "4.9/5" }
      ],
      challenges: [
        {
          title: "Executive-Level Insights",description: "Developed sophisticated analytics engine that translates complex technical metrics into actionable strategic insights for C-suite executives."
        },
        {
          title: "Cross-Functional Collaboration",description: "Built integrated workflow system that bridges marketing, engineering, and product teams through shared objectives and transparent progress tracking."
        }
      ],
      architecture: "Next.js application with TypeScript for type safety, Supabase for real-time data management, and OpenAI integration for intelligent business insights and recommendations.",
      deployment: [
        { service: "Vercel", description: "Serverless Next.js deployment with edge functions" },
        { service: "Supabase", description: "Real-time database and authentication" },
        { service: "OpenAI API", description: "AI-powered strategic insights and recommendations" },
        { service: "Stripe", description: "Subscription and payment management" }
      ],
      codeSnippets: [
        {
          title: "Strategic Assessment Engine",language: "TypeScript",
          code: `interface StrategicAssessment {\n  teamCapabilities: TechCapability[];\n  marketAlignment: number;\n  executionGaps: Gap[];\n  recommendations: Recommendation[];\n}\n\nconst generateStrategicInsights = async (\n  organizationData: OrganizationData\n): Promise<StrategicAssessment> => {\n  const capabilities = await analyzeTechCapabilities(organizationData);\n  const alignment = calculateMarketAlignment(organizationData);\n  \n  const gaps = identifyExecutionGaps(capabilities, alignment);\n  const recommendations = await generateAIRecommendations(gaps);\n  \n  return {\n    teamCapabilities: capabilities,\n    marketAlignment: alignment,\n    executionGaps: gaps,\n    recommendations\n  };\n};`
        }
      ]
    },
    {
      id: 10,
      title: "DataViz Pro - Interactive Analytics Dashboard",
      description: "Advanced data visualization platform with real-time charts, custom dashboard builder, and AI-powered insights generation for marketing teams.",
      longDescription: `DataViz Pro transforms complex marketing data into actionable insights through interactive visualizations and AI-powered analytics. Built with React and D3.js, it processes millions of data points in real-time and generates automated insights.\n\nThe platform serves over 500 marketing teams globally and has reduced reporting time by 75% while improving data-driven decision making by 60%.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      type: "data-viz",
      status: "Live",
      complexity: "Advanced",
      technologies: ["React", "D3.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      githubUrl: "https://github.com/jacobdarling/dataviz-pro",
      liveUrl: "https://dataviz-pro-demo.vercel.app",
      lastUpdated: "Nov 2024",
      duration: "6 months",
      commits: 623,
      githubStats: {
        stars: 189,
        forks: 45,
        watchers: 67
      },
      features: [
        "Real-time data visualization",
        "Custom dashboard builder",
        "AI-powered insights generation",
        "Interactive chart library",
        "Data source integrations",
        "Collaborative sharing",
        "Export capabilities",
        "Mobile-responsive design"
      ],
      metrics: [
        { label: "Data Points Processed", value: "10M+/day" },
        { label: "Reporting Time Reduction", value: "75%" },
        { label: "Active Teams", value: "500+" },
        { label: "Dashboard Load Time", value: "< 1.2s" }
      ],
      challenges: [
        {
          title: "Real-time Data Processing",
          description: "Implemented WebSocket connections and optimized D3.js rendering to handle millions of data points without performance degradation."
        }
      ],
      architecture: "React frontend with D3.js for visualizations, Node.js backend with PostgreSQL for data storage, and Redis for real-time data caching.",
      deployment: [
        { service: "AWS Lambda", description: "Serverless data processing functions" },
        { service: "RDS PostgreSQL", description: "Managed relational database" },
        { service: "ElastiCache", description: "Redis caching for real-time data" }
      ],
      codeSnippets: [
        {
          title: "Real-time Chart Updates",
          language: "JavaScript",
          code: `const updateChart = (newData) => {\n  const svg = d3.select('#chart-container')\n    .select('svg');\n  \n  const line = d3.line()\n    .x(d => xScale(d.timestamp))\n    .y(d => yScale(d.value))\n    .curve(d3.curveMonotoneX);\n  \n  svg.select('.line')\n    .datum(newData)\n    .transition()\n    .duration(300)\n    .attr('d', line);\n};`
        }
      ]
    },
    {
      id: 11,
      title: "E-Commerce Analytics Suite",
      description: "Comprehensive e-commerce analytics platform with customer journey tracking, conversion optimization, and predictive analytics for online retailers.",
      longDescription: `A comprehensive analytics suite designed specifically for e-commerce businesses. Features include customer journey mapping, conversion funnel analysis, predictive analytics for inventory management, and automated reporting.\n\nThe platform has helped over 200 e-commerce businesses increase their conversion rates by an average of 28% and reduce cart abandonment by 35%.`,
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?w=800&h=600&fit=crop",
      type: "web-app",
      status: "Live",
      complexity: "Advanced",
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"],
      githubUrl: "https://github.com/jacobdarling/ecommerce-analytics",
      liveUrl: "https://ecommerce-analytics-demo.vercel.app",
      lastUpdated: "Oct 2024",
      duration: "5 months",
      commits: 456,
      githubStats: {
        stars: 156,
        forks: 34,
        watchers: 52
      },
      features: [
        "Customer journey tracking",
        "Conversion funnel analysis",
        "Predictive inventory analytics",
        "Automated reporting",
        "A/B testing framework",
        "Revenue attribution modeling",
        "Customer segmentation",
        "Real-time notifications"
      ],
      metrics: [
        { label: "Conversion Rate Increase", value: "28%" },
        { label: "Cart Abandonment Reduction", value: "35%" },
        { label: "Active Retailers", value: "200+" },
        { label: "Data Accuracy", value: "99.7%" }
      ],
      challenges: [
        {
          title: "Data Integration",
          description: "Built universal connectors for major e-commerce platforms (Shopify, WooCommerce, Magento) to ensure seamless data synchronization."
        }
      ],
      architecture: "MERN stack application with microservices architecture for scalable data processing and real-time analytics.",
      deployment: [
        { service: "AWS EC2", description: "Scalable compute instances" },
        { service: "MongoDB Atlas", description: "Cloud database service" },
        { service: "CloudWatch", description: "Monitoring and logging" }
      ],
      codeSnippets: [
        {
          title: "Customer Journey Tracking",
          language: "JavaScript",
          code: `const trackCustomerJourney = async (userId, event) => {\n  const journey = await CustomerJourney.findOne({ userId });\n  \n  const touchpoint = {\n    timestamp: new Date(),\n    event: event.type,\n    page: event.page,\n    source: event.source,\n    value: event.value\n  };\n  \n  if (journey) {\n    journey.touchpoints.push(touchpoint);\n    await journey.save();\n  } else {\n    await CustomerJourney.create({\n      userId,\n      touchpoints: [touchpoint]\n    });\n  }\n};`
        }
      ]
    },
    {
      id: 12,
      title: "AI Content Generator API",
      description: "RESTful API service for AI-powered content generation with support for multiple content types, languages, and custom training models.",
      longDescription: `A powerful RESTful API service that leverages advanced AI models to generate high-quality content for marketing teams. Supports blog posts, social media content, email campaigns, and product descriptions across multiple languages.\n\nThe API processes over 50,000 content requests daily and has helped marketing teams reduce content creation time by 80% while maintaining quality standards.`,
      image: "https://images.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg?w=800&h=600&fit=crop",
      type: "api",
      status: "Live",
      complexity: "Advanced",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS", "TensorFlow"],
      githubUrl: "https://github.com/jacobdarling/ai-content-api",
      liveUrl: "https://api.ai-content-generator.com/docs",
      lastUpdated: "Dec 2024",
      duration: "4 months",
      commits: 389,
      githubStats: {
        stars: 298,
        forks: 78,
        watchers: 134
      },
      features: [
        "Multi-format content generation",
        "Custom model training",
        "Multi-language support",
        "Content quality scoring",
        "Batch processing",
        "API rate limiting",
        "Usage analytics",
        "Webhook integrations"
      ],
      metrics: [
        { label: "Daily Requests", value: "50,000+" },
        { label: "Content Creation Time Reduction", value: "80%" },
        { label: "API Uptime", value: "99.9%" },
        { label: "Average Response Time", value: "< 500ms" }
      ],
      challenges: [
        {
          title: "Model Optimization",
          description: "Optimized AI models for faster inference while maintaining quality, reducing response times from 3s to under 500ms."
        }
      ],
      architecture: "FastAPI backend with TensorFlow serving for AI model inference, PostgreSQL for data storage, and Redis for caching and rate limiting.",
      deployment: [
        { service: "AWS ECS", description: "Container orchestration" },
        { service: "Application Load Balancer", description: "Traffic distribution" },
        { service: "RDS PostgreSQL", description: "Managed database" }
      ],
      codeSnippets: [
        {
          title: "Content Generation Endpoint",
          language: "Python",
          code: `@app.post("/generate/content")\nasync def generate_content(\n    request: ContentRequest,\n    api_key: str = Depends(validate_api_key)\n):\n    try:\n        # Load appropriate model\n        model = await load_model(request.content_type)\n        \n        # Generate content\n        generated_content = await model.generate(\n            prompt=request.prompt,\n            max_length=request.max_length,\n            temperature=request.temperature\n        )\n        \n        # Quality scoring\n        quality_score = await score_content_quality(generated_content)\n        \n        return {\n            "content": generated_content,\n            "quality_score": quality_score,\n            "tokens_used": len(generated_content.split())\n        }\n    except Exception as e:\n        raise HTTPException(status_code=500, detail=str(e))`
        }
      ]
    },
    {
      id: 13,
      title: "Social Media Scheduler",
      description: "Cross-platform social media scheduling tool with AI-powered optimal timing, content suggestions, and comprehensive analytics.",
      longDescription: `A comprehensive social media management platform that helps businesses schedule, publish, and analyze their social media content across multiple platforms. Features AI-powered optimal timing suggestions and automated content optimization.\n\nUsed by over 1,000 businesses to manage their social media presence, resulting in an average 45% increase in engagement rates.`,
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
      type: "web-app",
      status: "In Development",
      complexity: "Intermediate",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Express", "AWS"],
      githubUrl: "https://github.com/jacobdarling/social-scheduler",
      liveUrl: null,
      lastUpdated: "Nov 2024",
      duration: "3 months",
      commits: 234,
      githubStats: {
        stars: 87,
        forks: 23,
        watchers: 34
      },
      features: [
        "Multi-platform scheduling",
        "AI-powered timing optimization",
        "Content calendar view",
        "Bulk upload and scheduling",
        "Analytics and reporting",
        "Team collaboration",
        "Content templates",
        "Hashtag suggestions"
      ],
      metrics: [
        { label: "Active Businesses", value: "1,000+" },
        { label: "Engagement Increase", value: "45%" },
        { label: "Posts Scheduled Daily", value: "25,000+" },
        { label: "Platform Integrations", value: "8" }
      ],
      challenges: [
        {
          title: "API Rate Limiting",
          description: "Implemented intelligent queuing system to handle rate limits across different social media platforms while ensuring timely post delivery."
        }
      ],
      architecture: "Vue.js frontend with Node.js backend, MongoDB for data storage, and queue-based system for handling social media API interactions.",
      deployment: [
        { service: "AWS EC2", description: "Application hosting" },
        { service: "MongoDB Atlas", description: "Database service" },
        { service: "SQS", description: "Message queuing for post scheduling" }
      ],
      codeSnippets: [
        {
          title: "Optimal Timing Algorithm",
          language: "JavaScript",
          code: `const calculateOptimalTiming = async (userId, platform) => {\n  const userAnalytics = await Analytics.findOne({ userId, platform });\n  const engagementData = userAnalytics.hourlyEngagement;\n  \n  // Find peak engagement hours\n  const peakHours = engagementData\n    .map((engagement, hour) => ({ hour, engagement }))\n    .sort((a, b) => b.engagement - a.engagement)\n    .slice(0, 3);\n  \n  return {\n    recommendedTimes: peakHours.map(p => p.hour),\n    confidence: calculateConfidence(engagementData),\n    timezone: userAnalytics.timezone\n  };\n};`
        }
      ]
    },
    {
      id: 14,
      title: "DevTools Extension Suite",
      description: "Browser extension toolkit for developers with performance monitoring, debugging utilities, and code snippet management.",
      longDescription: `A comprehensive browser extension suite designed to enhance developer productivity. Includes performance monitoring tools, advanced debugging utilities, code snippet management, and API testing capabilities.\n\nDownloaded by over 50,000 developers worldwide and maintains a 4.8/5 rating on the Chrome Web Store.`,
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=800&h=600&fit=crop",
      type: "devtools",
      status: "Live",
      complexity: "Intermediate",
      technologies: ["JavaScript", "React", "Chrome APIs", "TypeScript"],
      githubUrl: "https://github.com/jacobdarling/devtools-suite",
      liveUrl: "https://chrome.google.com/webstore/detail/devtools-suite",
      lastUpdated: "Sep 2024",
      duration: "2 months",
      commits: 167,
      githubStats: {
        stars: 423,
        forks: 89,
        watchers: 156
      },
      features: [
        "Performance monitoring",
        "Advanced debugging tools",
        "Code snippet manager",
        "API testing interface",
        "Network request analyzer",
        "Local storage inspector",
        "Color picker utility",
        "Responsive design tester"
      ],
      metrics: [
        { label: "Downloads", value: "50,000+" },
        { label: "Chrome Store Rating", value: "4.8/5" },
        { label: "Active Users", value: "35,000+" },
        { label: "Code Snippets Saved", value: "500,000+" }
      ],
      challenges: [
        {
          title: "Cross-browser Compatibility",
          description: "Developed universal extension architecture that works across Chrome, Firefox, and Edge with minimal code duplication."
        }
      ],
      architecture: "React-based popup interface with background scripts for browser API interactions and content scripts for page manipulation.",
      deployment: [
        { service: "Chrome Web Store", description: "Primary distribution platform" },
        { service: "Firefox Add-ons", description: "Secondary distribution" },
        { service: "GitHub Releases", description: "Direct download option" }
      ],
      codeSnippets: [
        {
          title: "Performance Monitoring",
          language: "JavaScript",
          code: `const monitorPerformance = () => {\n  const observer = new PerformanceObserver((list) => {\n    const entries = list.getEntries();\n    \n    entries.forEach(entry => {\n      if (entry.entryType === 'navigation') {\n        chrome.storage.local.set({\n          loadTime: entry.loadEventEnd - entry.loadEventStart,\n          domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,\n          firstPaint: entry.responseEnd - entry.requestStart\n        });\n      }\n    });\n  });\n  \n  observer.observe({ entryTypes: ['navigation', 'paint'] });\n};`
        }
      ]
    },
    {
      id: 15,
      title: "Personal Branding & Portfolio Platform",
      description: "Professional portfolio and personal branding platform showcasing strategic marketing leadership with modern web technologies and user experience design.",
      longDescription: `A comprehensive personal branding platform that demonstrates the intersection of strategic marketing expertise and technical execution. Built with React and modern web technologies, this platform serves as both a portfolio showcase and a testament to full-stack development capabilities.\n\nThe platform combines professional storytelling with interactive elements, featuring case studies, project showcases, and thought leadership content. It demonstrates how marketing professionals can leverage technology to create compelling digital experiences.`,
      image: "/assets/images/Gemini_Generated_Image_6zxf7o6zxf7o6zxf-1759117577100.png",
      type: "web-app",
      status: "Live",
      complexity: "Advanced",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "JavaScript"],
      githubUrl: "https://github.com/jacobdarling/portfolio-platform",
      liveUrl: "https://jacobdarling.dev",
      lastUpdated: "Jan 2025",
      duration: "3 months",
      commits: 312,
      githubStats: {
        stars: 145,
        forks: 28,
        watchers: 67
      },
      features: [
        "Interactive case study presentations",
        "Dynamic project filtering and comparison",
        "Professional photo gallery integration",
        "Responsive design system",
        "Performance-optimized architecture",
        "SEO-optimized content structure",
        "Accessibility-first development",
        "Modern animation framework"
      ],
      metrics: [
        { label: "Page Load Speed", value: "< 1.5s" },
        { label: "Lighthouse Score", value: "98/100" },
        { label: "Mobile Performance", value: "95/100" },
        { label: "Accessibility Score", value: "100/100" }
      ],
      challenges: [
        {
          title: "Personal Branding Strategy",
          description: "Developed a comprehensive digital identity that bridges professional marketing expertise with technical capabilities, creating authentic storytelling through visual and interactive design."
        },
        {
          title: "Performance Optimization",
          description: "Implemented advanced optimization techniques including lazy loading, code splitting, and image optimization to achieve exceptional performance scores while maintaining rich visual experience."
        }
      ],
      architecture: "Modern React application built with Vite for optimal performance. Component-driven architecture with reusable UI elements, integrated animation library, and optimized asset delivery.",
      deployment: [
        { service: "Vercel", description: "Serverless deployment with automatic optimization" },
        { service: "Cloudflare CDN", description: "Global content delivery and edge optimization" },
        { service: "GitHub Actions", description: "Automated CI/CD pipeline" }
      ],
      codeSnippets: [
        {
          title: "Dynamic Project Filtering",
          language: "JavaScript",
          code: `const filteredProjects = useMemo(() => {\n  let filtered = projects?.filter(project => {\n    const matchesSearch = project?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||\n                         project?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||\n                         project?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchTerm?.toLowerCase()));\n    \n    const matchesType = selectedType === 'all' || project?.type === selectedType;\n    const matchesTech = selectedTech === 'all' || project?.technologies?.some(tech => \n      tech?.toLowerCase() === selectedTech?.toLowerCase()\n    );\n    \n    return matchesSearch && matchesType && matchesTech;\n  });\n\n  return filtered?.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));\n}, [projects, searchTerm, selectedType, selectedTech]);`
        }
      ]
    },
    {
      id: 16,
      title: "Evidence-Based Healthcare Consulting Platform",
      description: "Comprehensive healthcare consulting platform implementing evidence-based practice framework with scientific research integration, clinical expertise, and patient-centered care solutions.",
      longDescription: `A specialized healthcare consulting platform that implements the evidence-based practice (EBP) framework to bridge the gap between scientific research, clinical expertise, and patient values. Built with React and modern healthcare technologies, this platform serves healthcare organizations looking to implement systematic, data-driven decision-making processes.\n\nThe platform integrates three core pillars of evidence-based practice: Scientific Research access through medical databases, Clinical Expertise through practitioner networks, and Patient Values through comprehensive patient engagement tools. This comprehensive approach has helped over 75 healthcare organizations improve patient outcomes by 42% while reducing decision-making time by 60%.`,
      image: "/assets/images/Evidence-Based_Approach_Infographic-1759119540923.png",
      type: "consulting",
      status: "Live",
      complexity: "Advanced",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "FHIR API", "HL7", "Supabase"],
      githubUrl: "https://github.com/jacobdarling/evidence-based-healthcare",
      liveUrl: "https://evidence-healthcare-platform.vercel.app",
      lastUpdated: "Jan 2025",
      duration: "7 months",
      commits: 734,
      githubStats: {
        stars: 298,
        forks: 67,
        watchers: 134
      },
      features: [
        "Evidence-based practice framework implementation",
        "Scientific research database integration",
        "Clinical expertise networking platform",
        "Patient values assessment tools",
        "Real-time clinical decision support",
        "Healthcare data analytics dashboard",
        "Compliance and audit trail management",
        "Multi-stakeholder collaboration tools"
      ],
      metrics: [
        { label: "Healthcare Organizations Served", value: "75+" },
        { label: "Patient Outcome Improvement", value: "42%" },
        { label: "Decision-Making Time Reduction", value: "60%" },
        { label: "Clinical Accuracy Increase", value: "38%" }
      ],
      challenges: [
        {
          title: "Healthcare Data Integration",
          description: "Successfully integrated FHIR and HL7 standards to ensure seamless data exchange across multiple healthcare systems while maintaining strict compliance with HIPAA regulations."
        },
        {
          title: "Evidence Synthesis Algorithm",
          description: "Developed sophisticated algorithms that synthesize scientific research, clinical expertise, and patient preferences to provide weighted recommendations for clinical decision-making."
        }
      ],
      architecture: "React-based frontend with TypeScript for type safety, Node.js backend with PostgreSQL for healthcare data management, integrated with FHIR APIs for interoperability and Supabase for real-time collaboration features.",
      deployment: [
        { service: "AWS ECS", description: "HIPAA-compliant container orchestration" },
        { service: "RDS PostgreSQL", description: "Encrypted healthcare database" },
        { service: "API Gateway", description: "Secure healthcare API management" },
        { service: "CloudTrail", description: "Compliance and audit logging" }
      ],
      codeSnippets: [
        {
          title: "Evidence Synthesis Engine",
          language: "TypeScript",
          code: `interface EvidenceAssessment {\n  scientificEvidence: ResearchData[];\n  clinicalExpertise: ExpertOpinion[];\n  patientValues: PatientPreference[];\n  recommendation: ClinicalRecommendation;\n}\n\nconst synthesizeEvidence = async (\n  patientCase: PatientCase,\n  clinicalQuestion: string\n): Promise<EvidenceAssessment> => {\n  const [research, expertise, preferences] = await Promise.all([\n    fetchScientificResearch(clinicalQuestion),\n    getClinicalExpertise(patientCase.specialty),\n    assessPatientValues(patientCase.patientId)\n  ]);\n  \n  const weightedRecommendation = calculateEvidenceWeights({\n    research: research.filter(r => r.qualityScore > 0.8),\n    expertise: expertise.filter(e => e.experienceLevel > 5),\n    preferences: preferences\n  });\n  \n  return {\n    scientificEvidence: research,\n    clinicalExpertise: expertise,\n    patientValues: preferences,\n    recommendation: weightedRecommendation\n  };\n};`
        }
      ]
    }
  ];

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = projects?.filter(project => {
      const matchesSearch = project?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                           project?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                           project?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
      
      const matchesType = selectedType === 'all' || project?.type === selectedType;
      const matchesTech = selectedTech === 'all' || project?.technologies?.some(tech => 
        tech?.toLowerCase() === selectedTech?.toLowerCase()
      );
      const matchesComplexity = selectedComplexity === 'all' || 
                               project?.complexity?.toLowerCase() === selectedComplexity?.toLowerCase();

      return matchesSearch && matchesType && matchesTech && matchesComplexity;
    });

    // Sort projects
    switch (sortBy) {
      case 'recent':
        return filtered?.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
      case 'stars':
        return filtered?.sort((a, b) => (b?.githubStats?.stars || 0) - (a?.githubStats?.stars || 0));
      case 'complexity':
        const complexityOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
        return filtered?.sort((a, b) => complexityOrder?.[b?.complexity] - complexityOrder?.[a?.complexity]);
      default:
        return filtered;
    }
  }, [projects, searchTerm, selectedType, selectedTech, selectedComplexity, sortBy]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedType('all');
    setSelectedTech('all');
    setSelectedComplexity('all');
  };

  const handleCompareProject = (projectId) => {
    setSelectedProjects(prev => {
      if (prev?.includes(projectId)) {
        return prev?.filter(id => id !== projectId);
      } else if (prev?.length < 3) {
        return [...prev, projectId];
      }
      return prev;
    });
  };

  const handleShowComparison = () => {
    setShowComparison(true);
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const selectedProjectsData = projects?.filter(p => selectedProjects?.includes(p?.id));

  useEffect(() => {
    document.title = 'Projects - Jacob Darling | Marketing Technology Leader';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-conversion/10 text-conversion px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Code" size={16} />
              <span>Technical Portfolio</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
              Project <span className="text-conversion">Showcase</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore my technical projects that bridge marketing strategy with innovative technology solutions. 
              Each project demonstrates problem-solving approach and measurable outcomes.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-conversion mb-2">{projects?.length}</div>
              <div className="text-text-secondary">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-conversion mb-2">
                {projects?.reduce((sum, p) => sum + (p?.githubStats?.stars || 0), 0)}
              </div>
              <div className="text-text-secondary">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-conversion mb-2">
                {projects?.filter(p => p?.status === 'Live')?.length}
              </div>
              <div className="text-text-secondary">Live Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-conversion mb-2">
                {[...new Set(projects.flatMap(p => p.technologies))]?.length}
              </div>
              <div className="text-text-secondary">Technologies</div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <ProjectFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            selectedTech={selectedTech}
            onTechChange={setSelectedTech}
            selectedComplexity={selectedComplexity}
            onComplexityChange={setSelectedComplexity}
            onClearFilters={handleClearFilters}
            projectCount={filteredProjects?.length}
          />

          {/* Sort and Compare Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-text-secondary">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e?.target?.value)}
                className="bg-card border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-conversion/50"
              >
                <option value="recent">Most Recent</option>
                <option value="stars">GitHub Stars</option>
                <option value="complexity">Complexity</option>
              </select>
            </div>

            {selectedProjects?.length > 0 && (
              <Button
                variant="outline"
                onClick={handleShowComparison}
                iconName="GitCompare"
                iconPosition="left"
                className="border-conversion text-conversion hover:bg-conversion/10"
              >
                Compare ({selectedProjects?.length})
              </Button>
            )}
          </div>

          {/* Projects Grid */}
          {filteredProjects?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects?.map((project) => (
                <ProjectCard
                  key={project?.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                  onCompare={handleCompareProject}
                  isSelected={selectedProjects?.includes(project?.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Icon name="Search" size={64} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">No projects found</h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your filters or search terms to find relevant projects.
              </p>
              <Button
                variant="outline"
                onClick={handleClearFilters}
                iconName="RotateCcw"
                iconPosition="left"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      {/* Project Comparison Modal */}
      {showComparison && (
        <ProjectComparison
          projects={selectedProjectsData}
          onClose={() => setShowComparison(false)}
          onRemoveProject={handleCompareProject}
        />
      )}
      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;