import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
     {'' /* margin-left: 20px; */}
    font-size: x-small;
     width:70%;
     margin-top:auto;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  ${
    "" /* display: flex;
  flex-direction: column; */
  }
  overflow-y: scroll;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

// .cart-dropdown-container {

// .empty-message {
//   font-size: 18px;
//   margin: 50px auto;
// }

//   .cart-items {

//   }

// button {
//   // margin-left: 20px;
//   font-size: x-small;
//   // width:70%
// }
// }
