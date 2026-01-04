// App.jsx
// Main application component

import React, { useState } from 'react';

// Hooks
import { useMovies } from './hooks/useMovies';
import { useFavorites } from './hooks/useFavorites';

// Mobile Components
import MobileHomeScreen from './components/mobile/MobileHomeScreen';
import MobileDetailsScreen from './components/mobile/MobileDetailsScreen';
import MobileFavoritesScreen from './components/mobile/MobileFavoritesScreen';

// Desktop Components
import DesktopHomeScreen from './components/desktop/DesktopHomeScreen';
import DesktopDetailsScreen from './components/desktop/DesktopDetailsScreen';
import DesktopFavoritesScreen from './components/desktop/DesktopFavoritesScreen';

// Layout
import ViewToggle from './components/layout/ViewToggle';

// Constants
import { SCREENS, VIEW_MODES } from './utils/constants';

const App = () => {
  // View state
  const [currentScreen, setCurrentScreen] = useState(SCREENS.HOME);
  const [viewMode, setViewMode] = useState(VIEW_MODES.MOBILE);

  // Custom hooks
  const {
    movies,
    selectedMovie,
    searchQuery,
    loading,
    error,
    hasSearched,
    setSearchQuery,
    searchMovies,
    getMovieDetails,
    setSelectedMovie
  } = useMovies();

  const {
    favorites,
    toggleFavorite,
    isFavorite
  } = useFavorites();

  // Navigation handlers
  const handleMovieClick = async (imdbID) => {
    await getMovieDetails(imdbID);
    setCurrentScreen(SCREENS.DETAILS);
  };

  const handleFavoritesClick = () => {
    setCurrentScreen(SCREENS.FAVORITES);
  };

  const handleBackToHome = () => {
    setCurrentScreen(SCREENS.HOME);
  };

  const handleFavoriteMovieClick = (movie) => {
    setSelectedMovie(movie);
    setCurrentScreen(SCREENS.DETAILS);
  };

  // Render mobile screens
  const renderMobileScreen = () => {
    switch (currentScreen) {
      case SCREENS.HOME:
        return (
          <MobileHomeScreen 
            movies={movies}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={searchMovies}
            onMovieClick={handleMovieClick}
            onFavoritesClick={handleFavoritesClick}
            favoritesCount={favorites.length}
            loading={loading}
            error={error}
            hasSearched={hasSearched}
          />
        );
      
      case SCREENS.DETAILS:
        return (
          <MobileDetailsScreen 
            movie={selectedMovie}
            onBack={handleBackToHome}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite(selectedMovie?.imdbID)}
          />
        );
      
      case SCREENS.FAVORITES:
        return (
          <MobileFavoritesScreen 
            favorites={favorites}
            onBack={handleBackToHome}
            onMovieClick={handleFavoriteMovieClick}
          />
        );
      
      default:
        return null;
    }
  };

  // Render desktop screens
  const renderDesktopScreen = () => {
    switch (currentScreen) {
      case SCREENS.HOME:
        return (
          <DesktopHomeScreen 
            movies={movies}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={searchMovies}
            onMovieClick={handleMovieClick}
            onFavoritesClick={handleFavoritesClick}
            favoritesCount={favorites.length}
            loading={loading}
            error={error}
            hasSearched={hasSearched}
          />
        );
      
      case SCREENS.DETAILS:
        return (
          <DesktopDetailsScreen 
            movie={selectedMovie}
            onBack={handleBackToHome}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite(selectedMovie?.imdbID)}
          />
        );
      
      case SCREENS.FAVORITES:
        return (
          <DesktopFavoritesScreen 
            favorites={favorites}
            onBack={handleBackToHome}
            onMovieClick={handleFavoriteMovieClick}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {/* View Mode Toggle */}
      <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />

      {/* Mobile View */}
      {viewMode === VIEW_MODES.MOBILE && (
        <div className="mobile-view screen">
          {renderMobileScreen()}
        </div>
      )}

      {/* Desktop View */}
      {viewMode === VIEW_MODES.DESKTOP && (
        <div className="desktop-view screen">
          {renderDesktopScreen()}
        </div>
      )}
    </div>
  );
};

export default App;
