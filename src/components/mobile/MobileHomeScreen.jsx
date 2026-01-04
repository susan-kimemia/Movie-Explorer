// components/mobile/MobileHomeScreen.jsx
// Mobile version of the home screen

import React from 'react';
import { Heart, Search, Film } from 'lucide-react';

const MobileHomeScreen = ({
  movies,
  searchQuery,
  setSearchQuery,
  onSearch,
  onMovieClick,
  onFavoritesClick,
  favoritesCount,
  loading,
  error,
  hasSearched
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="mobile-home-screen">
      {/* Header */}
      <div className="mobile-header">
        <h1>Movie Explorer</h1>
        <button className="favorites-button" onClick={onFavoritesClick}>
          <Heart size={16} />
          <span className="favorites-badge">{favoritesCount}</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-bar-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for movies..."
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={loading}
          >
            {loading ? '...' : 'Search'}
          </button>
        </form>
      </div>

      {/* Results */}
      <div className="mobile-content">
        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="loading-spinner"></div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="empty-state">
            <div className="empty-state-icon">
              <Film size={64} />
            </div>
            <div className="empty-state-title">{error}</div>
          </div>
        )}

        {/* Initial State - No Search */}
        {!loading && !error && !hasSearched && (
          <div className="empty-state">
            <div className="empty-state-icon">
              <Search size={64} />
            </div>
            <div className="empty-state-title">Search for Movies</div>
            <div className="empty-state-subtitle">
              Enter a movie title to get started
            </div>
          </div>
        )}

        {/* Empty Results */}
        {!loading && !error && hasSearched && movies.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">
              <Film size={64} />
            </div>
            <div className="empty-state-title">No Movies Found</div>
            <div className="empty-state-subtitle">
              Try searching for something else
            </div>
          </div>
        )}

        {/* Movies Grid */}
        {!loading && movies.length > 0 && (
          <div className="movies-grid">
            {movies.map((movie, index) => (
              <div
                key={`${movie.imdbID}-${index}`}
                className="movie-card"
                onClick={() => onMovieClick(movie.imdbID)}
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

export default MobileHomeScreen;
