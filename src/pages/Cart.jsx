import CartList from "../componets/CartList/CartList";
import OrderForm from "../componets/OrderForm/OrderForm";

export default function Cart() {
  return (
    <div className="Cart">
      <h1>Cart</h1>
      <CartList />
      <OrderForm />
    </div>
  );
}