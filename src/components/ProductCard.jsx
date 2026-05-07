import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import { motion } from "framer-motion";

import { useState } from "react";

import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const { addToCart, favorites, toggleFavorite } = useCart();

  // ❤️ Favorite check
  const isFavorite = favorites.find((item) => item.id === product.id);

  // ✅ Added state
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* ❤️ Favorite */}
      <button className="favoriteBtn" onClick={() => toggleFavorite(product)}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>

      {/* 🖼 Image */}
      <img src={product.image_url} alt={product.name} />

      {/* 📦 Content */}
      <div className="cardContent">
        <h3>{product.name}</h3>

        <p>${product.price}</p>

        <div className="actions">
          <Link to={`/product/${product.id}`}>View</Link>

          <button onClick={handleAddToCart} className={added ? "addedBtn" : ""}>
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
