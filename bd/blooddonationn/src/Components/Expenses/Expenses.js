import React, { useState } from "react";
import ExpensesChart from "../Chart/ExpensesChart";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filtredYear, setFiltredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };
  const filtredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filtredYear;
  });
  // let expensesContent = <h2>No Expenses Found !!!</h2>;
  // if (filtredExpenses.length > 0) {
  //   expensesContent = filtredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       date={expense.date}
  //       price={expense.price}
  //       title={expense.title}
  //     />
  //   ));
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filtredYear}
      />
      <ExpensesChart filtredExpenses={filtredExpenses} />
      <ExpensesList expenses={filtredExpenses} />
      {/* {expensesContent} */}
      {/* {filtredExpenses.length === 0 ? (
        <h2>No Expenses Found !!!</h2>
      ) : (
        filtredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            price={expense.price}
            title={expense.title}
          />
        ))
      )} */}
    </Card>
  );
}

export default Expenses;
