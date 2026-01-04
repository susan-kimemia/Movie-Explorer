// components/desktop/DesktopHomeScreen.jsx
// Desktop version of the home screen

import React from 'react';
import Header from '../shared/Header';
import SearchBar from '../shared/SearchBar';
import MovieCard from '../shared/MovieCard';
import EmptyState from '../shared/EmptyState';
import { EMPTY_STATES } from '../../utils/constants';

const DesktopHomeScreen = ({ 
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
        size="large"
      />

      {/* Search Bar */}
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={onSearch}
        loading={loading}
        size="large"
      />

      {/* Results */}
      <div className="flex-1 overflow-auto px-8 py-6">
        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400 text-xl">Loading...</div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <EmptyState 
            type="no-results"
            title={error}
            size="large"
          />
        )}

        {/* Initial State - No Search */}
        {!loading && !error && !hasSearched && (
          <EmptyState 
            type="no-search"
            title={EMPTY_STATES.NO_SEARCH.title}
            subtitle={EMPTY_STATES.NO_SEARCH.subtitle}
            size="large"
          />
        )}

        {/* Empty Results */}
        {!loading && !error && hasSearched && movies.length === 0 && (
          <EmptyState 
            type="no-results"
            title={EMPTY_STATES.NO_RESULTS.title}
            subtitle={EMPTY_STATES.NO_RESULTS.subtitle}
            size="large"
          />
        )}

        {/* Movies Grid */}
        {!loading && movies.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            <div className="grid grid-cols-5 gap-6">
              {movies.map(movie => (
                <MovieCard 
                  key={`${movie.imdbID}-${index}`}
                  movie={movie}
                  onClick={() => onMovieClick(movie.imdbID)}
                  size="large"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DesktopHomeScreen;
