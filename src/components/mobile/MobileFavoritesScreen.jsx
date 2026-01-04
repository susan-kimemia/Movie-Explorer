// components/mobile/MobileFavoritesScreen.jsx
// Mobile version of the favorites screen

import React from 'react';
import { ArrowLeft, Heart, Film } from 'lucide-react';

const MobileFavoritesScreen = ({
  favorites,
  onBack,
  onMovieClick
}) => {
  return (
    <div className="favorites-screen">
      {/* Header */}
      <div className="favorites-header">
        <h1>Your Favorites</h1>
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Favorites List */}
      <div className="favorites-content">
        {favorites.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">
              <Heart size={64} />
            </div>
            <div className="empty-state-title">No Favorites Yet</div>
            <div className="empty-state-subtitle">
              Add movies to your favorites to see them here
            </div>
          </div>
        ) : (
          <div className="movies-grid">
            {favorites.map((movie) => (
              <div
                key={movie.imdbID}
                className="movie-card"
                onClick={() => onMovieClick(movie)}
              >
                <div className="movie-poster">
                  {movie.Poster && movie.Poster !== 'N/A' ? (
                    <img src={movie.Poster} alt={movie.Title} />
                  ) : (
                    <div className="poster-placeholder">
                      <Film size={48} />
                    </div>
                  )}
                </div>
                <div className="movie-info">
                  <div className="movie-title">{movie.Title}</div>
                  <div className="movie-meta">
                    <span className="movie-year">{movie.Year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileFavoritesScreen;
