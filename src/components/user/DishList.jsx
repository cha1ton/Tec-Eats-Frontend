// src/components/user/DishList.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import restaurantData from './restaurantData';  // Datos de los restaurantes
import { Link } from "react-router-dom";  // Importamos Link para la navegación interna
import DishSearchBar from './DishSearchBar';  // Importamos el componente de búsqueda

const DishList = ({ addToCart }) => {
  const { restaurantId } = useParams();  // Obtener el id del restaurante desde la URL
  const [searchTerm, setSearchTerm] = useState('');  // Estado para el término de búsqueda
  const [filteredDishes, setFilteredDishes] = useState([]);  // Estado para los platos filtrados

  // Obtener el restaurante correspondiente
  const restaurant = restaurantData.find((rest) => rest.id === parseInt(restaurantId));

  // Manejar el cambio en el input de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar los platos cuando cambia el término de búsqueda
  useEffect(() => {
    if (restaurant) {
      const allDishes = [
        ...restaurant.menu.entradas,
        ...restaurant.menu.platosPrincipales,
      ];

      const filtered = allDishes.filter((dish) => 
        dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredDishes(filtered);
    }
  }, [searchTerm, restaurant]);

  return (
    <div className="container mt-4">
      <h2>Platos de {restaurant ? restaurant.name : 'Cargando...'}</h2>
      
      <DishSearchBar onSearch={handleSearchChange} />

      {filteredDishes.length === 0 ? (
        <p>No se encontraron platos que coincidan con tu búsqueda.</p>
      ) : (
        <div className="row">
          {filteredDishes.map((dish) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={dish.id}>
              <div className="card">
                <img src={dish.image} className="card-img-top" alt={dish.name} />
                <div className="card-body">
                  <h5 className="card-title">{dish.name}</h5>
                  <p className="card-text">{dish.description}</p>
                  <p className="card-text">Precio: ${dish.price}</p>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => addToCart(dish)} 
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/cart" className="btn btn-secondary mt-3 mrg-bottom">Ir al carrito</Link>
    </div>
  );
};

export default DishList;
