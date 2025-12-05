// components/mobile/MobileHomeScreen.jsx
// Mobile version of the home screen

import React from 'react';
import Header from '../shared/Header';
import SearchBar from '../shared/SearchBar';
import MovieCard from '../shared/MovieCard';
import EmptyState from '../shared/EmptyState';
import { EMPTY_STATES } from '../../utils/constants';

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
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <Header 
        onFavoritesClick={onFavoritesClick}
        favoritesCount={favoritesCount}
        size="small"
      />

      {/* Search Bar */}
      <SearchBar 
        value={searchQuery}
        onChange={setSearchQuery}
        onSearch={onSearch}
        loading={loading}
        size="small"
      />

      {/* Results */}
      <div className="flex-1 overflow-auto p-3">
        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400">Loading...</div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <EmptyState 
            type="no-results"
            title={error}
            size="small"
          />
        )}

        {/* Initial State - No Search */}
        {!loading && !error && !hasSearched && (
          <EmptyState 
            type="no-search"
            title={EMPTY_STATES.NO_SEARCH.title}
            subtitle={EMPTY_STATES.NO_SEARCH.subtitle}
            size="small"
          />
        )}

        {/* Empty Results */}
        {!loading && !error && hasSearched && movies.length === 0 && (
          <EmptyState 
            type="no-results"
            title={EMPTY_STATES.NO_RESULTS.title}
            subtitle={EMPTY_STATES.NO_RESULTS.subtitle}
            size="small"
          />
        )}

        {/* Movies Grid */}
        {!loading && movies.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {movies.map(movie => (
              <MovieCard 
                key={movie.imdbID}
                movie={movie}
                onClick={() => onMovieClick(movie.imdbID)}
                size="medium"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileHomeScreen;
