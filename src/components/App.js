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

  render() {
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
