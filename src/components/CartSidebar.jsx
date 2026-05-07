import { useCart } from "../context/CartContext";
import { useEffect } from "react";
import "../styles/CartSidebar.css";

function CartSidebar() {
  const { cart, total, removeFromCart, isCartOpen, toggleCart } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen]);

  return (
    <>
      <div
        className={`overlay ${isCartOpen ? "showOverlay" : ""}`}
        onClick={toggleCart}
      ></div>

      <div className={`sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="sidebarTop">
          <h2>Your Cart</h2>

          <button className="closeBtn" onClick={toggleCart}>
            ✕
          </button>
        </div>

        <div className="cartItems">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div className="cartItem" key={item.id}>
                <img src={item.image_url} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <p>
                    {item.quantity} × ${item.price}
                  </p>
                </div>

                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))
          )}
        </div>

        <div className="bottom">
          <h3>Total: ${total.toFixed(2)}</h3>

          <button className="checkoutBtn">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default CartSidebar;
