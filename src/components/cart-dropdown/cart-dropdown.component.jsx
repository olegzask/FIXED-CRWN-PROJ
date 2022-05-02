import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartDropDownContext } from "../../contexts/cart-dropdown.context";
import { Button } from "..//button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "../cart-dropdown/cart-dropdown.styles.scss";

const CartDropDown = () => {
  const { cartItems, setDropDown, cartTotal } = useContext(cartDropDownContext);
  const goCheckOut = () => {
    setDropDown(false);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="checkout">
        {
          <Button
            className="button-dropdown-checkout"
            props={{
              buttonType: "standard",
              type: "submit",
              name: "GO TO CHECKOUT",
              onClickFunc: goCheckOut,
            }}
          />
        }
      </Link>
      <span className="cart-total-drop">Cart Total: $ {cartTotal}</span>
    </div>
  );
};

export default CartDropDown;
