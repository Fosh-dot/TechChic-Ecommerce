import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { useEffect, useState } from "react";

import { FaShoppingBag, FaHeart, FaMoon, FaSun } from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {
  const { toggleCart, cart, favorites } = useCart();

  // 🌙 Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo">
        TECHCHIC
      </Link>

      {/* NAVIGATION */}
      <div className="navLinks">
        <Link to="/">Home</Link>

        <button onClick={toggleCart}>
          <FaShoppingBag />
          <span>{cart.length}</span>
        </button>

        <Link to="/wishlist" className="favoriteNav">
          <FaHeart />
          <span>{favorites.length}</span>
        </Link>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
