import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import haroun from "./Data";
export default function Recherche() {
  const [message, setMessage] = useState("");

  const [updated, setUpdated] = useState(message);

  const [final, setFinal] = useState("");

  const [num, setNum] = useState(0);
  const handleChange = (event) => {
    setMessage(event.target.value);
    setFinal(event.target.value);
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(message);
    let j = 0
    let n = 0;
    let c ='';
    let f;
    for (let i = 0; i < haroun.length; i++) {
      console.log(i);
      c ='';
      for (j = 0; j < 50; j++) {
        if (haroun[i].City[j] != ",") {
          c = c + haroun[i].City[j];
        } else {
          break;
        }
      }
      console.log('c=',c,'f=',final)
      f=" " + final
      if (c == f) {
        n = n + 1;
      }
    }
    setNum(n);
    console.log("count=",num);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <h2>{message}</h2>

      <h2>City: {updated}</h2>

      <button onClick={handleClick}>Update</button>
    </div>
  );
}

