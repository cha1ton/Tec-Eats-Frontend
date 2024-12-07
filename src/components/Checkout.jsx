// src/components/user/Checkout.jsx


import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems, removeItem, calculateTotal, handlePayment }) => {
  return (
    <div className="container mt-4">
      <h2>Confirmación de Compra</h2>
      
      {/* Resumen de los productos en el carrito */}
      <div>
        {cartItems.length === 0 ? (
          <p>No tienes productos en el carrito.</p>
        ) : (
          <div>
            <h3>Resumen de la compra</h3>
            <ul className="list-group">
              {cartItems.map((item) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                  <img src={item.image} className="img-thumbnail" alt={item.name} width="50" />
                  <span>{item.name}</span>
                  <span>S/.{item.price}</span>
                  <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <hr />
            {/* Total de la compra */}
            <h4>Total: S/.{calculateTotal()}</h4>
            <hr />
            
            {/* Botón para confirmar pago */}
            <button className="btn btn-success" onClick={handlePayment}>
              Confirmar Pago
            </button>
          </div>
        )}
      </div>

      {/* Opción de regresar al carrito */}
      <Link to="/cart" className="btn btn-secondary mt-3 mrg-bottom">Volver al carrito</Link>
    </div>
  );
};

export default Checkout;
