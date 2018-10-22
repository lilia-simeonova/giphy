import React from "react";

import Search from "./Search";
import { shallow } from "enzyme";
var enzyme = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<Search />);
describe("Search Component", () => {
  it("should render without throwing an error", () => {
    expect(wrapper.find("form").exists()).toBe(true);
  });
  it("renders a search input", () => {
    expect(wrapper.find("input").length).toEqual(2);
  });
});
