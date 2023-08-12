import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Dashboard } from "./pages/Dashboard";
import { Departments } from "./pages/Departments";
import { NewProduct } from "./pages/NewProduct";
import { ProductDetail } from "./pages/ProductDetail";
import { Products } from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<Products />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/product/:product" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
