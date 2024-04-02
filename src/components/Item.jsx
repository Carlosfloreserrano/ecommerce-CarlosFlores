import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const Item = ({ product }) => (
  <Card style={{ width: '18rem', margin: '0.5rem' }}>
    <Card.Img variant="top" src={product.pictureUrl} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>{product.detail}</Card.Text>
      <Card.Text>${product.price}</Card.Text>
      <Link to={`/item/${product.id}`}>
        <Button variant="primary">Ver Detalles</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default Item;
