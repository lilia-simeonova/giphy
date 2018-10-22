import React from "react";
import ReactDOM from "react-dom";

import ReactModal from "react-modal";

import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";

const appElement = document.getElementById("root");

ReactModal.setAppElement(appElement);

ReactDOM.render(<App />, appElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
