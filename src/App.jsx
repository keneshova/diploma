import { Routes, Route} from "react-router-dom"
import Layout from "./componets/Layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Layout>
       <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/delivery" element={<Delivery />} exact/>
          <Route path="/category/:path" element={<></>} />
          
        </Routes>
      </Layout>
    </div>
  );
}
