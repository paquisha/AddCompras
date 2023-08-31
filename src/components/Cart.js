// Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.imagen} alt={item.descripcion} />
          <div className="cart-item-details">
            <h3>{item.descripcion}</h3>
            <p>Precio: {item.precio}</p>
            <div className="quantity-controls">
              <button>-</button>
              <span>{item.cantidad}</span>
              <button>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
