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
    </div>
  );
};

export default Cart;
