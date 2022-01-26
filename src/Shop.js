import Navbar from "./components/Navbar";
import shopStyle from "./shop.css";
import getRecords from "./records";
import { useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [records, setRecords] = useState(getRecords());

  return (
    <div>
      <Navbar shop={true} />
      <h1 style={{ marginTop: 40, marginBottom: 40, textAlign: "center" }}>
        Vinyl Record Store
      </h1>
      <div className="cardContainer">
        {records.map((record) => (
          <Link to={`/shop/${record.id}`} className="card" key={record.id}>
            <img
              style={{ width: 300 }}
              src={record.img}
              alt={record.artistName + record.albumName}
            />

            <div className="cardText">
              <p className="cardArtist">{record.artistName}</p>
              <p className="cardAlbum">{record.albumName}</p>
              <p className="cardPrice">LP | £{record.price}</p>{" "}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
