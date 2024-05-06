import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ product, handleAddToCart }) => {
  const { addItem } = useContext(CartContext); 

  if (!product) {
    return <div>Loading...</div>;
  }

  const addToCart = (quantity) => {
    addItem({ ...product, quantity }); 
    if (handleAddToCart) {
      handleAddToCart(quantity); 
    }
  };

  return (
    <Container className="mt-5">
      <h1>{product.title}</h1> 
      <img src={product.image} alt={product.title} className="product-image" /> 
      <p>{product.description}</p> 
      <p>Price: ${product.price}</p> 
      <div>Stock: {product.stock}</div> 
      <ItemCount initial={1} stock={product.stock} onAdd={addToCart} /> {}
    </Container>
  );
};

export default ItemDetail;
