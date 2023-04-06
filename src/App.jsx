import { Routes, Route} from "react-router-dom"
import Layout from "./componets/Layout/Layout";

export default function App() {
  return (
    <div className="App">
      <Layout>
       <Routes>
          <Route path="/" element={<h2>Home</h2>} exact></Route>
          <Route path="/about" element={<h2>About</h2>} exact></Route>
        </Routes>
      </Layout>

      <main>
      </main>
     
    </div>
  );
}
