import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("AppComponent", () => {
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
    },
    {
      athlete: "MERRITT, LaShawn",
      country: "USA",
      sex: "Men",
      event: "4x400m relay",
      medal: "Gold"
    },
    {
      athlete: "MAREK, Marek ",
      country: "SVK",
      sex: "Men",
      event: "4x400m relay",
      medal: "Gold"
    }
  ];

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("countMedalsBy", () => {
    it("should count gold medals and return 2", () => {
      expect(App.prototype.countMedalsBy("Gold", athletes)).toEqual(4);
    });

    it("should count silver medals and return 1", () => {
      expect(App.prototype.countMedalsBy("Silver", athletes)).toEqual(1);
    });

    it("should count bronze medals and return 0", () => {
      expect(App.prototype.countMedalsBy("Bronze", athletes)).toEqual(0);
    });
  });

  describe("groupAthletesBy", () => {
    it("should group atletes by country", () => {
      expect(
        Object.keys(App.prototype.groupAthletesBy("country", athletes)).length
      ).toEqual(3);
      expect(
        Object.keys(App.prototype.groupAthletesBy("country", athletes)).find(
          c => c === "USA"
        )
      ).toEqual("USA");
      expect(
        Object.keys(App.prototype.groupAthletesBy("country", athletes)).find(
          c => c === "ETH"
        )
      ).toEqual("ETH");
      expect(
        App.prototype.groupAthletesBy("country", athletes)["ETH"]["athletes"].length
      ).toEqual(3);
    });
  });

  describe("getTotalMedals", () => {
    it("should contains new property of totalGold, totalSilver, totalBronze and country in the returned list of objects", () => {
      const athletesByCountry = App.prototype.groupAthletesBy(
        "country",
        athletes
      );
      expect(App.prototype.getTotalMedals(athletesByCountry)[0]).toMatchObject({
        country: "ETH",
        totalGold: 2,
        totalSilver: 1,
        totalBronze: 0
      });

      expect(App.prototype.getTotalMedals(athletesByCountry)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            country: "ETH",
            totalGold: 2,
            totalSilver: 1,
            totalBronze: 0
          })
        ])
      );

      expect(App.prototype.getTotalMedals(athletesByCountry)[1]).toMatchObject({
        country: "USA",
        totalGold: 1,
        totalSilver: 0,
        totalBronze: 0
      });
    });
  });

  describe("orderCountriesByMedalCount", () => {
    it("should sort the list of countries by medal count", () => {
      const athletesByCountry = App.prototype.groupAthletesBy(
        "country",
        athletes
      );
      const countryWithMedalCounts = App.prototype.getTotalMedals(
        athletesByCountry
      );
      const orderedCountries = App.prototype.orderCountriesByMedalCount(
        countryWithMedalCounts
      );

      expect(orderedCountries[0]).toMatchObject({ country: "ETH" });
      expect(orderedCountries[1]).toMatchObject({ country: "USA" });
    });
  });

  describe("addRanks", () => {
    it("should add rank to each country", () => {
      const athletesByCountry = App.prototype.groupAthletesBy(
        "country",
        athletes
      );
      const countryWithMedalCounts = App.prototype.getTotalMedals(
        athletesByCountry
      );

      const orderedCountries = App.prototype.orderCountriesByMedalCount(
        countryWithMedalCounts
      );
      const contriesWithRank = App.prototype.addRanks(orderedCountries);

      expect(contriesWithRank[0]).toMatchObject({ country: "ETH", rank: 1 });
      expect(contriesWithRank[1]).toMatchObject({ country: "USA", rank: 2 });
    });

    it("should have two countries with the same rank number", () => {
      it("should add rank to each country", () => {
      const athletesByCountry = App.prototype.groupAthletesBy(
        "country",
        athletes
      );
      const countryWithMedalCounts = App.prototype.getTotalMedals(
        athletesByCountry
      );

      const orderedCountries = App.prototype.orderCountriesByMedalCount(
        countryWithMedalCounts
      );
      const contriesWithRank = App.prototype.addRanks(orderedCountries);

      console.log(countriWithRank);

      expect(contriesWithRank[0].rank).toEqual(1);
      expect(contriesWithRank[1].rank).toEqual(2)
      expect(contriesWithRank[2].rank).toEqual(2);
    });
    })
  });
});
