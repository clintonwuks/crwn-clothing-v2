import {
  CartItemContainer,
  Img,
  ItemDetails,
  NameStyle,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <NameStyle className="name">{name}</NameStyle>
        <span className="price">
          {quantity} x £{price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
