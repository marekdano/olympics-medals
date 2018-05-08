import React from "react";

import Table from "./Table";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Table />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Table />);
  });

  it("should render <Table />", () => {
    console.log(wrapper);
    expect(wrapper.find("div").exists()).toBeTruthy();
  });
});
