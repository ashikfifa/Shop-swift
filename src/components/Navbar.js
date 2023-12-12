import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";
import { Button } from "@mui/material";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
      <header>
        <nav>Navbar
        <span>
          <Link to="/">All Product </Link>
        </span>
        <Button variant="contained">
          <Link to="/cart">Cart({totalQuantity})</Link>
        </Button>
        </nav>
      </header>
    </>
  );
}
