import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import data from "../data/products.json";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

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

  if (!product) return <div>Loading</div>;

  return (
    <Container className="mt-5">
      <h1>{product.name}</h1>
      <img src={product.pictureUrl} alt={product.name} />
      <p>{product.detail}</p>
    </Container>
  );
};
