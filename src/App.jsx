import { Routes, Route } from "react-router-dom";
import Layout from "./componets/Layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection } from "./firebase";

export const AppContext = createContext({
  categories: [],
  products: []
});

export default function App() {
  const [categories, setCategories] = useState([]);
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
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
