import React, { Component } from "react";
import ReactModal from "react-modal";
import * as config from ".././config.js";
import "./Gif.css";

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      clicked: false,
      modalIsOpen: false,
      toSlackRes: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.shareToSlack = this.shareToSlack.bind(this);
  }

  componentWillUnmount() {
    this.img.removeEventListener("load", this.handleImageLoaded);
  }

  componentDidMount() {
    if (this.img) {
      this.img.addEventListener("load", this.handleImageLoaded);
    }
  }

  handleImageLoaded() {
    this.setState({ imageStatus: true });
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.openModal();
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false, toSlackRes: "" });
  }

  mapRating(ratingId) {
    switch (ratingId) {
      case "g":
        return "General Audiences";
      case "pg":
        return "Parental Guidance Suggested";
      case "pg-13":
        return "Parents Strongly Cautioned";
      case "r":
        return "Restricted";
      case "nc-17":
        return "Adults only";
      default:
        return "General Audiences";
    }
  }

  shareToSlack() {
    fetch(config.slackUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: "Hey! Check this out",
        attachments: [
          {
            fallback: "Gif",
            color: "#2eb886",
            title: this.props.gif.title,
            image_url: this.props.gif.images.downsized_medium.url
          }
        ]
      })
    })
      .then(res => {
        this.setState({ toSlackRes: "ok" });
      })
      .catch(err => {
        this.setState({ toSlackRes: "err" });
      });
  }

  render() {
    const { gif } = this.props;
    const { mosaic } = this.props;
    const id = gif["id"];
    const url = gif["images"]["downsized_medium"]["url"];
    const rating = this.mapRating(gif["rating"]);
    const title = gif["title"];
    const gifClass = mosaic === "gifsMosaic" ? "gifMosaic" : "gif";

    let user = "unknown";
    if (gif.user) {
      user = gif["user"]["username"];
    }
    const imgClass = this.state.imageStatus ? "showImg" : "hideImg";
    return (
      <div className={gifClass}>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="modal"
          contentLabel="Example Modal"
        >
          <img
            aria-label={title}
            key={id}
            alt={title}
            src={url}
            className="modalImg"
          />
          <div className="info">
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            <div>
              Rating: <b>{rating}</b>
            </div>{" "}
            <div className="slack">
              <button className="slackBtn" onClick={this.shareToSlack} />
              {this.state.toSlackRes === "ok" ? (
                <div className="slackResponse">
                  <span role="img" aria-label="smile-emoji">
                    😊
                  </span>{" "}
                  Successfully sent to Slack
                </div>
              ) : (
                <div />
              )}
              {this.state.toSlackRes === "err" ? (
                <div className="slackResponse">
                  {" "}
                  <span role="img" aria-label="sad-emoji">
                    😔
                  </span>{" "}
                  Something went wrong{" "}
                </div>
              ) : (
                <div />
              )}
            </div>
            <div>
              <i>Uploaded by: {user}</i>
            </div>
          </div>
        </ReactModal>
        <div className="placeholder">
          <img
            tabIndex={0}
            className={imgClass}
            aria-label={title}
            key={id}
            src={url}
            alt={title}
            ref={ref => {
              this.img = ref;
            }}
            onClick={this.openModal}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    );
  }
}

export default Gif;
