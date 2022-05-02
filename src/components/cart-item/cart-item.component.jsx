import React, { useContext } from "react";
import { cartDropDownContext } from "..//../contexts/cart-dropdown.context";
import "..//cart-item/cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { cartItems, setCartItems, delItem } = useContext(cartDropDownContext);

  const deleteItem = () => {
    delItem(cartItem);
  };

  return (
    <div className="cart-item-container">
      <img src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
      <button onClick={deleteItem} className="button-delete-item">
        X
      </button>
    </div>
  );
};

export default CartItem;
