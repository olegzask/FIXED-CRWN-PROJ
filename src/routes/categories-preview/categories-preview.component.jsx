import React, { useContext, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { ProductCard } from "..//../components/product-card/product-card.component";
import "../categories-preview/categories-preview.styles.scss";

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const navigate = useNavigate();
  const navigateToCategory = (event) => {
    const category = event.target.className;
    navigate(`/shop/${category}`);
  };
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        let counter = 0;
        return (
          <Fragment key={title}>
            <Link className="product-link-name" to={`/shop/${title}`}>
              {title.toUpperCase()}
            </Link>
            <div className="products-container">
              {categoriesMap[title].map((product) => {
                if (counter < 4) {
                  counter = counter + 1;
                  return <ProductCard key={product.id} product={product} />;
                }
              })}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};
