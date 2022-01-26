import index from "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/">title</Link>
      {!props.shop && <Link to="/shop">shop</Link>}
      <p>
        <FontAwesomeIcon size="1x" icon={faShoppingCart} />
      </p>
    </div>
  );
};

export default Navbar;
