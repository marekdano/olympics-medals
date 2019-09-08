import React from "react";

import Table from "./../Table/Table";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Modal />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Table handleRowClick={() => {}}/>);
  });

  test("TODO define test => should have list of athletes", () => {
    
  });
});