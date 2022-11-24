import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cart-drawer.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { dropdownState, setDropdownState } = useContext(CartDropdownContext);

  const toggleIsCartOpen = () => setDropdownState(!dropdownState)
  console.log(dropdownState)

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
