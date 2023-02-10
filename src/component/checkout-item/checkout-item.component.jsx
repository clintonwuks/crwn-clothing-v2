import { useContext } from "react";

import { CartDropdownContext } from "../../context/cart-drawer.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  TdAsNameOrPrice,
  Img,
  Arrow,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";
const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { decreaseItemCount, removeItemFromCart, addItemToCart } =
    useContext(CartDropdownContext);

  const incrementHandler = () => {
    addItemToCart(cartItem);
  };
  const decrementHandler = () => {
    decreaseItemCount(cartItem);
  };
  const removeHandler = () => {
    removeItemFromCart(cartItem);
  };
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <TdAsNameOrPrice>
        <h3>{name}</h3>
      </TdAsNameOrPrice>
      <Quantity>
        <p>
          <Arrow onClick={decrementHandler}>
            {" "}
            &#10094;{" "}
          </Arrow>
          <Value> {quantity} </Value>

          <Arrow  onClick={incrementHandler}>
            {" "}
            &#10095;{" "}
          </Arrow>
        </p>
      </Quantity>
      <TdAsNameOrPrice >
        <p>{quantity * price}</p>
      </TdAsNameOrPrice>
      <RemoveButton>
        <p onClick={removeHandler}>&#10005;</p>
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
