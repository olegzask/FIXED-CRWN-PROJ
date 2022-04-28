import React from "react";
import { Button } from "..//button/button.component";
import "../cart-dropdown/cart-dropdown.styles.scss";

const CartDropDown = () => {
  const goCheckOut = () => {
    console.log("GOING CHECKOUT");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button
        props={{
          buttonType: "standard",
          type: "submit",
          name: "GO TO CHECKOUT",
          onClickFunc: goCheckOut,
        }}
      />
    </div>
  );
};

export default CartDropDown;
