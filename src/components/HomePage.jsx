// src/components/user/HomePage.jsx
import React, { useState } from 'react';
import RestaurantList from './RestaurantList';  // Importa el componente RestaurantList
import SearchBar from './SearchBar';  // Importa el componente SearchBar
import restaurants from './restaurantData';  // Importa los datos de los restaurantes

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para el texto de búsqueda

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filtrar los restaurantes según el texto de búsqueda
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center">Restaurantes</h2>
      {/* Usar el componente SearchBar */}
      <SearchBar onSearch={handleSearch} />
      {/* Mostrar la lista filtrada de restaurantes */}
      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  );
};

export default HomePage;
