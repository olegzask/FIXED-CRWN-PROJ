import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/user.context.jsx";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartDropDownProvider } from "./contexts/cart-dropdown.context";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartDropDownProvider>
          <App />
        </CartDropDownProvider>
      </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>
);
