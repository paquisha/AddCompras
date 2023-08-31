// Home.js
import React, { useState } from 'react';
import Card from './Card';
import CartWidget from './CartWidget';

const Home = ({ data }) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (producto) => {
    setCartItems([...cartItems, producto]); // Agregar el producto al carrito
  };

  return (
    <div>
      <h1 className='pt-5'>Productos</h1>
      <div className="card-deck">
        {data.map(producto => (
          <Card key={producto.id} producto={producto} onAddToCart={addToCart} />
        ))}
      </div>
      <CartWidget itemCount={cartItems.length} />
    </div>
  );
};

export default Home;
