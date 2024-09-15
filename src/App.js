import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/products/Products";
import Cart from "./Pages/cart/Cart";
import SingleProduct from "./Pages/single-product/SingleProduct";
import SpecialOffersPage from "./Pages/special-offers-page/SpecialOffersPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/special-offers/:id" element={<SpecialOffersPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
