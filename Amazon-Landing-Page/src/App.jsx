import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./app/pages/Home";
import Category from "./app/pages/Category";
import Checkout from "./app/pages/Checkout";
import Cart from "./app/pages/Cart";
import ProductDetail from "./app/pages/ProductDetail";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </CartProvider>
  );
}

export default App;
