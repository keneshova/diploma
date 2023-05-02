import { Routes, Route } from "react-router-dom";
import Layout from "./componets/Layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import ThankYou from "./pages/ThankYou";
import Home from "./pages/Home";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import {onAuthChange, onCategoriesLoad, onOrdersLoad, onProductsLoad } from "./firebase";
import Order from "./pages/Order";


export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],

  // корзина
  cart: {},
  setCart: () => {},

  user: null, // здесь будет храниться информация про пользователя
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    onCategoriesLoad(setCategories);
    onProductsLoad(setProducts);
    onOrdersLoad(setOrders);

    onAuthChange((user) => {
      if (user) {
        user.isAdmin = user.email === "nestana1606@gmail.com";
      }
      setUser(user);
    });
  }, []);


  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart, user, orders }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
            <Route path="/product/:path" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thank-you" element={<ThankYou/>}/>
            <Route path="/orders" element={<Order/>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );

}