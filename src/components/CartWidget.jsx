import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span> 00</span>
    </div>
  );
};

export default CartWidget;
