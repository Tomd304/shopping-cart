import getRecords from "./records";
import cartStyle from "./cart.css";
import { useState } from "react";

const Cart = (props) => {
  const records = getRecords();
  const [cartQuantity, setCartQuantity] = useState(
    props.basket.reduce(
      (obj, item) => ({
        ...obj,
        [item.name]: item.quantity,
      }),
      {}
    )
  );

  const handleChange = (e) => {
    const name = e.target.dataset.name;
    const quantity = parseInt(e.target.value);
    setCartQuantity({
      ...cartQuantity,
      [name]: quantity,
    });
    props.updateBasket(name, quantity);
  };

  const handleClick = () => {
    alert("Order Received!");
    props.emptyBasket();
  };

  const totalPrice = props.basket.reduce(
    (prev, cur) => {
      const record = records.find((item) => item.albumName == cur.name);
      return { price: prev.price + record.price * cur.quantity };
    },
    { price: 0 }
  ).price;

  return (
    <div className="cartContainer">
      {props.basket.map((item) => {
        const record = records.find((record) => record.albumName == item.name);
        return (
          <div className="cartItem" key={record.albumName}>
            <img alt={record.albumName} src={record.img} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: 120,
              }}
            >
              <div className="cartItemText">
                <h1 className="">{record.artistName}</h1>
                <h2>{record.albumName}</h2>
              </div>
              <div className="cartItemQuantity">
                <p>Quantity: </p>
                <input
                  type="number"
                  value={cartQuantity[record.albumName]}
                  onChange={(e) => handleChange(e)}
                  data-name={record.albumName}
                />
              </div>
            </div>
            <div className="cartItemPrice">
              <p className="totalPrice">
                £
                {(
                  record.price.toFixed(2) * cartQuantity[record.albumName]
                ).toFixed(2)}
              </p>
              <p className="unitPrice">
                ( {cartQuantity[record.albumName]} x £{record.price.toFixed(2)}{" "}
                )
              </p>
            </div>
          </div>
        );
      })}

      {props.basket.length > 0 && (
        <div className="purchase">
          <h2>Total Price: £{totalPrice}</h2>
          <button type="button" className="purchaseBtn" onClick={handleClick}>
            Purchase
          </button>
        </div>
      )}
      {props.basket.length == 0 && <h1>Cart Empty</h1>}
    </div>
  );
};

export default Cart;
