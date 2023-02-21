import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { CartDropdownContainer, CartItems,EmptyMessage } from "./cart-dropdown.styles";

import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContext } from "../../context/cart-drawer.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  // console.log(cartItems)
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={goToCheckoutHandler}
      >
        {" "}
        GO TO CHECKOUT{" "}
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
