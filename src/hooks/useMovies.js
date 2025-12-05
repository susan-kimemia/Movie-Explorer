// hooks/useMovies.js
// Custom hook for managing movie search functionality

import { useState } from 'react';
import { searchMovies as searchMoviesAPI, getMovieDetails as getMovieDetailsAPI } from '../services/api';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  /**
   * Search for movies
   */
  const searchMovies = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter a movie title');
      return;
    }

    setLoading(true);
    setError('');
    setHasSearched(true);

    const result = await searchMoviesAPI(searchQuery);

    if (result.success) {
      setMovies(result.movies);
      setError('');
    } else {
      setMovies([]);
      setError(result.error);
    }

    setLoading(false);
  };

  /**
   * Get detailed movie information
   * @param {string} imdbID - IMDb ID of the movie
   */
  const getMovieDetails = async (imdbID) => {
    setLoading(true);
    setError('');

    const result = await getMovieDetailsAPI(imdbID);

    if (result.success) {
      setSelectedMovie(result.movie);
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  /**
   * Clear search results and reset state
   */
  const clearSearch = () => {
    setMovies([]);
    setSearchQuery('');
    setHasSearched(false);
    setError('');
  };

  return {
    // State
    movies,
    selectedMovie,
    searchQuery,
    loading,
    error,
    hasSearched,
    
    // Actions
    setSearchQuery,
    searchMovies,
    getMovieDetails,
    setSelectedMovie,
    clearSearch
  };
};
