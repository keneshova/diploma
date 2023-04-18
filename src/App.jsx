import { Routes, Route } from "react-router-dom";
import Layout from "./componets/Layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection, productCollection } from "./firebase";
import Cart from "./pages/Cart";

export const AppContext = createContext({
  categories: [],
  products: [],

  //корзина

  cart: {},
  setCart: () => {}
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState ([]);

  //корзина

  const [cart, setCart] = useState({});
  useEffect(() => {
    getDocs(categoryCollection).then((snapshot) => {
      //категории будут хпанить в snapshot.docs

      //создать массив для категорий
      const newCategories = [];
      //

      snapshot.docs.forEach((doc) => {
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });

      setCategories(newCategories);
    });

    getDocs(productCollection).then((snapshot) => {
      
      const newProducts = [];

      snapshot.docs.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;

        newProducts.push(product);
      });

      setProducts(newProducts);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
