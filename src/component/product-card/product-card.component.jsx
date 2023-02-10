import { useContext } from "react";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import { CartDropdownContext } from "../../context/cart-drawer.context";
import {ProductCardContainer, Footer, Img} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {addItemToCart} = useContext(CartDropdownContext);

  const addItemToCart2 = () => {
    addItemToCart(product);
  }
  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button onClick={addItemToCart2} buttonType={BUTTON_TYPE_CLASSES.base}> Add to cart</Button>
    </ProductCardContainer>
  );
};



export default ProductCard;
