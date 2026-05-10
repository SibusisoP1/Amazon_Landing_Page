import "../styles/itemGroup.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemGroup = ({ title, products }) => {
  const { addToCart } = useContext(CartContext);

  const productNames = ["Headsets", "Speaker", "Round Speaker", "Earphones"];
  const productPrices = [29.99, 49.99, 39.99, 19.99];

  return (
    <div>
      <div className="item-group">
        <h2>{title}</h2>
        {products.map((product, index) => (
          <div key={index} className={`img img${index + 1}`}>
            <Link to={`/product/${encodeURIComponent(`${title}-${index}`)}`}>
              <img src={product} alt={`${productNames[index]}`} />
            </Link>
            <p>{productNames[index]}</p>
            <div className="product-info">
              <span className="price">${productPrices[index]}</span>
              <div className="rating">
                <span className="stars">★★★★☆</span>
                <span className="review-count">(1,234)</span>
              </div>
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() =>
                addToCart({
                  id: `${title}-${index}`,
                  title: productNames[index],
                  price: productPrices[index],
                  image: product,
                  category: title,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemGroup;
