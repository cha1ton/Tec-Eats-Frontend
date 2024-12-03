// src/components/user/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Importa tus estilos


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirige a la página principal después de hacer login
    navigate("/home");
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <img
          src="/images/fondo-tecsup-campus.jpeg"
          alt="Tecsup"
          className="login-banner-image"
        />
        <h2 className="welcome-text">Bienvenido a</h2>
        <img
          src="/images/logo-Tec-Eats.png"
          alt="Tec Eat"
          className="login-logo"
        />
        <p className="description-text text-center">
          Inicia sesión en Tec Eat y disfruta de todas nuestras funcionalidades.
        </p>

        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <button type="submit" className="login-button">
              <i className="fab fa-google"></i> Iniciar Sesión con Google
            </button>
          </form>
        </div>

        <div className="register-link">
          <p>¿No tienes cuenta?</p>
          <a href="/register" className="register-link-text">
            Regístrate aquí
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
