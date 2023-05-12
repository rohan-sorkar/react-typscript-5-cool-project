import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ShoppingCart from "./pages/shoppingCart";
import Navbar from "./components/navbar";
import ShoppingCartProvider from "./provider/shoppingCartProvider";

const App = () => {
  return (
    <Router>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </ShoppingCartProvider>
    </Router>
  );
};

export default App;
