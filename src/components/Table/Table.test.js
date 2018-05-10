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

  it("should render table with data", () => {
    const list = [
      {
        country: "USA",
        athletes: [
          {
            athlete: "HARPER, Dawn",
            country: "USA",
            sex: "Women",
            event: "100m hurdles",
            medal: "Gold"
          },
          {
            athlete: "OLIVER, David",
            country: "USA",
            sex: "Men",
            event: "110m hurdles",
            medal: "Bronze"
          }
        ],
        totalGold: 1,
        totalSilver: 0,
        totalBronze: 1
      },
      {
        country: "AUS",
        athletes: [
          {
            athlete: "MCLELLAN, Sally",
            country: "AUS",
            sex: "Women",
            event: "100m hurdles",
            medal: "Silver"
          }
        ],
        totalGold: 0,
        totalSilver: 1,
        totalBronze: 0
      }
    ];
    wrapper.setProps({ rows: list });
    expect(wrapper.contains("USA")).toEqual(true);
    expect(wrapper.contains("AUS")).toEqual(true);

    const rows = wrapper.find("tr");
    expect(rows.length).toEqual(3);

    const firstRowColumns = rows
      .first()
      .find("th")
      .map(column => column.text());
    expect(firstRowColumns.length).toEqual(5);
    expect(firstRowColumns[0]).toEqual("Country");
    expect(firstRowColumns[1]).toEqual("Gold");
    expect(firstRowColumns[3]).toEqual("Bronze");
    expect(firstRowColumns[4]).toEqual("Total");

    const lastRowColumns = rows
      .last()
      .find("td")
      .map(column => column.text());
    expect(lastRowColumns.length).toEqual(5);
    expect(lastRowColumns[0]).toEqual("AUS");
    expect(lastRowColumns[1]).toEqual("0");
    expect(lastRowColumns[2]).toEqual("1");
    expect(lastRowColumns[3]).toEqual("0");
    expect(lastRowColumns[4]).toEqual("1");
  });

  it("should render table with no data and display table headers with 5 columns", () => {
    wrapper.setProps({ rows: [] });
    expect(wrapper.find("th")).toHaveLength(5);
    expect(wrapper.find("td")).toHaveLength(0);
  });
});
