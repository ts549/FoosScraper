import React from "react";

const Product = ({ link, category, title, time, blurb }) => {
  return (

    <article>
      <h1>{title}</h1>
      <h3>{time}</h3>
      <p>{blurb}</p>
      <p>{link}</p>
    </article>
  );
};

export default Product;
