import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/ui/Button';
import Icon from 'components/ui/AppIcon';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-6">
      <div className="relative flex items-center justify-center mb-8">
        {/* Large faint "404" in the background */}
        <span className="absolute inset-0 text-[120px] font-extrabold text-primary opacity-10 flex items-center justify-center select-none">
          404
        </span>
        <Icon name="SearchX" size={64} className="text-primary relative" />
      </div>
      <h2 className="text-3xl font-semibold text-onBackground mb-2">Page not found</h2>
      <p className="text-lg text-onBackground/70 mb-8">
        Sorry, the page you're looking for doesn't exist. Perhaps you mistyped the URL or followed a bad link.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="default"
          size="sm"
          onClick={() => navigate('/')}
          iconName="Home"
        >
          Back home
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          iconName="ArrowLeft"
        >
          Previous page
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
