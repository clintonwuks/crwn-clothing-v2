import { useContext, useEffect } from "react";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";

import { CartDropdownContext } from "../../context/cart-drawer.context";
import {CheckoutContaainer, CheckoutHeader, HeaderBlock, TotalSpan} from  "./checkout.styles";

const CheckoutPage = () => {
  const { cartItems, setDropdownState, cartTotal } =
    useContext(CartDropdownContext);

  useEffect(() => {
    setDropdownState(false);
  }, []);
  console.log(cartItems);
  return (
    <>
      <CheckoutContaainer>
        <CheckoutHeader>

            <HeaderBlock>Product</HeaderBlock>
            <HeaderBlock>Description</HeaderBlock>
            <HeaderBlock>Quantity</HeaderBlock>
            <HeaderBlock>Price</HeaderBlock>
            <HeaderBlock>Remove</HeaderBlock>

        </CheckoutHeader>
        <tbody>
          {cartItems.map(Item => (
            <CheckoutItem key={Item.id} cartItem={Item} />
          ))}
        </tbody>
        <TotalSpan>{`Total:£${cartTotal}`}</TotalSpan>

      </CheckoutContaainer>

    </>
  );
};

export default CheckoutPage;
