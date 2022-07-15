import React from "react";
import Product from "./Product";

const ProductList = props => {
  const { products } = props;

  const renderProducts = products.map(({ id, title, category, link, time, blurb }) => {
    return (
      <li key={id}>
      <Product link={link} category={category} title={title} time={time} blurb={blurb}/>
      </li>
    );
  });

  return <ul className="search-entries">{renderProducts}</ul>;
};

export default ProductList;


