import React from "react";

const DesktopDetailsScreen = ({ movie, onBack, onToggleFavorite, isFavorite }) => {
  if (!movie) {
    return <div className="p-6">No movie selected</div>;
  }

  return (
    <div className="p-6">
      <button onClick={onBack}>← Back</button>
      <h2 className="text-2xl font-bold mt-4">{movie.Title}</h2>
      <p className="mt-4 max-w-3xl">{movie.Plot}</p>
      <button onClick={() => onToggleFavorite(movie)} className="mt-6">
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default DesktopDetailsScreen;
