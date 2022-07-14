import React, { Component } from "react";
import Checkbox from "./Checkbox";
import ProductList from "./ProductList";
import { productsList } from "./data.json";
import "./styles.css";
// import Sidebar from './Sidebar';

export default class Sidebar extends Component {
  state = {
    products: productsList,
    categories: {
      first: false,
      second: false
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
      <div className="App">
        {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
        <h2>Filter For Websites</h2>
        <Checkbox
          id="slack-checkbox"
          link="Slack"
          name="slack"
          handleChange={this.handleChange}
          checked={this.state.categories.slack}
        />
        <Checkbox
          id="confluence-checkbox"
          link="Confluence (Wiki Pages)"
          name="confluence"
          handleChange={this.handleChange}
          checked={this.state.categories.confluence}
        />
        <Checkbox
          id="stack-overflow-checkbox"
          link="Stack Overflow"
          name="stack-overflow"
          handleChange={this.handleChange}
          checked={this.state.categories.stackoverflow}
        />
        <Checkbox
          id="github-checkbox"
          link="Github"
          name="github"
          handleChange={this.handleChange}
          checked={this.state.categories.github}
        />
        <Checkbox
          id="right-answers-checkbox"
          link="Right Answers"
          name="right-answers"
          handleChange={this.handleChange}
          checked={this.state.categories.rightanswers}
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
