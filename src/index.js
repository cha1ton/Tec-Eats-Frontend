// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppUser from './App';  // Importa el archivo correcto AppUser.jsx
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppUser />  {/* Aquí es donde debes llamar al componente AppUser */}
  </React.StrictMode>
);

// Si quieres empezar a medir el rendimiento en tu app, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envíalos a un endpoint de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
