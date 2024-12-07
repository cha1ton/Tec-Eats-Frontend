import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import DishList from "./components/DishList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import UserProfile from './components/UserProfile';
import "./components/Styles.css";

const AppUser = () => {
  const [cart, setCart] = useState([]); 

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handlePayment = () => {
    alert("¡Pago realizado con éxito!");
    setCart([]);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage addToCart={addToCart} />} />
          <Route path="/restaurant/:restaurantId" element={<DishList addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cart} removeItem={removeItemFromCart} />}
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cart}
                removeItem={removeItemFromCart}
                calculateTotal={calculateTotal}
                handlePayment={handlePayment}
              />
            }
          />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();

  const showNavbarAndFooter = location.pathname !== "/";

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      {children}
      {showNavbarAndFooter && <Footer />}
    </>
  );
};

export default AppUser;
