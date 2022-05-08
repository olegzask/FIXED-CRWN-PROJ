import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Authentication } from "./routes/authentication/auth.component";
import { Shop } from "./routes/shop/shop.component";

import Mens from "./routes/mens/mens.component";
import Hats from "./routes/hats/hats.component";
import Jackets from "./routes/jackets/jackets.component";
import Sneakers from "./routes/sneakers/sneakers.component";
import Womens from "./routes/womens/womens.component";
import CheckOut from "./components/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="shop/mens" element={<Mens />} />
        <Route path="shop/hats" element={<Hats />} />
        <Route path="shop/jackets" element={<Jackets />} />
        <Route path="shop/sneakers" element={<Sneakers />} />
        <Route path="shop/womens" element={<Womens />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
