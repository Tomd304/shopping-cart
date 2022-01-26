import Navbar from "./components/Navbar";
import itemStyle from "./item.css";
import { useParams } from "react-router-dom";
import getRecords from "./records";

const ItemDetail = () => {
  const params = useParams();
  const record = getRecords().filter((item) => item.id == params.id)[0];
  return (
    <div>
      <Navbar page="shop" />
      <div className="detailContainer">
        <img src={record.img} />
        <h1>{record.artistName}</h1>
        <h1>{record.albumName}</h1>
        <h1>£{record.price}</h1>
      </div>
    </div>
  );
};

export default ItemDetail;
