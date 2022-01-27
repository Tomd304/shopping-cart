import Navbar from "./components/Navbar";
import shopStyle from "./shop.css";
import getRecords from "./records";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Shop = (props) => {
  const [records, setRecords] = useState(getRecords());
  const [cartQuantity, setCartQuantity] = useState(
    records.reduce(
      (obj, item) => ({
        ...obj,
        [item.albumName]: 1,
      }),
      {}
    )
  );

  const handleChange = (e) => {
    setCartQuantity({
      ...cartQuantity,
      [e.target.dataset.name]: e.target.value,
    });
  };

  const handleClick = (e, name) => {
    props.updateBasket(name, cartQuantity[name]);
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ marginTop: 40, marginBottom: 40, textAlign: "center" }}>
        Vinyl Record Store
      </h1>
      <div className="cardContainer">
        {records.map((record) => (
          <div className="card" key={record.albumName}>
            <Link to={`/shop/${record.id}`} className="link">
              <img
                style={{ width: 300 }}
                src={record.img}
                alt={record.artistName + record.albumName}
              />

              <div className="cardText">
                <p className="cardArtist">{record.artistName}</p>
                <p className="cardAlbum">{record.albumName}</p>
                <p className="cardPrice">LP | £{record.price.toFixed(2)}</p>
              </div>
            </Link>
            <div className="addToCart" key={"add"}>
              <input
                type="number"
                value={cartQuantity[record.albumName]}
                onChange={(e) => handleChange(e)}
                data-name={record.albumName}
              />

              <FontAwesomeIcon
                icon={faCartPlus}
                style={{ fontSize: 20, cursor: "pointer" }}
                onClick={(e) => handleClick(e, record.albumName)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
