import { useContext } from "react";
import "../styles/Cart.css";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <span className="cart-item-count">{getTotalItems()} items</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Amazon Cart is empty</h2>
          <p>Continue shopping to add items to your cart</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cart-item-price">
                  <span className="price">${item.price}</span>
                  <span className="subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="subtotal-section">
              <span>Subtotal ({getTotalItems()} items):</span>
              <span className="subtotal-amount">${calculateSubtotal()}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
            <p className="security-note">
              <i className="bi bi-shield-check"></i>
              Secure transaction
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
