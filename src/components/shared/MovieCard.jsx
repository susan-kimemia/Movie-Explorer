// components/shared/MovieCard.jsx
// Reusable movie card component

import React from 'react';
import { Film, Star } from 'lucide-react';

const MovieCard = ({ 
  movie, 
  onClick, 
  size = 'medium',
  showRating = false 
}) => {
  const sizeClasses = {
    small: 'h-40',
    medium: 'h-48',
    large: 'h-72'
  };

  const iconSizes = {
    small: 'w-10 h-10',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      {/* Poster */}
      <div className={`${sizeClasses[size]} bg-gray-200 overflow-hidden`}>
        {movie.Poster && movie.Poster !== 'N/A' ? (
          <img 
            src={movie.Poster} 
            alt={movie.Title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
            <Film className={`${iconSizes[size]} text-white`} />
          </div>
        )}
      </div>

      {/* Info */}
      <div className={size === 'small' ? 'p-3' : 'p-4'}>
        <h3 className={`font-bold mb-1 line-clamp-2 ${
          size === 'small' ? 'text-sm' : 'text-base'
        }`}>
          {movie.Title}
        </h3>
        
        <div className={`flex items-center justify-between text-blue-600 ${
          size === 'small' ? 'text-xs' : 'text-sm'
        }`}>
          <span>{movie.Year}</span>
          {showRating && movie.imdbRating && (
            <span className="flex items-center">
              <Star className={`${size === 'small' ? 'w-3 h-3' : 'w-4 h-4'} fill-current mr-1`} />
              {movie.imdbRating}
            </span>
          )}
        </div>

        {size === 'large' && movie.Genre && (
          <p className="text-xs text-gray-500 mt-2">{movie.Genre}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
