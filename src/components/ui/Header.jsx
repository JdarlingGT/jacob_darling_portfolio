import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';
import { useTheme } from '../../context/ThemeContext';

const Header = ({ className = '' }) => {
  
  const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'User' },
    { name: 'Case Studies', path: '/case-studies', icon: 'FileText' },
    { name: 'Projects', path: '/projects', icon: 'Code' },
    { name: 'Toolbox', path: '/toolbox', icon: 'Wrench' },
    { name: 'Graphic Design', path: '/graphic-design', icon: 'Image' },
    { name: 'Video Projects', path: '/video-projects', icon: 'Video' }
  ];

  const secondaryItems = [
    { name: 'Resume', path: '/resume', icon: 'Download' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  const handleNavigation = (path) => {
    window.location.href = path;
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border brand-shadow'
            : 'bg-transparent'
        } ${className}`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-6 lg:px-8">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer smooth-transition hover:opacity-80"
              onClick={() => handleNavigation('/homepage')}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-conversion rounded-lg flex items-center justify-center">
                  <span className="text-conversion-foreground font-bold text-lg font-mono">JD</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-text-primary">Jacob Darling</h1>
                  <p className="text-xs text-text-secondary font-medium">Marketing Technology Leader</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <button
                  key={item?.name}
                  onClick={() => handleNavigation(item?.path)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted smooth-transition"
                >
                  <Icon name={item?.icon} size={16} />
                  <span className="font-medium">{item?.name}</span>
                </button>
              ))}

              {/* More Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted smooth-transition">
                  <Icon name="MoreHorizontal" size={16} />
                  <span className="font-medium">More</span>
                </button>

                {/* Dropdown */}
                <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg brand-shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition">
                  <div className="py-2">
                    {secondaryItems?.map((item) => (
                      <button
                        key={item?.name}
                        onClick={() => handleNavigation(item?.path)}
                        className="flex items-center space-x-3 w-full px-4 py-2 text-left text-popover-foreground hover:bg-muted smooth-transition"
                      >
                        <Icon name={item?.icon} size={16} />
                        <span>{item?.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavigation('/resume')}
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                Download CV
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => handleNavigation('/contact')}
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground conversion-glow"
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
              >
                Schedule Call
              </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        iconName={theme === 'dark' ? 'Sun' : 'Moon'}
        iconPosition="left"
      >
        <span className="sr-only">Toggle theme</span>
      </Button>

              
            </div>
        
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted smooth-transition"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={toggleMobileMenu} />
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border brand-shadow">
            <div className="px-6 py-4 space-y-2">
              {[...navigationItems, ...secondaryItems]?.map((item) => (
                <button
                  key={item?.name}
                  onClick={() => handleNavigation(item?.path)}
                  className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-left text-text-secondary hover:text-text-primary hover:bg-muted smooth-transition"
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-medium">{item?.name}</span>
                </button>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-4 space-y-3 border-t border-border">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => handleNavigation('/resume')}
                  iconName="Download"
                  iconPosition="left"
                  iconSize={16}
                >
                  Download CV
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleNavigation('/contact')}
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={16}
                >
                  Schedule Call
       
                        <Button
          variant="ghost"
          fullWidth
          size="sm"
          onClick={toggleTheme}
          iconName={theme === 'dark' ? 'Sun' : 'Moon'}
          iconPosition="left"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
