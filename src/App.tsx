import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";

import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

type Product = {
  id: string | number;
  name: string;
  price: number;
  image?: string;
};

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  // ✅ safer state update
  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <BrowserRouter>
      {/* 🔥 PASS CART COUNT TO NAVBAR */}
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />

        <Route path="/cart" element={<Cart cart={cart} />} />

        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
