import React, {
  Component
} from "react";
import "./App.css";
import Table from "./Table/Table";
import Modal from './Modal/Modal';
import medalists from "../data/olympics_medalists";
import countries from "../data/countries.json";

class App extends Component {
  state = {
    medalists,
    countries,
    rankCountries: null
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
   * @param athletes - object of counties athletes in the following form:
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
   * Get the array of countries with properties of "country", "athletes",
   * "totalGold", "totalSilver" and "totalBronze". The array of countries is
   * sorted in descending order by the formula
   *
   *  total = totalGold * 10000 + totalSilver * 100 + totalBronze
   *
   * @param countries - array of countries sorted by calculation of gold,
   * silver and bronze medals.
   */
  orderCountriesByMedalCount(countries) {
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

  /**
   * Get the object of counties where keys are countries code.
   */
  getCountriesObj(countries) {
    return countries.reduce((list, country) => {
      list[country['alpha3Code']] = country;
      return list;
    }, {})
  }

  /**
   * Add country name and flag to the list of sorted countries with medals.
   */
  addCountryFlagAndName(rankCountries, countriesData) {
    return rankCountries.map(obj => {
      const { name, flag } = countriesData[obj['country']];
      return { ...obj, name, flag };
    });
  }

  addRanks(countries) {
    let prevTotal, currTotal = 0;
    let rank;
    return countries.map((country, index) => {
      currTotal =
        country.totalGold * 10000 +
        country.totalSilver * 100 +
        country.totalBronze;
      
      rank = currTotal === prevTotal ? rank : index + 1;
      prevTotal = currTotal;

      return { ...country, rank }
    })
  }
  /**
   * Update state of rankCountries after getting an array of sorted countries
   * with total medals.
   */
  componentDidMount() {
    const countriesData = this.getCountriesObj(this.state.countries);
    const athletesByCountry = this.groupAthletesBy(medalists, "country");
    const countryWithMedalCounts = this.getTotalMedals(athletesByCountry);
    const orderedCountries = this.orderCountriesByMedalCount(
      countryWithMedalCounts
    );

    const countriesWithNameAndFlag = this.addCountryFlagAndName(orderedCountries, countriesData);
    const countriesWithRank = this.addRanks(countriesWithNameAndFlag);

    this.setState({
      rankCountries: countriesWithRank
    });
  }

  render() {
    return ( 
      <div className="main" >
        <h3> Medal table </h3> 
        <h5 className="sub-header">Olympics games 2008</h5> 
        <Table rows={this.state.rankCountries} />
      </div>
    );
  }
}

export default App;