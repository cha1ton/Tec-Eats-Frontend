// src/components/user/EntradasList.jsx
import React from 'react';

const EntradasList = ({ entradas }) => {
  if (entradas.length === 0) return null;  // Si no hay entradas, no renderiza nada

  return (
    <div>
      <h4>Entradas disponibles:</h4>
      <div className="row">
        {entradas.map((dish) => (
          <div className="col-12 col-md-6 col-lg-4 mb-3" key={dish.id}>
            <div className="card">
              <img src={dish.image} className="card-img-top" alt={dish.name} />
              <div className="card-body">
                <h5 className="card-title">{dish.name}</h5>
                <p className="card-text">{dish.description}</p>
                <h6>Precio: ${dish.price}</h6>
                <button className="btn btn-primary">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntradasList;
