import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/ProductDetail.css';
import headphone from '../assets/headphone.png';
import speaker from '../assets/speaker.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import hero from '../assets/hero.png';
import ereader from '../assets/ereader.png';
import light from '../assets/readilight.png';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  // Sample product data - in a real app this would come from an API
  const products = {
    'Shop Headphones & Speakers-0': {
      id: 'Shop Headphones & Speakers-0',
      title: 'Premium Wireless Headphones',
      price: 29.99,
      image: headphone,
      category: 'Shop Headphones & Speakers',
      rating: 4.5,
      reviews: 1234,
      description: 'Experience premium sound quality with these wireless headphones. Features include noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for long listening sessions.',
      features: ['Wireless Bluetooth 5.0', '30-hour battery life', 'Active noise cancellation', 'Comfortable over-ear design', 'Built-in microphone']
    },
    'Shop Headphones & Speakers-1': {
      id: 'Shop Headphones & Speakers-1',
      title: 'Portable Bluetooth Speaker',
      price: 49.99,
      image: speaker,
      category: 'Shop Headphones & Speakers',
      rating: 4.3,
      reviews: 892,
      description: 'Powerful portable speaker with deep bass and crystal clear highs. Waterproof design makes it perfect for outdoor adventures and pool parties.',
      features: ['360° sound', 'Waterproof IPX7', '12-hour battery', 'Built-in LED lights', 'Party sync mode']
    },
    'Shop Headphones & Speakers-2': {
      id: 'Shop Headphones & Speakers-2',
      title: 'Round Smart Speaker',
      price: 39.99,
      image: img3,
      category: 'Shop Headphones & Speakers',
      rating: 4.4,
      reviews: 567,
      description: 'Voice-controlled smart speaker with premium sound quality. Compatible with all major voice assistants and smart home systems.',
      features: ['Voice control', 'Smart home integration', 'Premium audio', 'Multi-room audio', 'Touch controls']
    },
    'Shop Headphones & Speakers-3': {
      id: 'Shop Headphones & Speakers-3',
      title: 'Wireless Earbuds',
      price: 19.99,
      image: img4,
      category: 'Shop Headphones & Speakers',
      rating: 4.2,
      reviews: 2103,
      description: 'Compact wireless earbuds with superior sound quality and comfort. Perfect for workouts, commuting, and everyday use.',
      features: ['True wireless', '6-hour battery', 'IPX5 water resistant', 'Touch controls', 'Charging case included']
    },
    'Shop Home & Kitchen-0': {
      id: 'Shop Home & Kitchen-0',
      title: 'Premium Coffee Maker',
      price: 89.99,
      image: img5,
      category: 'Shop Home & Kitchen',
      rating: 4.6,
      reviews: 432,
      description: 'Programmable coffee maker with thermal carafe. Wake up to fresh coffee every morning with customizable brewing options.',
      features: ['12-cup capacity', 'Programmable timer', 'Thermal carafe', 'Auto shut-off', 'Brew strength control']
    },
    'Shop Home & Kitchen-1': {
      id: 'Shop Home & Kitchen-1',
      title: 'Air Fryer Deluxe',
      price: 79.99,
      image: img6,
      category: 'Shop Home & Kitchen',
      rating: 4.7,
      reviews: 1567,
      description: 'Healthy cooking made easy with this large-capacity air fryer. Cook crispy food with little to no oil.',
      features: ['5.8QT capacity', '1500W power', '8 preset programs', 'Digital display', 'Dishwasher safe']
    },
    'Shop Home & Kitchen-2': {
      id: 'Shop Home & Kitchen-2',
      title: 'Eletric Kettle',
      price: 129.99,
      image: img7,
      category: 'Shop Home & Kitchen',
      rating: 4.5,
      reviews: 234,
      description: 'Fast-boiling electric kettle with temperature control. Perfect for tea, coffee, and instant meals.',
      features: ['1.7L capacity', 'Variable temperature', 'Auto shut-off', 'Cordless design', 'Water window']
    },
    'Shop Home & Kitchen-3': {
      id: 'Shop Home & Kitchen-3',
      title: 'Pillow',
      price: 34.99,
      image: img8,
      category: 'Shop Home & Kitchen',
      rating: 4.3,
      reviews: 890,
      description: 'Premium pillow for ultimate comfort and support. Perfect for a good night sleep with memory foam technology.',
      features: ['Memory foam', 'Hypoallergenic', 'Breathable cover', 'Neck support', 'Machine washable']
    },
    'Shop Books & Media-0': {
      id: 'Shop Books & Media-0',
      title: 'E-Reader Premium',
      price: 149.99,
      image: ereader,
      category: 'Shop Books & Media',
      rating: 4.8,
      reviews: 3421,
      description: 'Premium e-reader with glare-free display and adjustable warm light. Read comfortably in any lighting condition.',
      features: ['7" display', 'Waterproof design', '8-week battery', 'Adjustable warm light', '32GB storage']
    },
    'Shop Books & Media-1': {
      id: 'Shop Books & Media-1',
      title: 'Home Decor',
      price: 59.99,
      image: img5,
      category: 'Shop Books & Media',
      rating: 4.4,
      reviews: 567,
      description: 'Stylish home decor items to transform your living space. Modern designs that complement any interior style.',
      features: ['Modern design', 'Premium materials', 'Easy to install', 'Versatile styling', 'Durable construction']
    },
    'Shop Books & Media-2': {
      id: 'Shop Books & Media-2',
      title: 'Kitchen Tools Set',
      price: 24.99,
      image: img6,
      category: 'Shop Books & Media',
      rating: 4.2,
      reviews: 123,
      description: 'Complete kitchen tools set with essential utensils. Professional quality for home cooking and food preparation.',
      features: ['15-piece set', 'Stainless steel', 'Dishwasher safe', 'Ergonomic handles', 'Storage holder included']
    },
    'Shop Books & Media-3': {
      id: 'Shop Books & Media-3',
      title: 'Reading Light',
      price: 19.99,
      image: light,
      category: 'Shop Books & Media',
      rating: 4.6,
      reviews: 789,
      description: 'LED reading light with adjustable brightness. Perfect for reading in bed without disturbing others.',
      features: ['3 brightness levels', 'Clip-on design', 'USB rechargeable', 'Flexible neck', 'Eye-care LED']
    }
  };

  const product = products[productId];

  if (!product) {
    return (
      <div className="product-detail-container">
        <div className="product-not-found">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/" className="back-to-home">Back to Home</Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="rating">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="star full">★</span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="star empty">☆</span>
        ))}
        <span className="rating-text">({rating})</span>
      </div>
    );
  };

  return (
    <div className="product-detail-container">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <Link to={`/${product.category.toLowerCase().replace(/\s+/g, '-')}`}>{product.category}</Link> / {product.title}
      </nav>

      <div className="product-detail">
        <div className="product-image-section">
          <img src={product.image} alt={product.title} className="product-main-image" />
        </div>

        <div className="product-info-section">
          <h1 className="product-title">{product.title}</h1>
          
          <div className="product-meta">
            {renderStars(product.rating)}
            <span className="review-count">{product.reviews.toLocaleString()} reviews</span>
          </div>

          <div className="price-section">
            <span className="current-price">${product.price}</span>
            <span className="savings">Save $10.00 at checkout</span>
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-features">
            <h3>Key Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="purchase-section">
            <button 
              className="add-to-cart-btn-large"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
