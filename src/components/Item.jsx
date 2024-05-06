import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const Item = ({ product }) => (
  <Card style={{ width: "18rem", margin: "0.5rem" }}>
    <Card.Img variant="top" src={product.image} /> {}
    <Card.Body>
      <Card.Title>{product.title}</Card.Title> {}
      <Card.Text>Category: {product.categoryId}</Card.Text> {}
      <Card.Text>Description: {product.description}</Card.Text> {}
      <Card.Text>Price: ${product.price}</Card.Text> {}
      <Link to={`/item/${product.id}`}> {}
        <Button variant="primary">Agregar al Carrito</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default Item;