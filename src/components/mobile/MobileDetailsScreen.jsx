import React from "react";

const MobileDetailsScreen = ({ movie, onBack, onToggleFavorite, isFavorite }) => {
  if (!movie) {
    return <div className="p-4">No movie selected</div>;
  }

  return (
    <div className="p-4">
      <button onClick={onBack}>← Back</button>
      <h2 className="text-xl font-bold mt-2">{movie.Title}</h2>
      <p className="mt-2">{movie.Plot}</p>
      <button onClick={() => onToggleFavorite(movie)} className="mt-4">
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MobileDetailsScreen;
