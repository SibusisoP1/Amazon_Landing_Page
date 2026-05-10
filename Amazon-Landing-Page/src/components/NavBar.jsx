import "../styles/NavBar.css";
import amazonLogo from "../assets/amazon.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const { cartCount } = useContext(CartContext);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  };
  return (
    <nav>
      <div className="top-Nav">
        <Link to="/">
          <img src={amazonLogo} alt="Logo" className="logo" />
        </Link>

        <section className="nav_group">
          <span className="location-group">
            <i className="bi bi-geo-alt"></i>
            <div className="location">
              <p>Delivery to Johannesburg 2188</p>
              <h6>Update Location</h6>
            </div>
          </span>
        </section>

        <section className="nav_Search nav_group">
          <select className="search-category">
            <option value="en">All</option>
            <option value="es">Beauty</option>
            <option value="fr">Books</option>
          </select>
          <input
            type="search"
            placeholder="Search Amazon"
            className="search-input"
          />
          <button className="search-button rounded-end">
            <i className="bi fs-1 bi-search"></i>
          </button>
        </section>

        <section className="nav_group">
          <p>Hello, Sign in</p>
          <h6>Account & Lists</h6>
        </section>

        <section className="nav_group">
          <p>Returns</p>
          <h6>& Orders</h6>
        </section>

        <Link to="/cart">
          <section className="nav_group nav_cart">
            <span className="cart-count">{cartCount}</span>
            <i className="bi bi-cart"></i>
            <h6>Basket</h6>
          </section>
        </Link>
      </div>
      <div className="bottom-Nav">
        <ul>
          <li>
            <span>
              <i className="bi bi-list"></i>
            </span>
            All
          </li>
          <li>Customer Service</li>
          <li>Today's Deals</li>
          <li>Keep Shopping for</li>
          <li>Everyday Essentials</li>
          <li>Best Sellers</li>
          <li>Shop Mzansi</li>
          <li>Gift Cards</li>
          <li>Sell</li>
          <li>Welcome to Amazon.co.za</li>
          <li>
            <button 
              className="dark-mode-toggle-bottom" 
              onClick={toggleDarkMode}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
              {darkMode ? ' Light' : ' Dark'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
