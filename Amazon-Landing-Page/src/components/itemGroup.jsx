import "../styles/itemGroup.css";
import { Link } from "react-router-dom";

const ItemGroup = ({ title, products }) => {
  // Different product names based on category
  const getProductNames = (categoryTitle) => {
    if (
      categoryTitle.includes("Headphones") ||
      categoryTitle.includes("Speakers")
    ) {
      return [
        "Wireless Headphones",
        "Bluetooth Speaker",
        "Smart Speaker",
        "Earbuds",
      ];
    } else if (
      categoryTitle.includes("Home") ||
      categoryTitle.includes("Kitchen")
    ) {
      return ["Home Decor", "Kitchen Set", "Kitchen Appliance", "Bedding"];
    } else if (
      categoryTitle.includes("Books") ||
      categoryTitle.includes("Media")
    ) {
      return ["E-Reader", "Book Shelf", "Reading Light", "Books"];
    } else {
      return ["Headsets", "Speaker", "Round Speaker", "Earphones"]; // fallback
    }
  };

  const productNames = getProductNames(title);

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemGroup;
