import React from "react";
import Chart from "./Chart";

const ExpensesChart = (props) => {
  const chartData = [
    { label: "JAN", value: 0 },
    { label: "FEb", value: 0 },
    { label: "MAR", value: 0 },
    { label: "AVR", value: 0 },
    { label: "MAY", value: 0 },
    { label: "LUN", value: 0 },
    { label: "JUL", value: 0 },
    { label: "AUG", value: 0 },
    { label: "SEP", value: 0 },
    { label: "OCT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DEC", value: 0 },
  ];
  for (const expense of props.filtredExpenses) {
    const expenseMonth = expense.date.getMonth();
    chartData[expenseMonth].value += expense.price;
  }
  return <Chart data={chartData} />;
};

export default ExpensesChart;
