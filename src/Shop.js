import Navbar from "./components/Navbar";
import shopStyle from "./shop.css";
import getRecords from "./records";
import { useState } from "react";

const Shop = () => {
  const [records, setRecords] = useState(getRecords());

  return (
    <div>
      <Navbar page="shop" />
      <h1>This is the shop component</h1>
      <div className="cardContainer">
        {records.map((record) => (
          <div className="card">
            <img
              style={{ width: 300 }}
              src={record.img}
              alt={record.artistName + record.albumName}
            />
            <div className="cardText">
              <p className="cardArtist">{record.artistName}</p>
              <p className="cardAlbum">{record.albumName}</p>
              <p className="cardPrice">LP | {record.price}</p>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
