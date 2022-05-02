import React, { useContext, Fragment } from "react";

import { cartDropDownContext } from "../../contexts/cart-dropdown.context";
import CartItem from "..//cart-item/cart-item.component";
import "../checkout/checkout.styles.scss";
import { Button } from "..//button/button.component";

const CheckOut = () => {
  const { cartItems, delItem, addItemToCart, decreaceItemCount, cartTotal } =
    useContext(cartDropDownContext);

  const gst = +((cartTotal / 100) * 5).toFixed(2);
  const pst = +((cartTotal / 100) * 6).toFixed(2);
  const grandTotal = cartTotal + gst + pst;

  const proceedPayment = () => {
    console.log("Going to Payment Page");
  };
  const deleteItem = (event) => {
    const id = +event.target.value;
    const itemToDelete = cartItems.filter((item) => {
      return item.id == id;
    });

    delItem(...itemToDelete);
  };

  const increaseItem = (event) => {
    const id = +event.target.value;
    const product = cartItems.filter((item) => item.id === id);
    addItemToCart(...product);
  };

  const decreaseItem = (event) => {
    const id = +event.target.value;
    const [product] = cartItems.filter((item) => item.id === id);
    if (product.quantity === 1) return;
    decreaceItemCount(product);
  };

  return (
    <div className="checkout-main">
      <div className="line-descriptions">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Total</span>
        <span>Revmove</span>
      </div>
      <hr />
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <div className="check-out-item" key={item.id}>
              <img className="item-img" src={item.imageUrl} />
              <span className="item-name">{item.name}</span>
              <div className="quantity-increaser">
                <button onClick={decreaseItem} value={item.id}>
                  -
                </button>
                <span className="item-quantity">{item.quantity}</span>
                <button onClick={increaseItem} value={item.id}>
                  +
                </button>
              </div>

              <span className="item-price">{item.price}</span>
              <span className="item-total-price">{item.totalPrice}</span>
              <button
                value={item.id}
                onClick={deleteItem}
                className="button-delete-item"
              >
                X
              </button>
            </div>
            <hr />
          </div>
        );
      })}
      <h2 className="total">TOTAL: $ {cartTotal}</h2>
      <h2 className="gst">GST/HST: $ {gst}</h2>
      <h2 className="pst">PST: $ {pst}</h2>
      <h2 className="grand-total">GRAND TOTAL: $ {grandTotal}</h2>
      <Button
        className="proceed-to-payment"
        props={{
          buttonType: "proceed-to-payment",
          type: "submit",
          name: "PROCEED TO PAYMENT",
          onClickFunc: proceedPayment,
        }}
      />
    </div>
  );
};

export default CheckOut;
