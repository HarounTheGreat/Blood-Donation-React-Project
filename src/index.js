// index.js
import React from "react";
import ReactDOM from "react-dom";
import { countriesData } from "./data/countries.js";
import asabenehImage from "./images/asabeneh.jpg";

class App extends React.Component {
  state = {
    count: 0,
    }
  next = () => {
    var rndInt = Math.floor(Math.random() * countriesData.length);
    this.setState({ count: rndInt })
  }
  render() {
    // const item=countriesData[1]
    var item=countriesData[this.state.count]
    console.log("d=",this.state.count)
    return (
      <div class="center">
        <div class="countryimg">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg"/>
        </div>
        <div class="countryimg">{item.name}</div>
        <div >Capital: {item.capital}</div>
        <div>language: {item.languages}</div>
        <div>population: {item.population}</div>
        <div>Currency: {item.currency}</div>
        <button onClick={this.next}> Next </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);