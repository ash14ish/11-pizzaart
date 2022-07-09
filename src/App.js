import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartButton from "./components/Layout/CartButton";
import { cartActions } from "./redux/cartSlice";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.loadCart());
  }, []);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Router>
      <Header />
      <Navbar />
      <main>
        <Meals />
      </main>
      <CartButton onClick={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <footer>
        &copy; Images via
        <a href="https://pizzaonline.dominos.co.in/menu" target="_blank">
          Domino's
        </a>
      </footer>
    </Router>
  );
}

export default App;
