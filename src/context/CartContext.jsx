import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // 🛒 Cart
  const [cart, setCart] = useState([]);

  // ❤️ Favorites
  const [favorites, setFavorites] = useState([]);

  // 🛍 Sidebar
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 🔔 Toast
  const [message, setMessage] = useState("");

  // 🛍 Toggle cart
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // ➕ Add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    // 🔔 Toast message
    setMessage(`${product.name} added`);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  // ❌ Remove from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ❤️ Favorite toggle
  const toggleFavorite = (product) => {
    const exists = favorites.find((item) => item.id === product.id);

    if (exists) {
      setFavorites((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setFavorites((prev) => [...prev, product]);
    }
  };

  // 💰 Total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // 💾 Load cart
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // 💾 Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        removeFromCart,
        toggleFavorite,
        total,
        isCartOpen,
        toggleCart,
        message,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
