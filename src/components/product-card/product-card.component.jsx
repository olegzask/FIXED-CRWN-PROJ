import React, { useContext } from "react";
import { cartDropDownContext } from "../../contexts/cart-dropdown.context";
import { Button } from "../button/button.component";
import ".//product-card.styles.scss";

export const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { cartItems, addItemToCart } = useContext(cartDropDownContext);
  const addProductToCart = () => addItemToCart(product);
  const addToCart = (event) => {
    console.log("Product Added to Cart");
  };
  return (
    <div className="product-card-container">
      <div>
        <img className="" src={imageUrl} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
      </div>
      <Button
        className="button-card"
        props={{
          buttonType: "inverted",
          type: "submit",
          name: "ADD TO CART",
          onClickFunc: addProductToCart,
        }}
      />
    </div>
  );
};
