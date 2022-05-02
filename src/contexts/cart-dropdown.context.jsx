import React, { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartitems contains product it wants ot add

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if found increment quantity by 1
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === productToAdd.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
          totalPrice: cartItem.totalPrice + productToAdd.price,
        };
      } else return cartItem;
    });
  }
  return [
    ...cartItems,
    { ...productToAdd, quantity: 1, totalPrice: productToAdd.price },
  ];
};

const minusItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found increment quantity by 1
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === productToAdd.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
          totalPrice: productToAdd.totalPrice - productToAdd.price,
        };
      } else return cartItem;
    });
  }
  return [
    ...cartItems,
    { ...productToAdd, quantity: 1, totalPrice: productToAdd.price },
  ];
};

export const cartDropDownContext = createContext({
  dropDown: false,
  setDropDown: () => {},
  cartItems: [],
  itemCount: 0,
  totalPrice: 0,
  cartTotal: 0,
  increaseTotal: () => {},
  decreaceItemCount: () => {},
  addItemToCart: () => {},
  delItem: () => {},
});

export const CartDropDownProvider = ({ children }) => {
  const [dropDown, setDropDown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    let num = 0;
    cartItems.map((item) => {
      num = num + item.quantity;
      total = total + item.totalPrice;
    });
    setItemCount(num);
    setCartTotal(total);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaceItemCount = (productToAdd) => {
    setCartItems(minusItem(cartItems, productToAdd));
  };

  const delItem = (product) => {
    setCartItems(cartItems.filter((item) => item.id != product.id));
  };

  const value = {
    dropDown,
    setDropDown,
    addItemToCart,
    cartItems,
    setCartItems,
    itemCount,
    setItemCount,
    delItem,
    decreaceItemCount,
    cartTotal,
  };
  return (
    <cartDropDownContext.Provider value={value}>
      {children}
    </cartDropDownContext.Provider>
  );
};
