import React, { useState, useRef } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredPrice, setEntredPrice] = useState("");
  const [entredDate, setEntredDate] = useState("");
  const titleRef = useRef();
  // const [userInput, setUserInput] = useState({
  //   entredTitle: "",
  //   entredPrice: "",
  //   entredDate: "",
  // });
  const titleChangeHandler = (event) => {
    setEntredTitle(event.target.value);
    // setUserInput({ ...userInput, entredTitle: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, entredTitle: event.target.value };
    // });
  };
  const priceChangeHandler = (event) => {
    setEntredPrice(event.target.value);
    // setUserInput({ ...userInput, entredPrice: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, entredPrice: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value);
    // setUserInput({ ...userInput, entredDate: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, entredDate: event.target.value };
    // });
  };
  const submitHandler = (event) => {
    console.log(titleRef);
    event.preventDefault();
    const expenseData = {
      price: entredPrice,
      title: entredTitle,
      date: new Date(entredDate),
    };
    props.onGetNewExpenseData(expenseData);
    setEntredDate("");
    titleRef.current.value = "";
    setEntredPrice("");
    setEntredTitle("");
  };
  const closeForm = () => {
    props.close();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            ref={titleRef}
            // onChange={titleChangeHandler}
            // value={entredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            min="0"
            step="0.01"
            onChange={priceChangeHandler}
            value={entredPrice}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={entredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={closeForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
