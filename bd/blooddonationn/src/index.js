import React from "react";
import ReactDOM from "react-dom/client";
import Benifits from "./Components/Benifits/benefits ";
import Intro from "./Components/Intro/intro";
import Video_fun from "./Components/Videos/videos";
import Recherche from "./Components/Recherche/recherche"
import R from './Components/Recherche/R'

import "./index.css";
import App from "./App";
const Index = () => {
  return (
    <div>
      <Intro />
      <div className="container">
        <Benifits />
        <Video_fun />
        <App />
        <Recherche />
        <R />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
