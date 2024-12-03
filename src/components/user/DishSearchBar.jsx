// src/components/user/DishSearchBar.jsx
import React from 'react';

const DishSearchBar = ({ onSearch }) => {
  return (
    <div className="container mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar platos..."
        onChange={onSearch}  // Llamamos a la función que viene del componente padre
      />
    </div>
  );
};

export default DishSearchBar;
