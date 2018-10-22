import React, { Component } from "react";

import GifsList from "./GifsList";
import Search from "./Search";

import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = { search: "", slackList: [] };
    this.updateSearchState = this.updateSearchState.bind(this);
  }

  updateSearchState(search) {
    this.setState({ search: search });
  }

  render() {
    return (
      <div className="Home">
        <header>
          <Search
            updateSearch={this.updateSearchState}
            search={this.state.search}
          />
        </header>
        <GifsList search={this.state.search} />
      </div>
    );
  }
}

export default Home;
