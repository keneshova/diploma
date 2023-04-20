import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import AddToCart from "../componets/AddToCart/AddToCart";
import NotFound from "./NotFound";

export default function Product() {
  const { params } = useMatch("/product/:path");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.path === params.path);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <h1>{product.name}</h1>
      <img src={product.picture} alt={product.name} />
      <span>{product.price} som</span>
      <AddToCart product={product} />
    </div>
  );
}
