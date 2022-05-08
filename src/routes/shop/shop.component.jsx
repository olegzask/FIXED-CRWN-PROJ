import React, { useContext, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "../categories-preview/categories-preview.component";

export const Shop = () => {
  return (
    <Routes>
      <Route path="/*" element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
