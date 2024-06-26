import React from "react";
import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-start">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};
