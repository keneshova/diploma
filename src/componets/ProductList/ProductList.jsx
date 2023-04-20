import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import AddToCart from "../AddToCart/AddToCart";
import "./ProductList.css";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div className="Product" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <Link className="AboutProduct" to={"/product/" + product.path}>{product.name} </Link>
        <span>{product.price} $</span>
        <AddToCart product={product} />
      </div>
    ));

  return <div className="ProductList">{output}</div>;
}
