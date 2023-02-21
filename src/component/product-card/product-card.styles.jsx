import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    opacity: 0.7;
    position: absolute;
    top: 255px;
    width: 80%;
    display: none;
  }

  &:hover {
    button {
      opacity: 0.85;
      display: flex;
    }
    img {
      opacity: 0.8;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 70%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`;

