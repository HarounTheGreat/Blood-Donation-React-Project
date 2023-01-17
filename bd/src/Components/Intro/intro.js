import React, { useState } from "react";
import "./Intro.css";
import file from './images/HIV.pdf';


function Intro(props) {
  return (
    <section class="home" id="home">
      <div class="max-width">
        <div class="home-content">
          <div class="text-1">{props.dIntro.greeting}</div>
          <div class="text-2">{props.dIntro.name}</div>
          <div class="text-3">
          {props.dIntro.object}<span class="typing"></span>
          </div>
          <a href={file} download>
          download App
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
