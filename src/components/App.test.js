import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("countMedalsBy", () => {
  const athletes = [
    {
      athlete: "BEKELE, Kenenisa",
      country: "ETH",
      sex: "Men",
      event: "10000m",
      medal: "Gold"
    },
    {
      athlete: "SIHINE, Sileshi",
      country: "ETH",
      sex: "Men",
      event: "10000m",
      medal: "Silver"
    },
    {
      athlete: "DIBABA, Tirunesh",
      country: "ETH",
      sex: "Women",
      event: "10000m",
      medal: "Gold"
    }
  ];

  it("should count gold medals and return 2", () => {
    expect(App.prototype.countMedalsBy(athletes, "Gold")).toEqual(2);
  });

  it("should count silver medals and return 1", () => {
    expect(App.prototype.countMedalsBy(athletes, "Silver")).toEqual(1);
  });

  it("should count bronze medals and return 0", () => {
    expect(App.prototype.countMedalsBy(athletes, "Bronze")).toEqual(0);
  });
});

// TODO: add test cases for groupAthletesBy method
describe("groupAthletesBy", () => {});

// TODO: add test cases for getTotalMedals method
describe("getTotalMedals", () => {});
