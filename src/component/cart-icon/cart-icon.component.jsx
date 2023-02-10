// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cart-drawer.context";

import {CartIconContainer, ItemCount, ShoppingIconStyle} from "./cart-icon.styles";

const CartIcon = () => {
  const { dropdownState, setDropdownState, cartItemsCount } = useContext(CartDropdownContext);
  const toggleIsCartOpen = () => setDropdownState(!dropdownState);
  console.log(dropdownState);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconStyle  className="shopping-icon" />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
