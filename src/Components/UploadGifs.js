import React, { Component } from "react";
import * as config from ".././config";
import "./UploadGifs.css";

class UploadGifs extends Component {
  constructor() {
    super();
    this.state = {
      imageURL: "",
      uploading: false
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(event) {
    event.preventDefault();

    const uploadUrl = config.uploadUrl;
    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("api_key", config.token);

    if (!this.uploadInput.files[0]) {
      this.setState({ message: "No file selected" });
      return;
    }
    this.setState({ uploading: true });
    console.log(data);

    fetch(uploadUrl, {
      method: "POST",
      body: data
    })
      .then(response => response.json())
      .then(result => {
        console.log("succc", result);
        if (result.meta.status === 200) {
          this.setState({
            imageURL: "https://giphy.com/gifs/" + result.data.id,
            message: "ok"
          });
          this.uploadInput.value = "";
        } else {
          this.setState({ message: result.meta.msg });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({ message: "Something went wrong." });
      })
      .then(() => {
        this.setState({ uploading: false });
      });
  }

  render() {
    return (
      <div className="upload">
        <div className="result">
          {this.state.uploading ? (
            "Uploading..."
          ) : this.state.message === "ok" ? (
            <>
              Your image was uploaded here:{" "}
              <a href={this.state.imageURL}>{this.state.imageURL}</a>
            </>
          ) : (
            this.state.message
          )}
        </div>
        <form className="uploadForm" onSubmit={this.handleUploadImage}>
          <h3>Upload file</h3>
          <div>
            <input
              onChange={() => {
                this.setState({ message: "" });
              }}
              ref={ref => {
                this.uploadInput = ref;
              }}
              type="file"
            />
          </div>
          <br />
          <div>
            <button className="uploadButton" disabled={this.state.uploading}>
              Upload
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default UploadGifs;
