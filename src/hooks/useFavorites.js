// hooks/useFavorites.js
// Custom hook for managing favorite movies

import { useState } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  /**
   * Add a movie to favorites
   * @param {Object} movie - Movie object to add
   */
  const addFavorite = (movie) => {
    setFavorites(prev => [...prev, movie]);
  };

  /**
   * Remove a movie from favorites
   * @param {string} imdbID - IMDb ID of the movie to remove
   */
  const removeFavorite = (imdbID) => {
    setFavorites(prev => prev.filter(m => m.imdbID !== imdbID));
  };

  /**
   * Toggle favorite status of a movie
   * @param {Object} movie - Movie object to toggle
   */
  const toggleFavorite = (movie) => {
    const isFav = favorites.find(f => f.imdbID === movie.imdbID);
    if (isFav) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  /**
   * Check if a movie is in favorites
   * @param {string} imdbID - IMDb ID to check
   * @returns {boolean}
   */
  const isFavorite = (imdbID) => {
    return favorites.some(f => f.imdbID === imdbID);
  };

  /**
   * Clear all favorites
   */
  const clearFavorites = () => {
    setFavorites([]);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearFavorites
  };
};
