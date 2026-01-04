import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search movies..."
        className="flex-1 border px-3 py-2 rounded"
      />
      <button type="submit" className="px-4 py-2 bg-black text-white rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
