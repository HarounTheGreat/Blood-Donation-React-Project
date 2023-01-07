import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import haroun from "./Data";
import "./recherche.css";
export default function Recherche() {
  const [rcity, setRcity] = useState("");

  const [updated, setUpdated] = useState(rcity);

  const [final, setFinal] = useState("");

  const [num, setNum] = useState(0);

  const [rharoun, setRharoun] = useState([]);

  const handleChange = (event) => {
    setRcity(event.target.value);
    setFinal(event.target.value);
  };
  const handleClick = () => {
    let n = 0;
    let aux = [];
    setUpdated(rcity);
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
      if (inputValue == getcity(haroun[i])) {
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
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={rcity}
      />

      <h2>{rcity}</h2>

      <h2>City: {updated}</h2>

      <button onClick={handleClick}>Update</button>
      <Tabb mat={mat} />
    </div>
  );
}
const Tabb = ({ mat }) => {
  const matList = mat.map((line) => <div className="card">{line}</div>);
  return <div className="card">{matList}</div>;
};
const Mat = (rharoun) => {
  console.log("this==============", rharoun);
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
