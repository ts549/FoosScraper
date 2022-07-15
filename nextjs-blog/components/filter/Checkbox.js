import React, { Component } from "react";

export default class checkbox extends Component {
  render() {
    const { id, title, name, handleChange, checked } = this.props;

    return (
      <div className="container">
        <input
          className="rounded-checkbox"
          id={id}
          type="checkbox"
          name={name}
          onChange={handleChange}
          checked={checked}
        />
        <label className="filter-option" htmlFor={id}>{title}</label>
      </div>
    );
  }
}
