// utils/constants.js
// Application constants and configuration

// OMDb API Configuration
export const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
export const API_URL = import.meta.env.VITE_OMDB_API_URL;

// Screen names for navigation
export const SCREENS = {
  HOME: 'home',
  DETAILS: 'details',
  FAVORITES: 'favorites'
};

// View modes
export const VIEW_MODES = {
  MOBILE: 'mobile',
  DESKTOP: 'desktop'
};

// Empty state messages
export const EMPTY_STATES = {
  NO_SEARCH: {
    title: 'Search for movies',
    subtitle: 'Enter a movie title above to get started'
  },
  NO_RESULTS: {
    title: 'No movies found',
    subtitle: 'Try a different search term'
  },
  NO_FAVORITES: {
    title: 'No favorites yet',
    subtitle: 'Add some movies to see them here'
  }
};
