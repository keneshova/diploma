import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeletedCategory/DeletedCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/category/" + category.path}>
        {category.name}
      </NavLink>
      <DeleteCategory category={category} />
    </li>
  ))

  return (
    <div className="CategoryList">
      <button className="Category-button"> Categories</button>
      <ul id="Category-button" className="button-category">{output}</ul>
      <AddCategory />
    </div>
  )
}
