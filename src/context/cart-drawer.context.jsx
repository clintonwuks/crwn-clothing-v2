import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  dropdownState: false,
  setDropdownState: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [dropdownState, setDropdownState] = useState(false);
  const value = { dropdownState, setDropdownState };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
