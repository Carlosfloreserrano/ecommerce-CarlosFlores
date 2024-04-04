import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
    console.log(`Cantidad agregada al carrito: ${count}`);
  };

  return (
    <div>
      <Button variant="outline-secondary" onClick={handleDecrement}>-</Button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <Button variant="outline-secondary" onClick={handleIncrement}>+</Button>
      <Button variant="primary" onClick={handleAddToCart}>Agregar al carrito</Button>
    </div>
  );
};

export default ItemCount;
