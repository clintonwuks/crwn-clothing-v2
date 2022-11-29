import { useContext } from "react";
import Button from "../button/button.component";

import { CartDropdownContext } from "../../context/cart-drawer.context";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {addItemToCart} = useContext(CartDropdownContext);

  const addItemToCart2 = () => {
    addItemToCart(product);
  }
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addItemToCart2} buttonType="inverted"> Add to cart</Button>
    </div>
  );
};



export default ProductCard;
