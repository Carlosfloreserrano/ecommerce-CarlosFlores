import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValue = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [value, setValues] = useState(initialValue);
  const { items, clear, removeItem } = useContext(CartContext);

  const total = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleRemove = (id) => {
    removeItem(id);
  };

  const handleSubmit = () => {
    const order = {
      buyer: value,
      items,
      total: total(),
    };

    const db = getFirestore();
    const ordenColecction = collection(db, "orders");

    addDoc(ordenColecction, order)
      .then(({ id }) => {
        if (id) {
          alert("Your Order: " + id + " has been completed");
        }
      })
      .finally(() => {
        clear();
        setValues(initialValue);
      });
  };

  return (
    <Container className="mt-4">
      <h1>Product</h1>
      {items.map((i) => (
        <ul key={i.id}>
          <li>Product: {i.name}</li>
          <li>Quantity: {i.quantity}</li>
          <li>Price: ${i.price}</li>
          <li>
            <button onClick={() => handleRemove(i.id)} style={{ color: "red" }}>
              Delete
            </button>
          </li>
        </ul>
      ))}
      <div>Total: ${total()}</div>
      {items?.length > 0 && (
        <form>
          <label>Name</label>
          <input
            type="text"
            value={value.name}
            name="name"
            onChange={handleChange}
          />
          <label>Phone</label>
          <input
            type="number"
            value={value.phone}
            name="phone"
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            value={value.email}
            name="email"
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}
    </Container>
  );
};
