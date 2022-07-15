import React, { Component } from "react";
import Checkbox from "./Checkbox";
import ProductList from "./ProductsList";
import { productsList } from "./data.json";
// import "./styles.css";

export default class Filter extends Component {
  state = {
    products: productsList,
    categories: {
      slack: false,
      confluence: false,
      github: false,
      rightanswers: false,
      stackoverflow: false
    }
  };

  handleChange = e => {
    const { name } = e.target;

    this.setState(prevState => {
      return {
        categories: {
          ...prevState.categories,
          [name]: !prevState.categories[name]
        }
      };
    });
  };

  render() {
    const checkedProducts = Object.entries(this.state.categories)
      .filter(category => category[1])
      .map(category => category[0]);
    const filteredProducts = this.state.products.filter(({ category }) =>
      checkedProducts.includes(category)
    );

    return (
      <div className="Filter">
        <div className="filter-title">FILTERS</div>
        <Checkbox
          id="1"
          title="slack"
          name="slack"
          checked={this.state.categories.slack}
          handleChange={this.handleChange}
        />
        <Checkbox
          id="2"
          title="confluence"
          name="confluence"
          handleChange={this.handleChange}
          checked={this.state.categories.confluence}
        />
        <Checkbox
          id="3"
          title="github"
          name="github"
          handleChange={this.handleChange}
          checked={this.state.categories.github}
        />
        <Checkbox
          id="4"
          title="rightanswers"
          name="rightanswers"
          handleChange={this.handleChange}
          checked={this.state.categories.rightanswers}
        />
        <Checkbox
          id="5"
          title="stackoverflow"
          name="stackoverflow"
          handleChange={this.handleChange}
          checked={this.state.categories.stackoverflow}
        />
        <ProductList
          products={
            filteredProducts.length === 0
              ? this.state.products
              : filteredProducts
          }
        />
      </div>
    );
  }
}
