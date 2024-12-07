// src/components/user/SearchBar.jsx
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="container mt-4 mrg-bottom">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar un restaurante..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
