// services/api.js
// API service for movie data
import { API_KEY, API_URL } from '../utils/constants';

/**
 * Search for movies by title
 * @param {string} query - Movie title to search for
 * @returns {Promise<Object>} - Search results with movies array or error
 */
export const searchMovies = async (query) => {
  if (!query.trim()) {
    throw new Error('Please enter a movie title');
  }

  try {
    const response = await fetch(
      `${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`
    );
    const data = await response.json();

    if (data.Response === 'True') {
      return {
        success: true,
        movies: data.Search || [],
        totalResults: data.totalResults
      };
    } else {
      return {
        success: false,
        error: data.Error || 'No movies found',
        movies: []
      };
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch movies. Please try again.',
      movies: []
    };
  }
};

/**
 * Get detailed information about a specific movie
 * @param {string} imdbID - IMDb ID of the movie
 * @returns {Promise<Object>} - Detailed movie data or error
 */
export const getMovieDetails = async (imdbID) => {
  try {
    const response = await fetch(
      `${API_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
    );
    const data = await response.json();

    if (data.Response === 'True') {
      return {
        success: true,
        movie: data
      };
    } else {
      return {
        success: false,
        error: data.Error || 'Failed to fetch movie details'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch movie details. Please try again.'
    };
  }
};
