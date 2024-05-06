import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const refCollection = collection(db, "items");
      ("items");

      const snapshot = await getDocs(refCollection);

      const allProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredProducts = id
        ? allProducts.filter((product) => product.categoryId === id)
        : allProducts;

      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [id]);

  return (
    <div>
      <ItemList products={products} /> {}
    </div>
  );
};
