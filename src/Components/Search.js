import React, { Component } from "react";
import "./Search.css";

const searchTitle = search => {
  return search ? search : "Trending";
};

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateSearch(this.state.input);
  }

  render() {
    return (
      <div className="search">
        <h1>Search for: {searchTitle(this.props.search)}</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="inputSearch"
            aria-label="search-input"
          />
          <input type="submit" value="Search" className="searchButton" />
        </form>
      </div>
    );
  }
}
