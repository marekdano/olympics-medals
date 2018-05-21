import React from "react";

import Table from "./ModalDetails";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Modal />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Table />);
  });

  test("should have list of athletes", () => {
    
  })

});