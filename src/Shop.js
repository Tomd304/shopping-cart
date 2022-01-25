import Navbar from "./components/Navbar";
import index from "./index.css";
import getRecords from "./records";
import { useState } from "react";

const Shop = () => {
  const [records, setRecords] = useState(getRecords());

  return (
    <div>
      <Navbar page="shop" />
      <h1>This is the shop component</h1>
      {records.map((record) => (
        <div className="card">
          <img
            style={{ height: 200 }}
            src={record.img}
            alt={record.artistName + record.albumName}
          />
          <p>{record.artistName + " " + record.albumName}</p>
        </div>
      ))}
    </div>
  );
};

export default Shop;
