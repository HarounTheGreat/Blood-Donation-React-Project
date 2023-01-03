import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  const [isOpen, setIsOpen] = useState(false);
  const openFormHandler = () => {
    setIsOpen(!isOpen);
  };
  const getNewExpenseData = (data) => {
    const newExpense = {
      ...data,
      id: Math.random().toString(),
    };
    props.onSaveNewExpense(newExpense);
  };
  return (
    <div className="new-expense">
      {isOpen && (
        <NewExpenseForm
          onGetNewExpenseData={getNewExpenseData}
          close={openFormHandler}
        />
      )}
      {!isOpen && <button onClick={openFormHandler}>Add New Expense</button>}
    </div>
  );
}

export default NewExpense;
