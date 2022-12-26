import React from "react";
import ReactDOM from "react-dom";

const Mat = ({ mat }) => {
  console.log(mat);
  const matList = mat.map((line) => <Line line={line} />);
  console.log(matList);
  return <div>{matList}</div>;
};

const Line = ({ line }) => {
  const lineList = line.map((number) => <Number number={number} />);
  console.log(lineList);
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
  return (<th style={style}>{number}</th>);
};

const App = () => {
  let j = 0;
  let t = [];
  let mat = [];
  for (let i = 0; i < 32; i++) {
    t.push(i);
    j++;
    if (j == 8) {
      mat.push(t);
      t = [];
      j = 0;
    }
  }
  return (
    <div className="container">
      <div>
        <h1>List</h1>
        <Mat mat={mat} />
      </div>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);