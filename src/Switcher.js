import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import ItemDetail from "./ItemDetail";
import Shop from "./Shop";
import { useState } from "react";
import Navbar from "./components/Navbar";

const Switcher = () => {
  const [basket, setBasket] = useState({});

  const updateBasket = (name, quantity) => {
    const currentQuantity = basket[name];
    if (currentQuantity) {
      setBasket({ ...basket, [name]: parseInt(quantity) + basket[name] });
    } else {
      setBasket({ ...basket, [name]: parseInt(quantity) });
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop updateBasket={updateBasket} />} />
        <Route path="/shop/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Switcher;
