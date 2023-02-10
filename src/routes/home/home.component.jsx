// import CategoryItem from "./component/category-item/category-item.componenet";
import { Outlet } from "react-router-dom";
import Directory from "../../component/categories-dir/categories-dir.component";
// import "../../categories.styles.scss";
const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
