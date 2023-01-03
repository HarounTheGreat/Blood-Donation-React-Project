import React, { useState } from "react";
import Chart from "chart.js/auto";
import haroun from "./Data";

const y = () => {
  let M = 0;
  let F = 0;
  console.log(haroun.length);
  for (let i = 0; i < haroun.length; i++) {
    if (haroun[i].Sex == "female") {
      F = F + 1;
    } else {
      M = M + 1;
    }
  }
  return [F, M];
};

const Blood_type_value = () => {
  let B_type = [0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < haroun.length; i++) {
    if (haroun[i].Blood_type == "O+") {
      B_type[0] = B_type[0] + 1;
    } else if (haroun[i].Blood_type == "O-") {
      B_type[1] = B_type[1] + 1;
    } else if (haroun[i].Blood_type == "A+") {
      B_type[2] = B_type[2] + 1;
    } else if (haroun[i].Blood_type == "A-") {
      B_type[3] = B_type[3] + 1;
    } else if (haroun[i].Blood_type == "B+") {
      B_type[4] = B_type[4] + 1;
    } else if (haroun[i].Blood_type == "B-") {
      B_type[5] = B_type[5] + 1;
    } else if (haroun[i].Blood_type == "AB+") {
      B_type[6] = B_type[6] + 1;
    } else {
      B_type[7] = B_type[7] + 1;
    }
  }
  console.log(B_type.length);
  console.log("B_type=", B_type);
  return B_type;
};

function App() {
  // Blood Type Chart

  var xValues = ["Male", "Fmale"];
  var yValues = y();
  var barColors = ["#b91d47", "#00aba9"];

  new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production 2018",
      },
    },
  });

  new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
      labels: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: [
            "#27AE60",
            "#8E44AD",
            "#2C3E50",
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: Blood_type_value(),
        },
      ],
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: "Predicted world Blood Type",
      },
    },
  });
  return (
    <div>
      <h1>halla fi arhebou</h1>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
