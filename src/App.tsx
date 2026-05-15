import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";

import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

import type { Product } from "./types";

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  // ✅ Add product to cart
  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  // ✅ Remove product from cart
  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop addToCart={addToCart} />} />

        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />

        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
