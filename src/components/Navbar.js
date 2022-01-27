import index from "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const [basketQuantity, setBasketQuantity] = useState(0);

  useEffect(() => {
    setBasketQuantity(() => {
      if (props.basket.length == 1) {
        return props.basket[0].quantity;
      } else if (props.basket.length) {
        return props.basket.reduce((prev, cur) => {
          return { quantity: prev.quantity + cur.quantity };
        }).quantity;
      } else {
        return 0;
      }
    });
  });

  return (
    <div className="navbar">
      <Link to="/">title</Link>
      {!props.shop && <Link to="/shop">shop</Link>}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
        <Link to="/cart">
          <FontAwesomeIcon
            size="1x"
            icon={faShoppingCart}
            style={{ color: "white" }}
          />
        </Link>
        {basketQuantity > 0 && (
          <p style={{ fontSize: 16 }}>x{basketQuantity}</p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
