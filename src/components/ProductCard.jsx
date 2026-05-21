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

  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="favouriteBtn" onClick={() => toggleFavorite(product)}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </div>

      <img src={product.image_url} alt={product.name} />

      <div className="card-info">
        <h3>{product.name}</h3>

        <p className="price">₦{product.price}</p>

        <div className="rating">⭐ {product.rating}</div>

        <div className="actions">
          <Link to={`/product/${product.id}`}>View</Link>
          <button
            onClick={() => {
              addToCart(product);
              setAdded(true);
              setTimeout(() => {
                setAdded(false);
              }, 1500);
            }}
          >
            {added ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
export default ProductCard;
