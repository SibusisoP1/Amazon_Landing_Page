import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/ProductGrid.css";
import headphone from "../assets/headphone.png";
import speaker from "../assets/speaker.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import ereader from "../assets/ereader.png";
import light from "../assets/readilight.png";

const ProductGrid = () => {
  const { addToCart } = useContext(CartContext);
  const [sortBy, setSortBy] = useState("price-low-high");

  // All products data for the grid - matching ProductDetail IDs
  const allProducts = [
    // Headphones & Speakers Category
    {
      id: "Shop Headphones & Speakers-0",
      title: "Premium Wireless Headphones",
      price: 29.99,
      image: headphone,
      category: "Electronics",
      rating: 4.5,
      reviews: 1234,
    },
    {
      id: "Shop Headphones & Speakers-1",
      title: "Portable Bluetooth Speaker",
      price: 49.99,
      image: speaker,
      category: "Electronics",
      rating: 4.3,
      reviews: 892,
    },
    {
      id: "Shop Headphones & Speakers-2",
      title: "Round Smart Speaker",
      price: 39.99,
      image: img3,
      category: "Electronics",
      rating: 4.4,
      reviews: 567,
    },
    {
      id: "Shop Headphones & Speakers-3",
      title: "Wireless Earbuds",
      price: 19.99,
      image: img4,
      category: "Electronics",
      rating: 4.2,
      reviews: 2103,
    },
    // Home & Kitchen Category
    {
      id: "Shop Home & Kitchen-0",
      title: "Premium Coffee Maker",
      price: 89.99,
      image: img5,
      category: "Home & Kitchen",
      rating: 4.6,
      reviews: 432,
    },
    {
      id: "Shop Home & Kitchen-1",
      title: "Air Fryer Deluxe",
      price: 79.99,
      image: img6,
      category: "Home & Kitchen",
      rating: 4.7,
      reviews: 1567,
    },
    {
      id: "Shop Home & Kitchen-2",
      title: "Eletric Kettle",
      price: 129.99,
      image: img7,
      category: "Home & Kitchen",
      rating: 4.5,
      reviews: 234,
    },
    {
      id: "Shop Home & Kitchen-3",
      title: "Pillow",
      price: 34.99,
      image: img8,
      category: "Home & Kitchen",
      rating: 4.3,
      reviews: 890,
    },
    // Books & Media Category
    {
      id: "Shop Books & Media-0",
      title: "E-Reader Premium",
      price: 149.99,
      image: ereader,
      category: "Books & Media",
      rating: 4.8,
      reviews: 3421,
    },
    {
      id: "Shop Books & Media-1",
      title: "Home Decor",
      price: 59.99,
      image: img5,
      category: "Books & Media",
      rating: 4.4,
      reviews: 567,
    },
    {
      id: "Shop Books & Media-2",
      title: "Kitchen Tools Set",
      price: 24.99,
      image: img6,
      category: "Books & Media",
      rating: 4.2,
      reviews: 123,
    },
    {
      id: "Shop Books & Media-3",
      title: "Reading Light",
      price: 19.99,
      image: light,
      category: "Books & Media",
      rating: 4.6,
      reviews: 789,
    },
  ];

  // Sort products based on selected sort option
  const sortedProducts = useMemo(() => {
    const products = [...allProducts];

    switch (sortBy) {
      case "price-low-high":
        return products.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return products.sort((a, b) => b.price - a.price);
      default:
        return products.sort((a, b) => a.price - b.price);
    }
  }, [sortBy]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="product-rating">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="star full">
            ★
          </span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="star empty">
            ☆
          </span>
        ))}
        <span className="rating-text">({rating})</span>
      </div>
    );
  };

  return (
    <section className="product-grid-section">
      <div className="section-header">
        <h2 className="section-title">All Products</h2>
        <div className="sort-controls">
          <label htmlFor="sort-select" className="sort-label">
            Sort by:
          </label>
          <select
            id="sort-select"
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${encodeURIComponent(product.id)}`}>
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
            </Link>

            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-category">{product.category}</p>

              {renderStars(product.rating)}
              <span className="review-count">
                ({product.reviews.toLocaleString()})
              </span>

              <div className="product-price-section">
                <span className="product-price">${product.price}</span>
              </div>

              <div className="product-buttons">
                <button
                  className="add-to-cart-btn"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      category: product.category,
                    })
                  }
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${encodeURIComponent(product.id)}`}
                  className="view-details-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
