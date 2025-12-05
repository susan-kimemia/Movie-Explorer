// components/shared/EmptyState.jsx
// Empty state component for various scenarios

import React from 'react';
import { Search, Film, Heart } from 'lucide-react';

const EmptyState = ({ 
  type = 'no-search', 
  title, 
  subtitle,
  size = 'medium'
}) => {
  const icons = {
    'no-search': Search,
    'no-results': Film,
    'no-favorites': Heart
  };

  const Icon = icons[type] || Search;
  const isMobile = size === 'small';

  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-400">
      <Icon className={isMobile ? 'w-16 h-16 mb-4' : 'w-24 h-24 mb-6'} />
      <p className={`font-medium ${
        isMobile ? 'text-lg mb-1' : 'text-2xl mb-2'
      }`}>
        {title}
      </p>
      {subtitle && (
        <p className={isMobile ? 'text-sm' : 'text-lg'}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default EmptyState;
