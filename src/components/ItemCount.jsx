import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
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
    console.log(`Quantity added to cart: ${count}`);
    setCount(initial); 
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button variant="outline-secondary" onClick={handleDecrement}>
        -
      </Button>
      <span style={{ margin: "0 10px" }}>{count}</span> {}
      <Button variant="outline-secondary" onClick={handleIncrement}>
        +
      </Button>
      <Button
        variant="primary"
        onClick={handleAddToCart}
        style={{ marginLeft: "10px" }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
