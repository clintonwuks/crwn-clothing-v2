import { useNavigate } from "react-router-dom";
import {
  CatContainer,
  BackgroundImage,
  CategoryBodyContainer,
} from "./category-dir-item.styles";

const CategoryDirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigationHandler = () =>  navigate(route);
  return (
    <CatContainer onClick={onNavigationHandler}>
      {/* <img /> */}
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CatContainer>
  );
};

export default CategoryDirectoryItem;
