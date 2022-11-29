import { createContext, useState, useEffect } from "react";

export const CartDropdownContext = createContext({
  dropdownState: false,
  setDropdownState: () => {},
  cartItems: [],
  cartItemsCount : 0,
  setCartItemsCount: () => {},
  addItemToCart: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
  // if (cartItems.length === 0) {
  //   productToAdd.quantity = 1;
  //   cartItems[cartItemsCount] = productToAdd;
  //   cartItemsCount++;
  //   return cartItems;
  // }

  const selectedProduct = cartItems.find(
    (item) => item["id"] === productToAdd.id
  );
  // console.log(selectedProduct);
  // for (let i = 0; i <= cartItemsCount - 1; i++) {
  //   if (cartItems[i].id === productToAdd.id) {
  //     console.log(cartItems[i].id);
  //     console.log(productToAdd.id);
  if (selectedProduct) {
    // selectedProduct.quantity++;
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity+ 1 }
        : cartItem
    );
  }

  // }
  // }

  // productToAdd.quantity = 1;
  // productToAdd.quantity = 1;
  // cartItems[cartItemsCount] = productToAdd;
  // cartItemsCount++;

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartDropdownProvider = ({ children }) => {
  const [dropdownState, setDropdownState] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    console.log(cartItems);
  };

  useEffect (() => {
    const reducedCount = cartItems.reduce((accumulator, cartItem) =>
  accumulator+cartItem.quantity
    ,0)
    setCartItemsCount(reducedCount)
  },[cartItems]);

  const value = { dropdownState, setDropdownState, cartItems, addItemToCart, cartItemsCount };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
