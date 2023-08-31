// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} Andres Grijalva. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;