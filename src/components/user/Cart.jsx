// src/components/user/Cart.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeItem }) => {
  // Función para calcular el total de la compra
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <div>
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-12 col-md-6 col-lg-4 mb-3" key={item.id}>
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <h6>Precio: S/.{item.price}</h6>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mostrar el total de la compra */}
          <div className="d-flex justify-content-between mt-4 mrg-bottom">
            <h4>Total: ${calculateTotal()}</h4>
            <Link to="/checkout" className="btn btn-primary">Pagar</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
