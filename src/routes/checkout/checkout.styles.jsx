import styled from "styled-components";

export const CheckoutContaainer = styled.table`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 50px auto 0;

  @media (min-width: 768px) {
    width: 55%;
  }
`;

export const CheckoutHeader = styled.thead`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.th`
  text-transform: capitalize;
  ${"" /* width: 23%; */}

  &:last-child {
    width: 8%;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    width: auto;

    &:last-child {
      width: auto;
    }
  }
`;

export const TotalSpan = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
// .checkout-container {
//   width: 55%;
//   min-height: 90vh;
//   display: flex;
//   flex-direction: column;
//     align-content: center;
//   margin: 50px auto 0;

//   .checkout-header {

//     .header-block {
//       text-transform: capitalize;
//       //   width: 23%;

//       &:last-child {
//         width: 8%;
//       }
//     }
//   }
// }

// .total {
// margin-top: 30px;
// margin-left: auto;
// font-size: 36px;
// }
