import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import UploadGifs from "./UploadGifs";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { search: "" };
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <nav className="nav">
            <div className="title">Giphy</div>
            <Link to="/">Home</Link>
            <Link to="/upload">Upload Gif</Link>
          </nav>

          <Route exact path="/" component={Home} />
          <Route exact path="/upload" component={UploadGifs} />
        </div>
      </Router>
    );
  }
}

export default App;
