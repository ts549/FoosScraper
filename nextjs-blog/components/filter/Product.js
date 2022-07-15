import React from "react";

const Product = ({ title, category, link, time, blurb }) => {
  return (
    <div className="article">
      <div className="article-link">{link}</div>
      <p>{time}, <div className="article-title"><b>{title}</b></div></p>
      {/* <div className="article-link">{link}</div> */}
      <div className="article-link">{blurb}</div>
    </div>
    // <article></article> instead of dev
  );
};

export default Product;


