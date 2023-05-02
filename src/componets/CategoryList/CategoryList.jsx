import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/category/" + category.path}>
        {category.name}
      </NavLink>
    </li>
  ))

  return (
    <div className="CategoryList">
      <button className="dropBtn"> Categories ˅</button>
      <ul id="dropdown" className="dropdownContent">{output}</ul>
      <AddCategory />
    </div>
  )
}
