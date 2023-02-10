import { createContext, useState, useEffect } from "react";

export const CartDropdownContext = createContext({
  dropdownState: false,
  setDropdownState: () => {},
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
  setCartItemsCount: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

const incrementItemCount = (cartItems, productToIncrease) => {
  const selectedProduct = cartItems.find(
    (item) => item.id === productToIncrease.id
  );

  console.log(`${selectedProduct.name} ${selectedProduct.quantity}`);
  return cartItems.map((cartItem) =>
    cartItem.id === productToIncrease.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

const decrementItemCount = (cartItems, productToDecrease) => {
  const selectedProduct = cartItems.find(
    (item) => item.id === productToDecrease.id
  );

  console.log(`${selectedProduct.name} ${selectedProduct.quantity}`);
  if (selectedProduct.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToDecrease.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  // const newQuantity =
};

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

const addCartItem = (cartItems, productToAdd) => {
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
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartDropdownProvider = ({ children }) => {
  const [dropdownState, setDropdownState] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const increaseItemCount = (productToIncrease) => {
    setCartItems(incrementItemCount(cartItems, productToIncrease));
  };

  const decreaseItemCount = (productToDecrease) => {
    setCartItems(decrementItemCount(cartItems, productToDecrease));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  useEffect(() => {
    const cartTotal = cartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity * cartItem.price;
    }, 0);
    setCartTotal(cartTotal);
  }, [cartItems]);

  useEffect(() => {
    const reducedCount = cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    );
    setCartItemsCount(reducedCount);
  }, [cartItems]);

  const value = {
    dropdownState,
    setDropdownState,
    cartItems,
    addItemToCart,
    cartItemsCount,
    increaseItemCount,
    decreaseItemCount,
    removeItemFromCart,
    cartTotal,
  };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
