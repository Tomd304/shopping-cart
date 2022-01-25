import index from "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <p style={{ fontSize: 24, fontWeight: 400 }}>title</p>
      {props.page == "homepage" && (
        <Link style={{ fontSize: 24, fontWeight: 400 }} to="/shop">
          shop
        </Link>
      )}
      {props.page == "shop" && (
        <Link style={{ fontSize: 24, fontWeight: 400 }} to="/">
          homepage
        </Link>
      )}

      <p>
        <FontAwesomeIcon
          size="1x"
          style={{ fontSize: 24, cursor: "pointer" }}
          icon={faShoppingCart}
        />
      </p>
    </div>
  );
};

export default Navbar;
