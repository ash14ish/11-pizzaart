"use strict";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/cartSlice";
import mealsSlice from "./redux/mealsSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: { meals: mealsSlice.reducer, cart: cartSlice.reducer },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
