// components/desktop/DesktopFavoritesScreen.jsx
// Desktop version of the favorites screen

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import MovieCard from '../shared/MovieCard';
import EmptyState from '../shared/EmptyState';
import { EMPTY_STATES } from '../../utils/constants';

const DesktopFavoritesScreen = ({ 
  favorites,
  onBack,
  onMovieClick
}) => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5 bg-gray-50 border-b">
        <h1 className="text-3xl font-bold">Your Favorites</h1>
        <button 
          onClick={onBack}
          className="text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Search
        </button>
      </div>

      {/* Favorites List */}
      <div className="flex-1 overflow-auto px-8 py-6">
        {favorites.length === 0 ? (
          <EmptyState 
            type="no-favorites"
            title={EMPTY_STATES.NO_FAVORITES.title}
            subtitle={EMPTY_STATES.NO_FAVORITES.subtitle}
            size="large"
          />
        ) : (
          <div className="grid grid-cols-5 gap-6">
            {favorites.map(movie => (
              <MovieCard 
                key={movie.imdbID}
                movie={movie}
                onClick={() => onMovieClick(movie)}
                size="large"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopFavoritesScreen;
