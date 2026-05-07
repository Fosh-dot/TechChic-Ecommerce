import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { useCart } from "./context/CartContext";
import "./styles/global.css";
import Footer from "./components/Footer";
import Wishlist from "./pages/Wishlist";

function App() {
  const { message } = useCart();

  return (
    <BrowserRouter>
      {message && <div className="toast">{message}</div>}

      <Navbar />

      <CartSidebar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
