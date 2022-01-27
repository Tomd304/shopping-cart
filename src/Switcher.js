import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import ItemDetail from "./ItemDetail";
import Shop from "./Shop";
import Cart from "./Cart";
import { useState } from "react";
import Navbar from "./components/Navbar";

const Switcher = () => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (name, quantity) => {
    const currentQuantity = basket.find((item) => item.name == name);
    if (currentQuantity) {
      setBasket(
        basket.map((item) => {
          if (item.name == name) {
            return {
              name,
              quantity: item.quantity + quantity,
            };
          } else {
            return item;
          }
        })
      );
    } else {
      setBasket([
        ...basket,
        {
          name,
          quantity,
        },
      ]);
    }
  };

  const updateBasket = (name, quantity) => {
    setBasket(
      basket.map((item) => {
        if (item.name == name) {
          return { name, quantity };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <BrowserRouter>
      <Navbar basket={basket} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop addToBasket={addToBasket} />} />
        <Route path="/shop/:id" element={<ItemDetail />} />
        <Route
          path="/cart"
          element={<Cart updateBasket={updateBasket} basket={basket} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Switcher;
