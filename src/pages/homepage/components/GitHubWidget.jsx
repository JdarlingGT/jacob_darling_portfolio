import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const GitHubWidget = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('year');

  // Mock GitHub data - in real implementation, this would come from GitHub API
  const githubStats = {
    totalRepos: 47,
    totalStars: 1234,
    totalForks: 289,
    totalCommits: 2847,
    followers: 456,
    following: 123,
    streak: 127
  };

  const contributionData = {
    year: [
      { week: 0, days: [0, 2, 1, 3, 2, 1, 0] },
      { week: 1, days: [1, 3, 2, 4, 3, 2, 1] },
      { week: 2, days: [2, 1, 3, 2, 4, 3, 1] },
      { week: 3, days: [0, 2, 1, 3, 2, 4, 2] },
      { week: 4, days: [1, 3, 2, 1, 3, 2, 3] },
      { week: 5, days: [2, 4, 3, 2, 1, 3, 2] },
      { week: 6, days: [1, 2, 4, 3, 2, 1, 4] },
      { week: 7, days: [3, 1, 2, 4, 3, 2, 1] },
      { week: 8, days: [2, 3, 1, 2, 4, 3, 2] },
      { week: 9, days: [1, 4, 2, 3, 1, 2, 3] },
      { week: 10, days: [3, 2, 4, 1, 3, 2, 1] },
      { week: 11, days: [2, 1, 3, 4, 2, 3, 2] },
      { week: 12, days: [4, 3, 2, 1, 4, 1, 3] },
      { week: 13, days: [1, 2, 3, 2, 1, 4, 2] },
      { week: 14, days: [3, 4, 1, 3, 2, 1, 3] },
      { week: 15, days: [2, 1, 4, 2, 3, 2, 1] },
      { week: 16, days: [1, 3, 2, 4, 1, 3, 2] },
      { week: 17, days: [4, 2, 3, 1, 2, 4, 3] },
      { week: 18, days: [2, 3, 1, 3, 4, 2, 1] },
      { week: 19, days: [3, 1, 2, 2, 3, 1, 4] },
      { week: 20, days: [1, 4, 3, 1, 2, 3, 2] },
      { week: 21, days: [2, 2, 4, 3, 1, 2, 3] },
      { week: 22, days: [3, 1, 2, 4, 2, 1, 2] },
      { week: 23, days: [4, 3, 1, 2, 3, 4, 1] },
      { week: 24, days: [2, 1, 3, 1, 4, 2, 3] },
      { week: 25, days: [1, 2, 4, 3, 1, 3, 2] },
      { week: 26, days: [3, 4, 2, 1, 2, 1, 4] },
      { week: 27, days: [2, 3, 1, 4, 3, 2, 1] },
      { week: 28, days: [4, 1, 3, 2, 1, 4, 3] },
      { week: 29, days: [1, 2, 2, 3, 4, 1, 2] },
      { week: 30, days: [3, 4, 1, 2, 2, 3, 1] },
      { week: 31, days: [2, 1, 4, 1, 3, 2, 4] },
      { week: 32, days: [1, 3, 2, 4, 1, 2, 3] },
      { week: 33, days: [4, 2, 3, 2, 4, 1, 2] },
      { week: 34, days: [2, 1, 1, 3, 2, 4, 3] },
      { week: 35, days: [3, 4, 2, 1, 3, 2, 1] },
      { week: 36, days: [1, 2, 4, 2, 1, 3, 4] },
      { week: 37, days: [2, 3, 1, 4, 2, 1, 2] },
      { week: 38, days: [4, 1, 3, 2, 4, 3, 1] },
      { week: 39, days: [3, 2, 2, 1, 3, 4, 2] },
      { week: 40, days: [1, 4, 1, 3, 2, 2, 3] },
      { week: 41, days: [2, 3, 4, 2, 1, 3, 1] },
      { week: 42, days: [3, 1, 2, 4, 3, 1, 2] },
      { week: 43, days: [4, 2, 3, 1, 2, 4, 3] },
      { week: 44, days: [1, 3, 1, 2, 4, 2, 1] },
      { week: 45, days: [2, 4, 2, 3, 1, 3, 4] },
      { week: 46, days: [3, 1, 4, 1, 2, 1, 2] },
      { week: 47, days: [1, 2, 3, 4, 3, 2, 3] },
      { week: 48, days: [4, 3, 1, 2, 1, 4, 1] },
      { week: 49, days: [2, 1, 2, 3, 4, 3, 2] },
      { week: 50, days: [3, 4, 3, 1, 2, 1, 4] },
      { week: 51, days: [1, 2, 1, 4, 3, 2, 3] }
    ]
  };

  const topRepositories = [
    {
      name: "marketing-automation-platform",
      description: "Enterprise-grade marketing automation platform built with React and Node.js",
      language: "JavaScript",
      stars: 234,
      forks: 67,
      updated: "2 days ago"
    },
    {
      name: "ai-customer-analytics",
      description: "Machine learning powered customer journey analytics and prediction system",
      language: "Python",
      stars: 189,
      forks: 45,
      updated: "1 week ago"
    },
    {
      name: "omnichannel-infrastructure",
      description: "Scalable microservices architecture for global marketing operations",
      language: "TypeScript",
      stars: 156,
      forks: 38,
      updated: "3 days ago"
    },
    {
      name: "performance-optimization-toolkit",
      description: "Collection of tools and utilities for marketing technology performance optimization",
      language: "JavaScript",
      stars: 98,
      forks: 29,
      updated: "5 days ago"
    }
  ];

  const getContributionColor = (level) => {
    const colors = {
      0: 'bg-muted',
      1: 'bg-conversion/20',
      2: 'bg-conversion/40',
      3: 'bg-conversion/60',
      4: 'bg-conversion'
    };
    return colors?.[level] || colors?.[0];
  };

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-500',
      'Python': 'bg-green-500',
      'React': 'bg-cyan-500'
    };
    return colors?.[language] || 'bg-gray-500';
  };

  const handleViewGitHub = () => {
    window.open('https://github.com/jacobdarling', '_blank', 'noopener,noreferrer');
  };

  const handleViewRepository = (repoName) => {
    window.open(`https://github.com/jacobdarling/${repoName}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mr-4">
              <Icon name="Github" size={24} className="text-secondary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              GitHub Activity
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real-time showcase of development activity, open source contributions, 
            and technical project portfolio demonstrating consistent code quality and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* GitHub Stats */}
          <div className="bg-card rounded-xl p-6 brand-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-text-primary">GitHub Stats</h3>
              <button
                onClick={handleViewGitHub}
                className="text-conversion hover:text-conversion/80 smooth-transition"
                title="View GitHub Profile"
              >
                <Icon name="ExternalLink" size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="GitBranch" size={16} className="text-text-secondary" />
                  <span className="text-text-secondary">Repositories</span>
                </div>
                <span className="font-bold text-text-primary">{githubStats?.totalRepos}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="Star" size={16} className="text-text-secondary" />
                  <span className="text-text-secondary">Total Stars</span>
                </div>
                <span className="font-bold text-text-primary">{githubStats?.totalStars?.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="GitFork" size={16} className="text-text-secondary" />
                  <span className="text-text-secondary">Total Forks</span>
                </div>
                <span className="font-bold text-text-primary">{githubStats?.totalForks}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="GitCommit" size={16} className="text-text-secondary" />
                  <span className="text-text-secondary">Total Commits</span>
                </div>
                <span className="font-bold text-text-primary">{githubStats?.totalCommits?.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={16} className="text-text-secondary" />
                  <span className="text-text-secondary">Followers</span>
                </div>
                <span className="font-bold text-text-primary">{githubStats?.followers}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="Zap" size={16} className="text-text-secondary" />
                  <span className="text-text-secondary">Current Streak</span>
                </div>
                <span className="font-bold text-conversion">{githubStats?.streak} days</span>
              </div>
            </div>
          </div>

          {/* Contribution Graph */}
          <div className="lg:col-span-2 bg-card rounded-xl p-6 brand-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-text-primary">Contribution Activity</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedPeriod('year')}
                  className={`px-3 py-1 text-sm rounded-md smooth-transition ${
                    selectedPeriod === 'year' ?'bg-conversion text-conversion-foreground' :'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Year
                </button>
                <button
                  onClick={() => setSelectedPeriod('month')}
                  className={`px-3 py-1 text-sm rounded-md smooth-transition ${
                    selectedPeriod === 'month' ?'bg-conversion text-conversion-foreground' :'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Month
                </button>
              </div>
            </div>

            {/* Contribution Grid */}
            <div className="overflow-x-auto">
              <div className="grid grid-cols-52 gap-1 mb-4" style={{ minWidth: '800px' }}>
                {contributionData?.year?.map((week) => (
                  <div key={week?.week} className="grid grid-rows-7 gap-1">
                    {week?.days?.map((level, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                        title={`${level} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4]?.map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Repositories */}
        <div className="mt-12 bg-card rounded-xl p-6 brand-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-text-primary">Featured Repositories</h3>
            <button
              onClick={handleViewGitHub}
              className="text-conversion hover:text-conversion/80 smooth-transition text-sm font-medium"
            >
              View All Repositories →
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {topRepositories?.map((repo, index) => (
              <div 
                key={index}
                className="p-4 bg-muted rounded-lg hover:bg-secondary/10 smooth-transition cursor-pointer"
                onClick={() => handleViewRepository(repo?.name)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Icon name="GitBranch" size={16} className="text-conversion" />
                    <h4 className="font-semibold text-text-primary">{repo?.name}</h4>
                  </div>
                  <Icon name="ExternalLink" size={14} className="text-text-secondary" />
                </div>

                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                  {repo?.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo?.language)}`} />
                      <span className="text-xs text-text-secondary">{repo?.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={12} className="text-text-secondary" />
                      <span className="text-xs text-text-secondary">{repo?.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="GitFork" size={12} className="text-text-secondary" />
                      <span className="text-xs text-text-secondary">{repo?.forks}</span>
                    </div>
                  </div>
                  <span className="text-xs text-text-secondary">{repo?.updated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubWidget;