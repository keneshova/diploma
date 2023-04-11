import { Routes, Route} from "react-router-dom"
import Layout from "./componets/Layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";
import Category from "./pages/Category";

export default function App() {
  return (
    <div className="App">
      <Layout>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/category/:path" element={<Category/>} />
          
        </Routes>
      </Layout>
    </div>
  );
}
