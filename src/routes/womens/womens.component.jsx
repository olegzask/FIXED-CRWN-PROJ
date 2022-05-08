import React, { useContext, Fragment } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "..//womens/womens.styles.scss";

const Womens = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        if (title === "womens") {
          return (
            <Fragment key={title}>
              <h2 className={title}> {title}</h2>
              <div className="products-container">
                {categoriesMap[title].map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </Fragment>
          );
        }
      })}
    </Fragment>
  );
};

export default Womens;
