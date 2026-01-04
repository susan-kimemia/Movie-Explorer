
// components/mobile/MobileDetailsScreen.jsx
// Mobile version of the details screen

import React from 'react';
import { ArrowLeft, Heart, Star, Calendar, Clock, Film } from 'lucide-react';

const MobileDetailsScreen = ({ 
  movie, 
  onBack, 
  onToggleFavorite, 
  isFavorite 
}) => {
  if (!movie) {
    return (
      <div className="details-screen">
        <div className="details-header">
          <button className="back-button" onClick={onBack}>
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
        <div className="empty-state">
          <div className="empty-state-icon">
            <Film size={64} />
          </div>
          <div className="empty-state-title">No movie selected</div>
        </div>
      </div>
    );
  }

  return (
    <div className="details-screen">
      {/* Header */}
      <div className="details-header">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="details-content">
        {/* Poster Section */}
        <div className="details-poster-section">
          {movie.Poster && movie.Poster !== 'N/A' ? (
            <img src={movie.Poster} alt={movie.Title} />
          ) : (
            <div className="poster-placeholder">
              <Film size={80} />
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="details-info-section">
          {/* Title */}
          <h1 className="details-title">{movie.Title}</h1>

          {/* Meta Info */}
          <div className="details-meta">
            {movie.Year && (
              <div className="details-meta-item">
                <Calendar size={16} />
                <span>{movie.Year}</span>
              </div>
            )}
            {movie.Runtime && (
              <div className="details-meta-item">
                <Clock size={16} />
                <span>{movie.Runtime}</span>
              </div>
            )}
            {movie.imdbRating && movie.imdbRating !== 'N/A' && (
              <div className="details-meta-item details-rating">
                <Star size={16} fill="currentColor" />
                <span>{movie.imdbRating}/10</span>
              </div>
            )}
          </div>

          {/* Plot */}
          {movie.Plot && movie.Plot !== 'N/A' && (
            <p className="details-plot">{movie.Plot}</p>
          )}

          {/* Additional Details */}
          <div className="details-additional">
            {movie.Genre && movie.Genre !== 'N/A' && (
              <div className="details-row">
                <span className="details-label">Genre:</span>
                <span className="details-value">{movie.Genre}</span>
              </div>
            )}
            {movie.Director && movie.Director !== 'N/A' && (
              <div className="details-row">
                <span className="details-label">Director:</span>
                <span className="details-value">{movie.Director}</span>
              </div>
            )}
            {movie.Actors && movie.Actors !== 'N/A' && (
              <div className="details-row">
                <span className="details-label">Cast:</span>
                <span className="details-value">{movie.Actors}</span>
              </div>
            )}
            {movie.Writer && movie.Writer !== 'N/A' && (
              <div className="details-row">
                <span className="details-label">Writer:</span>
                <span className="details-value">{movie.Writer}</span>
              </div>
            )}
            {movie.Language && movie.Language !== 'N/A' && (
              <div className="details-row">
                <span className="details-label">Language:</span>
                <span className="details-value">{movie.Language}</span>
              </div>
            )}
            {movie.Country && movie.Country !== 'N/A' && (
              <div className="details-row">
                <span className="details-label">Country:</span>
                <span className="details-value">{movie.Country}</span>
              </div>
            )}
            {movie.Awards && movie.Awards !== 'N/A' && (
              <div className="details-row">
                <span className="details-label">Awards:</span>
                <span className="details-value">{movie.Awards}</span>
              </div>
            )}
            {movie.BoxOffice && movie.BoxOffice !== 'N/A' && (
              <div className="details-row">
                <span className="details-label">Box Office:</span>
                <span className="details-value">{movie.BoxOffice}</span>
              </div>
            )}
          </div>

          {/* Favorite Button */}
          <button
            className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
            onClick={() => onToggleFavorite(movie)}
          >
            <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileDetailsScreen;
