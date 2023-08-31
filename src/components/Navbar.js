// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import CartWidget from './CartWidget';

const Navbar = ({ isLoggedIn, username, handleLogout, itemCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">banco de Guayaquil</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            {isLoggedIn ? (
              <span className="nav-link">Hola, {username}! <button onClick={handleLogout} className="btn btn-link">Cerrar Sesión</button></span>
            ) : (
              <Link to="/login" className="nav-link">Iniciar Sesión</Link>
            )}
          </li>
          <li className="nav-item">
            {/* Agregar el componente CartWidget con el valor itemCount */}
            <CartWidget itemCount={itemCount} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
