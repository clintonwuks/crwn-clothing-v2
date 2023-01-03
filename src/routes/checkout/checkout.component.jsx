import { useContext, useEffect } from "react";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";

import { CartDropdownContext } from "../../context/cart-drawer.context";
import "./checkout.styles.scss";

const CheckoutPage = () => {
  const { cartItems, setDropdownState, cartTotal } =
    useContext(CartDropdownContext);

  useEffect(() => {
    setDropdownState(false);
  }, []);
  console.log(cartItems);
  return (
    <>
      <table className="checkout-container">
        <thead className="checkout-header">

            <th className="header-block">Product</th>
            <th className="header-block">Description</th>
            <th className="header-block">Quantity</th>
            <th className="header-block">Price</th>
            <th className="header-block">Remove</th>

        </thead>
        <tbody>
          {cartItems.map(Item => (
            <CheckoutItem key={Item.id} cartItem={Item} />
          ))}
        </tbody>
        <span className="total">{`Total:£${cartTotal}`}</span>

      </table>

    </>
  );
};

export default CheckoutPage;
