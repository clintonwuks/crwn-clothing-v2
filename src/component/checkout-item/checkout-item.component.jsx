import { useContext } from "react";

import { CartDropdownContext } from "../../context/cart-drawer.context";

import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price, id } = cartItem;
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
    <tr className="checkout-item-container">
      <td className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </td>
      <td className="name">
        <h3>{name}</h3>
      </td>
      <td className="quantity">
        <p>
          <span className="arrow" onClick={decrementHandler}>
            {" "}
            &#10094;{" "}
          </span>
          <span className="value" >
            {" "}
            {quantity}{" "}
          </span>

          <span className="arrow" onClick={incrementHandler}>
            {" "}
            &#10095;{" "}
          </span>
        </p>
      </td>
      <td className="price">
        <p>{quantity * price}</p>
      </td>
      <td className="remove-button">
        <p onClick={removeHandler}>&#10005;</p>
      </td>
    </tr>
  );
};
export default CheckoutItem;
