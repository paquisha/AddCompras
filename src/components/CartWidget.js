// CartWidget.js
import React,{ useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import Cart from './Cart';

const CartWidget = ({ itemCount }) => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Cambia el estado para mostrar u ocultar el carrito
  };


  return (
    <div className="cart-widget">
    <button onClick={toggleCart} className="cart-icon">
      <img src={process.env.PUBLIC_URL + '/car.svg'} style={{ width: '20px', height: '20px' }} alt="Carrito de Compras" />
      <span className="cart-item-count">{itemCount}</span>
    </button>
    {isCartOpen && (
      <div className="cart-content">
        <Cart />
      </div>
    )}
  </div>
  );
};

export default CartWidget;