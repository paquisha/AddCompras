import React, { useState } from 'react';

const Card = ({ producto, onAddToCart  }) => {

  const handleAddToCart = () => {
    onAddToCart(producto); // Llama a la función onAddToCart con el producto como argumento
  };

  return (
    <div className="card">
      <img src={producto.imagen} style={{ width: '200px', height: '200px' }} className="card-img-top" alt={producto.descripcion} />
      <div className="card-body">
        <h5 className="card-title">{producto.descripcion}</h5>
        <p className="card-text">{producto.detalle}</p>
        <p className="card-text">Precio: {producto.precio}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default Card;
