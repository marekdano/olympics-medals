import React, { Component } from "react";
import "./App.css";
import medalists from "../data/olympics_medalists";

class App extends Component {
  state = {
    medalists
  };

  /**
   * Design of development the app requirements
   * 1. Group medalists by their country and medals (G, S, B) won.
   *    Display countries with their medals in descending order
   *    in the table format using colmuns of Rank, Country, Gold, Silver, Bronz, Total.
   *    We can have a component for it, e.g. <Table rows={data} />, where we pass
   *    data of grouped medalists.
   * 2. Add filters to Country, Gold, Silver and Bronz columns.
   */

  /**
   * Group athletes by providing a property in "athlete" object.
   *
   * @param {array} data
   * @param {string} property
   */
  groupAthletesBy(data, property) {
    return data.reduce((countries, obj) => {
      const key = obj[property];

      if (!countries[key]) {
        countries[key] = {};
      }

      if (!countries[key].athletes) {
        countries[key].athletes = [obj];
      } else {
        countries[key].athletes.push(obj);
      }

      return countries;
    }, {});
  }

  /**
   * Count gold, silver or bronze medals in the array of athletes
   *
   * @param {array} athletes
   * @param {string} medalType
   */
  countMedalsBy(athletes, medalType) {
    return athletes.filter(athlete => {
      return athlete.medal === medalType;
    }).length;
  }

  /**
   * Get the list of objects with total gold, silver and bronze medals
   * and the list of athletes for each country.
   *
   * @param athletes - object of counties athletes
   *
   * e.g. { USA: { athletes: [ Object ] }, KEN: { athletes: [ Object, Object ] } }
   */
  getTotalMedals(athletes) {
    let athletesWithTotals = [];
    for (const prop in athletes) {
      athletesWithTotals = [
        ...athletesWithTotals,
        {
          country: prop,
          ...athletes[prop],
          totalGold: this.countMedalsBy(athletes[prop].athletes, "Gold"),
          totalSilver: this.countMedalsBy(athletes[prop].athletes, "Silver"),
          totalBronze: this.countMedalsBy(athletes[prop].athletes, "Bronze")
        }
      ];
    }
    return athletesWithTotals;
  }

  /**
   *
   * @param countries -
   */
  rankCountriesByMedalCount(countries) {
    countries.sort((country1, country2) => {
      const total1 =
        country1.totalGold * 10000 +
        country1.totalSilver * 100 +
        country1.totalBronze;
      const total2 =
        country2.totalGold * 10000 +
        country2.totalSilver * 100 +
        country2.totalBronze;
      return total2 - total1;
    });
    return countries;
  }

  render() {
    const athletesByCountry = this.groupAthletesBy(medalists, "country");
    const countryWithMedalCounts = this.getTotalMedals(athletesByCountry);
    const rankCountries = this.rankCountriesByMedalCount(
      countryWithMedalCounts
    );
    // console.log(athletesByCountry);
    // console.log(this.getTotalMedals(athletesByCountry));
    //console.log(rankCountries.map(c => c.country));

    return (
      <div>
        <h1>Athletes</h1>
        {this.state.medalists.map(medalist => {
          return (
            <div key={medalist.athlete + medalist.event}>
              <h3>Athlete</h3>
              <p>{medalist.athlete}</p>
              <p>medal: {medalist.medal}</p>
            </div>
          );
        })}
        <p>{this.state.medalists[0].athlete}</p>
      </div>
    );
  }
}

export default App;
