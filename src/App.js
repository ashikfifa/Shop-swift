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
import TriCycle from "./pages/TriCycle/TriCycle";

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
        <div className="navBarTop">
        {/* <Navbar /> */}
        
        <Routes>
          <Route exact path="/" element={<Services />} />
          <Route exact path="/services" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/tri-cycle" element={<TriCycle/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
