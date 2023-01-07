import React from "react";
import ReactDOM from "react-dom/client";
import Benifits from "./Components/Benifits/benefits ";
import Intro from "./Components/Intro/intro";
import Video_fun from "./Components/Videos/videos";
import Recherche from "./Components/Recherche/recherche";
import blood1 from "./img/Blood1.png";
import blood2 from "./img/Blood2.jpg";
import blood3 from "./img/blood3.jpg";
import "./index.css";
import App from "./App";
const Index = () => {
  const dIntro = {
    greeting: "Hello, my name is",
    name: "Mohamed Haroun Bouriga",
    object: "This is my project",
  };
  const img_data = {
    img1: blood1,
    img2: blood2,
    img3: blood3,
  };
  return (
    <div>
      <Intro dIntro={dIntro} />
      <div className="container">
        <Benifits img_data={img_data} />
        <Video_fun />
        <App />
        <Recherche />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
