import React from 'react';

const UserProfile = () => {
  // Datos de usuario de ejemplo (esto puede venir de un API o contexto)
  const user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '+51 999 123 456',
  };

  return (
    <div className="container mt-4">
      <h2>Perfil de Usuario</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Información del Usuario</h5>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>
        </div>
      </div>
      <button className="btn btn-primary mt-3 mrg-bottom">Editar Perfil</button>
    </div>
  );
};

export default UserProfile;
