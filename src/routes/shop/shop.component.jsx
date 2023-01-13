// import SHOP_DATA from "../../shop-data.json";
import {Routes, Route} from "react-router-dom"

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  // return (
  //   <div className="shop-container">
  //     {Object.keys(categoriesMap).map((title) => {
  //       const products = categoriesMap[title];
  //       return <CategoryPreview key={title} title={title} products={products} />
  //     })}
  //   </div>
  // );
  return(
    <Routes>
      <Route index element={<CategoriesPreview/>} />
      <Route path=":category" element={<Category/>}/>
    </Routes>
  )
};

export default Shop;
