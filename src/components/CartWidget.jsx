import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { items } = useContext(CartContext); 


  const total = items.reduce((acc, elem) => acc + elem.quantity, 0); 

  return (
    <Link to="/cart"> {}
      <FontAwesomeIcon icon={faShoppingCart} /> {}
      <span>{total}</span> {}
    </Link>
  );
};

export default CartWidget;
