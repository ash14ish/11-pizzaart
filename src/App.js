import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartButton from "./components/Layout/CartButton";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Router>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header />
      <Navbar />
      <main>
        <Meals />
      </main>
      <CartButton onClick={showCartHandler} />
    </Router>
  );
}

export default App;
