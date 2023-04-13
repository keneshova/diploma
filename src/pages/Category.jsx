import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import ProductList from "../componets/ProductList/ProductList";

export default function Category() {
  //деструктизация
  const { params } = useMatch("/category/:path");
  //простой метод
  const { categories } = useContext(AppContext);

  const category = categories.find((category) => params.path === category.path);

  return (
    <div className="Category">
      <h1>{category ? category.name : "Loading..."}</h1>
      <ProductList />
    </div>
  );
}
