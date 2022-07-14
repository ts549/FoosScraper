import React from "react";
import Product from "./Product";

const ProductList = props => {
  const { products } = props;

  const renderProducts = products.map(({ id, link, category, title, time, blurb }) => {
    return (
      <li key={id}>
        <Product link={link} category={category} title={title} time={time} blurb={blurb}/>
      </li>
    );
  });

  return <ul>{renderProducts}</ul>;
};

export default ProductList;
