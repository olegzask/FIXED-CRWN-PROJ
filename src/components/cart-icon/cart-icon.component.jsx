import React, { useContext, useState, useEffect } from "react";
import { cartDropDownContext } from "../../contexts/cart-dropdown.context";
import { ReactComponent as ShoppingIcon } from "..//../assets/shopping-bag.svg";
import ".//cart-icon.styles.scss";

const CartIcon = () => {
  const { dropDown, setDropDown, cartItems, itemCount } =
    useContext(cartDropDownContext);

  const toggleDropDown = () => {
    !dropDown ? setDropDown(true) : setDropDown(false);
  };

  return (
    <div className="cart-icon-container">
      <ShoppingIcon onClick={toggleDropDown} className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
