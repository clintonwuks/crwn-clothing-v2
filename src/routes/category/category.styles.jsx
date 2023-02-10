import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 25px;
  row-gap: 50px;
`;

export const CategoryTitle = styled.div`
    font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
`;
// .category-container {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 25px;
//   row-gap: 50px;
// }
// .category-title {
//   font-size: 28px;
//   margin-bottom: 25px;
//   text-align: center;
// }
