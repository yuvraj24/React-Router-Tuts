import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/pages/home/Home';
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import ProductItem from "./pages/products/ProductItem";
import Products from "./pages/products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="products" element={<Products />} >
            <Route path=":productItemId" element={<ProductItem />} />
          </Route>
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here (404)!</p>
            </main>
          }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
