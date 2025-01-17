import { useContext } from "react";

import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../component/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="Category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </div>
  );
};

export default CategoriesPreview;
