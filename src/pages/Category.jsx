import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";

export default function Category() {
  const { params } = useMatch("/category/:path");
  const { categories } = useContext (AppContext);

  
  return (
    <div className="Category">
      <h1>Category</h1>
    </div>
  );
}
