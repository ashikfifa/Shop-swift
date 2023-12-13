import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fontsource/poppins";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "./features/cartSlice";
import Services from "./pages/services/Services";

function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <div style={{marginTop:"3%"}}>
        {/* <Navbar /> */}
        </div>
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route exact path="/services" element={<Services />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
