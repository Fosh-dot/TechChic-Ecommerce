import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              background: "#fff",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <div>
              <h4>{item.name}</h4>
              <p>
                ₦{item.price} x {item.quantity}
              </p>
            </div>

            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h3>Total: ₦{total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
