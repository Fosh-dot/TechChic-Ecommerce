import { useParams } from "react-router-dom";

import { useState } from "react";

import products from "../data/products";

import ProductCard from "../components/ProductCard";

import { useCart } from "../context/CartContext";

import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  // RELATED PRODUCTS
  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .slice(0, 4);

  // TOTAL PRICE
  const totalPrice = product.price * quantity;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="detailsPage">
      {/* PRODUCT SECTION */}

      <div className="detailsContainer">
        {/* IMAGE */}

        <div className="imageSection">
          <img src={product.image_url} alt={product.name} />
        </div>

        {/* INFO */}

        <div className="infoSection">
          <p className="category">{product.category}</p>

          <h1>{product.name}</h1>

          <div className="rating">⭐{product.rating}</div>

          <p className="description">{product.description}</p>

          <h2>${totalPrice.toFixed(2)}</h2>

          {/* QUANTITY */}

          <div className="quantityBox">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              -
            </button>

            <span>{quantity}</span>

            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          {/* BUTTON */}

          <button className="detailsBtn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* RELATED */}

      <section className="relatedSection">
        <h2>Related Products</h2>

        <div className="grid">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
