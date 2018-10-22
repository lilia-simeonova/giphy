import React, { Component } from "react";
import * as config from "../config";
import Gif from "./Gif";
import "./GifsList.css";

class GifsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      gifsClass: "gifs",
      sort: "",
      height: window.innerHeight,
      bottom: false,
      changedSearch: false
    };
    this.unmounted = false;
    this.getGifs = this.getGifs.bind(this);
    this.useMosaicLayout = this.useMosaicLayout.bind(this);
    this.sort = this.sort.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  componentDidMount() {
    this.getGifs();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.urls && prevProps.search !== this.props.search) {
      this.setState({ urls: [], sort: "" });
      this.getGifs();
    }
  }

  getGifs() {
    const { token } = config;
    const baseUrl = config.url;
    const { search } = this.props;

    let url = "";
    if (search === "") {
      url = baseUrl + "trending?api_key=" + token;
    } else {
      url = baseUrl + "search?api_key=" + token + "&q=" + search;
    }
    url += "&offset=" + this.state.urls.length;

    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        const urls = res.data;
        if (this.unmounted) return;
        if (this.state.urls.length === 0) {
          this.setState({ urls });
        } else {
          let currArray = this.state.urls.concat(urls);
          this.setState({ urls: currArray });
        }
      })
      .catch(err => console.log(err));
  }

  handleScroll(e) {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.setState({
        bottom: true
      });
      this.getGifs();
    } else {
      this.setState({
        bottom: false
      });
    }
  }
  useMosaicLayout() {
    this.state.gifsClass === "gifs"
      ? this.setState({ gifsClass: "gifsMosaic" })
      : this.setState({ gifsClass: "gifs" });
  }

  sort() {
    let sortedArray = [];
    let sort = "";
    if (this.state.sort === ("" || "ASC")) {
      sortedArray = this.state.urls.sort(function(a, b) {
        return new Date(b["import_datetime"]) - new Date(a["import_datetime"]);
      });
      sort = "DESC";
    } else {
      sortedArray = this.state.urls.sort(function(a, b) {
        return new Date(a["import_datetime"]) - new Date(b["import_datetime"]);
      });
      sort = "ASC";
    }
    this.setState({
      urls: sortedArray,
      sort: sort
    });
  }

  render() {
    const urls = this.state.urls;

    if (urls) {
      const gifObj = urls.map((gif, idx) => {
        return (
          <Gif key={"gif-" + idx} gif={gif} mosaic={this.state.gifsClass} />
        );
      });

      return (
        <div>
          <div>
            <button onClick={this.useMosaicLayout} className="options layout">
              Change Layout
            </button>
            <button onClick={this.sort} className="options">
              Sort {this.state.sort === "ASC" ? "⬆" : ""}
              {this.state.sort === "DESC" ? "⬇" : ""}
            </button>
            <p>
              {" "}
              {this.state.sort !== ""
                ? "Sorted by: uploaded time " + this.state.sort
                : ""}
            </p>
          </div>
          <div className={this.state.gifsClass}>{gifObj}</div>
        </div>
      );
    }
  }
}

export default GifsList;
