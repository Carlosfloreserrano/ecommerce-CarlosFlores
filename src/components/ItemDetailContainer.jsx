import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const docRef = doc(db, "items", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() }); 
      } else {
        console.error("Product not found"); 
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (qty) => {
    console.log(`Added to cart: ${product?.title} - Quantity: ${qty}`); 
   
  };

  return (
    <ItemDetail 
      product={product} 
      handleAddToCart={handleAddToCart} 
    />
  );
};
