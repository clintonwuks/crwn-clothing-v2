import styled from "styled-components";

export const CheckoutItemContainer = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.td`
  width: 20%;
  padding-right: 35px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const TdAsNameOrPrice = styled.td`
  width: 20%;
`;

export const Quantity = styled.td`
  display: flex;
  width: 20%;
`;

export const Arrow = styled.span`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 5px;
`;

export const RemoveButton = styled.td`
  padding-left: 12px;
  cursor: pointer;
`;
// .checkout-item-container {
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   min-height: 100px;
//   border-bottom: 1px solid darkgrey;
//   padding: 15px 0;
//   font-size: 20px;
//   align-items: center;

//   .image-container {
//     width: 20%;
//     padding-right: 35px;

//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }
//   .name,
//   .quantity,
//   .price {
//     width: 20%;
//   }

//   .quantity {
//     display: flex;
//     // padding-left: 3%;

//     .arrow {
//     }

//     .value {
//       margin: 0 5px;
//     }
//   }

//   .remove-button {
//     padding-left: 12px;
//     cursor: pointer;
//   }
// }
