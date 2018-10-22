import React, { Component } from "react";

import GifsList from "./GifsList";
import Search from "./Search";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { search: "" };
  }

  updateSearchState(search) {
    this.setState({ search: search });
  }

  render() {
    return (
      <div className="App">
        <header>
          <Search
            updateSearch={this.updateSearchState.bind(this)}
            search={this.state.search}
          />
        </header>
        <GifsList search={this.state.search} />
      </div>
    );
  }
}

export default App;
