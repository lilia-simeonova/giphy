import React from "react";
import GifsList from "./GifsList";
import Gif from "./Gif";
import * as config from "../config";
import { shallow, mount, render } from "enzyme";
var enzyme = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });

describe("Test buttons", () => {
  const wrapper = shallow(<GifsList />);
  it("Buttons - prevent default", () => {
    wrapper.find("button").forEach(node => {
      node.simulate("click", { preventDefault() {} });
    });
  });
});
