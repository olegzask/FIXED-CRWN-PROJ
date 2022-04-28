import React, { createContext, useState } from "react";

export const cartDropDownContext = createContext({
  dropDown: false,
  setDropDown: () => null,
});

export const CartDropDownProvider = ({ children }) => {
  const [dropDown, setDropDown] = useState(false);
  const value = { dropDown, setDropDown };
  return (
    <cartDropDownContext.Provider value={value}>
      {children}
    </cartDropDownContext.Provider>
  );
};
