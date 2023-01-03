import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const values = props.data.map((element) => element.value);
  const maxValue = Math.max(...values);
  // console.log("values: ", values);
  // console.log("max: ", maxValue);
  return (
    <div className="chart">
      {props.data.map((el) => (
        <ChartBar
          label={el.label}
          value={el.value}
          maxValue={maxValue}
          key={el.label}
        />
      ))}
    </div>
  );
}

export default Chart;
