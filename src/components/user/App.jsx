// src/components/user/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
import HomePage from "./HomePage";
import DishList from "./DishList";
import Cart from "./Cart"; // Importamos el componente del carrito
import Checkout from "./Checkout"; // Importamos el componente Checkout
import UserProfile from './UserProfile';  // Importar el componente UserProfile

import "./Styles.css";

const AppUser = () => {
  const [cart, setCart] = useState([]); // Estado para almacenar los elementos del carrito

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Función para calcular el total de la compra
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Función que simula el proceso de pago
  const handlePayment = () => {
    alert("¡Pago realizado con éxito!");
    setCart([]); // Vaciar el carrito después del pago
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage addToCart={addToCart} />} />
        <Route path="/restaurant/:restaurantId" element={<DishList addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cart} removeItem={removeItemFromCart} />}
        />
        <Route path="/checkout" element={<Checkout cartItems={cart} removeItem={removeItemFromCart} calculateTotal={calculateTotal} handlePayment={handlePayment}
        />
        }
        />{" "}
        {/* Ruta para la página de pago */}
        <Route path="/profile" element={<UserProfile />} /> {/* Ruta para el perfil de usuario */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppUser;