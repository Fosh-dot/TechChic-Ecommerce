import { useState } from "react";

import products from "../data/products";

import ProductCard from "../components/ProductCard";

import "../styles/Home.css";

function Home() {
  // SEARCH
  const [search, setSearch] = useState("");

  // CATEGORY
  const [category, setCategory] = useState("All");

  // SORT
  const [sort, setSort] = useState("");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 25;

  // FILTER PRODUCTS
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    })

    .sort((a, b) => {
      if (sort === "low") {
        return a.price - b.price;
      }

      if (sort === "high") {
        return b.price - a.price;
      }

      if (sort === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

  // PAGINATION LOGIC
  const lastProductIndex = currentPage * productsPerPage;

  const firstProductIndex = lastProductIndex - productsPerPage;

  const currentProducts = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="heroContent">
          <h1>Luxury Shopping Experience</h1>

          <p>Discover premium fashion, electronics and lifestyle products.</p>

          <button>Shop Now</button>
        </div>
      </section>

      {/* CONTROLS */}
      <div className="controls">
        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* CATEGORY */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>

          <option>Fashion</option>

          <option>Electronics</option>

          <option>Home</option>
        </select>

        {/* SORT */}
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>

          <option value="low">Price: Low to High</option>

          <option value="high">Price: High to Low</option>

          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* PRODUCTS */}
      <div className="products-grid">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
