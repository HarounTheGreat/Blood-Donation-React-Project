import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./recherche.css";

export default function Recherche(props) {
  const haroun = props.haroun;
  const [rcity, setRcity] = useState("");

  const [rblood, setBlood] = useState("");

  const [updated, setUpdated] = useState(rcity);

  const [final, setFinal] = useState("");

  const [num, setNum] = useState(0);

  const [rharoun, setRharoun] = useState([]);

  const handleChange = () => {
    setRcity(document.getElementById("message").value);
    setBlood(document.getElementById("blood").value);
    console.log("==========", rcity);
  };
  const handleClick = () => {
    if (rcity == "") {
      alert("You forget to enter city name");
    }
    if (rblood == "") {
      alert("You forget to enter blood type");
    }
    let n = 0;
    let aux = [];
    let inputValue = rcity;
    const getcity = (city_stat_country) => {
      let c = "";
      for (let j = 0; j < 50; j++) {
        if (city_stat_country.City[j] != ",") {
          c = c + city_stat_country.City[j];
        } else {
          break;
        }
      }
      return c;
    };
    //   console.log(getcity(haroun[0]), "------", inputValue);
    //   console.log(getcity(haroun[0]) == inputValue);
    for (let i = 0; i < haroun.length; i++) {
      if (rcity == getcity(haroun[i]) && rblood == haroun[i].Blood_type) {
        n++;
        console.log(n);
        aux.push(haroun[i]);
      }
    }
    setNum(n);
    console.log("count=", num);
    console.log("auxr=", aux);
    setRharoun(aux);
  };
  const mat = Mat(rharoun);

  return (
    <div className="SearchCard">
      <div className="titleSearch">
        Get Phone Numbers of Donors in your City
      </div>
      <div className="city">Enter City Name Here</div>
      <input type="text" id="message" name="message" onChange={handleChange} />

      <div className="city">Enter Blood Type Here</div>
      <input type="text" id="blood" name="blood" onChange={handleChange} />

      <h1>
        City name is {rcity} and the blood type is {rblood}
      </h1>

      <button class="btn" onClick={handleClick}>
        Search
      </button>
      <Tabb mat={mat} />
    </div>
  );
}
const Tabb = ({ mat }) => {
  const matList = mat.map((line) => <div className="card">{line}</div>);
  return <div className="card">{matList}</div>;
};
const Mat = (rharoun) => {
  let j = 0;
  let t = [];
  let mat = [];
  for (let i = 0; i < rharoun.length; i++) {
    t.push(rharoun[i].PhoneNum);
    j++;
    if (j == 8) {
      mat.push(t);
      t = [];
      j = 0;
    }
  }
  console.log("t=", t);
  return t;
};
const Line = ({ line }) => {
  const lineList = line.map((number) => <Number number={number} />);
  return <tr>{lineList}</tr>;
};
const Number = ({ number }) => {
  let isPrime = true;
  let style;
  if (number == 1) {
    style = { color: "blue" };
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      style = { color: "red" };
    } else {
      if (number % 2 == 0) {
        style = { color: "green" };
      } else {
        style = { color: "blue" };
      }
    }
  }
  return <th style={style}>{number}</th>;
};
