import { useContext } from "react/cjs/react.development";

import { useNavigate } from "react-router-dom"
import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContext } from "../../context/cart-drawer.context";

import Button from "../button/button.component";



const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  }
  // console.log(cartItems)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
       <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT </Button>
    </div>
  );
};

export default CartDropdown;
