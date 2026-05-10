import React, { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        items: action.payload.items,
        count: action.payload.count,
      };
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      let updatedItems;
      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      return {
        items: updatedItems,
        count: updatedItems.reduce((total, item) => total + item.quantity, 0),
      };
    case "UPDATE_QUANTITY":
      if (action.payload.quantity === 0) {
        const filteredItems = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
        return {
          items: filteredItems,
          count: filteredItems.reduce(
            (total, item) => total + item.quantity,
            0,
          ),
        };
      }
      const quantityUpdatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
      return {
        items: quantityUpdatedItems,
        count: quantityUpdatedItems.reduce(
          (total, item) => total + item.quantity,
          0,
        ),
      };
    case "REMOVE_FROM_CART":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload,
      );
      return {
        items: filteredItems,
        count: filteredItems.reduce((total, item) => total + item.quantity, 0),
      };
    case "CLEAR_CART":
      return {
        items: [],
        count: 0,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], count: 0 });

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("amazonCart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          const itemCount = parsedCart.reduce(
            (total, item) => total + (item.quantity || 0),
            0,
          );
          dispatch({
            type: "SET_CART",
            payload: { items: parsedCart, count: itemCount },
          });
        }
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      // Clear corrupted data
      localStorage.removeItem("amazonCart");
    }
  }, []);

  // Sync cart state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("amazonCart", JSON.stringify(state.items));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [state.items]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const updateQuantity = (id, newQuantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: newQuantity },
    });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        cartCount: state.count,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
