import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import "../styles/Wishlist.css";

function Wishlist() {
  const { favorites } = useCart();

  return (
    <div className="wishlistPage">
      <h1>Your Wishlist ❤️</h1>

      {favorites.length === 0 ? (
        <div className="emptyWishlist">
          <h2>No favorites yet</h2>

          <p>Start adding products you love.</p>
        </div>
      ) : (
        <div className="wishlist-grid">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
