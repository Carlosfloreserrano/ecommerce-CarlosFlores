import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]); 

  const clear = () => {
    setItems([]); 
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id)); 
  };

  const addItem = (newItem) => {
    const existingIndex = items.findIndex((item) => item.id === newItem.id);

    if (existingIndex === -1) {
      setItems([...items, newItem]);
    }
  };

  return (
    <CartContext.Provider value={{ addItem, clear, items, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
