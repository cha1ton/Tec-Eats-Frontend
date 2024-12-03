// src/components/user/RestaurantList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="row">
      {restaurants.map((restaurant) => (
        <div className="col-12 col-md-6 col-lg-4 mb-4" key={restaurant.id}>
          <div className="card">
            <img src={restaurant.image} className="card-img-top" alt={restaurant.name} />
            <div className="card-body">
              <h5 className="card-title">{restaurant.name}</h5>
              <p className="card-text">{restaurant.description}</p>
              <Link to={`/restaurant/${restaurant.id}`} className="btn btn-primary">
                Ver detalles
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
