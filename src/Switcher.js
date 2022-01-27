import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import ItemDetail from "./ItemDetail";
import Shop from "./Shop";
import { useState } from "react";
import Navbar from "./components/Navbar";

const Switcher = () => {
  const [basket, setBasket] = useState([]);

  const updateBasket = (name, quantity) => {
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

  //{ ...basket, [name]: parseInt(quantity) + basket[name] });
  //} else {
  //setBasket({ ...basket, [name]: parseInt(quantity) });
  //}
  // };
  console.log(basket);

  return (
    <BrowserRouter>
      <Navbar basket={basket} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop updateBasket={updateBasket} />} />
        <Route path="/shop/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Switcher;
