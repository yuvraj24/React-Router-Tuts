import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/pages/home/Home';
import AboutUs from "./pages/aboutus/AboutUs";
import NavigationHeader from "./pages/home/NavigationHeader";

function App() {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
