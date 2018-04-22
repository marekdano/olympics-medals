import React, { Component } from "react";
import "./App.css";
import medalists from "../data/olympics_medalists";

class App extends Component {
  state = {
    medalists
  };

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
