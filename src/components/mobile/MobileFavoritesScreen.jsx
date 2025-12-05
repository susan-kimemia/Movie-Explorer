// components/mobile/MobileFavoritesScreen.jsx
// Mobile version of the favorites screen

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import MovieCard from '../shared/MovieCard';
import EmptyState from '../shared/EmptyState';
import { EMPTY_STATES } from '../../utils/constants';

const MobileFavoritesScreen = ({ 
  favorites,
  onBack,
  onMovieClick
}) => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl font-bold">Your Favorites</h1>
        <button 
          onClick={onBack}
          className="text-blue-600 hover:bg-blue-50 px-3 py-2 rounded"
        >
          <ArrowLeft className="inline w-4 h-4 mr-1" />
          Back
        </button>
      </div>

      {/* Favorites List */}
      <div className="flex-1 overflow-auto p-3">
        {favorites.length === 0 ? (
          <EmptyState 
            type="no-favorites"
            title={EMPTY_STATES.NO_FAVORITES.title}
            subtitle={EMPTY_STATES.NO_FAVORITES.subtitle}
            size="small"
          />
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {favorites.map(movie => (
              <MovieCard 
                key={movie.imdbID}
                movie={movie}
                onClick={() => onMovieClick(movie)}
                size="medium"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileFavoritesScreen;
