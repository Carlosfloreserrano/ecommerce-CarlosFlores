import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import data from "../data/products.json";
import ItemCount from "./ItemCount"; 
import "../App.css";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      const filter = data.find((p) => p.id === id);
      setProduct(filter);
    });
  }, [id]);

  const handleAddToCart = (qty) => {
    console.log(`Agregado al carrito: ${product.name} - Cantidad: ${qty}`);

  };

  if (!product) return <div>Loading</div>;

  return (
    <Container className="mt-5">
      <h1>{product.name}</h1>
      <img src={product.pictureUrl} alt={product.name} className="product-image" />
      <p>{product.detail}</p>
      <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
    </Container>
  );
};
