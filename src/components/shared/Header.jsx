import React from "react";

const Header = ({ title, onBack, onFavoritesClick }) => {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      {onBack && <button onClick={onBack}>←</button>}
      <h1 className="text-lg font-bold">{title}</h1>
      {onFavoritesClick && <button onClick={onFavoritesClick}>❤️</button>}
    </header>
  );
};

export default Header;
