import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import ItemDetail from "./ItemDetail";
import Shop from "./Shop";

const Switcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/shop/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Switcher;
