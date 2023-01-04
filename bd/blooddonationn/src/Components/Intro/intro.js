import React, { useState } from "react";
import "./Intro.css";
import file from './images/HIV.pdf';


function Intro() {
//   var typed = new Typed(".typing", {
//     strings: ["Developer", "Designer", "Freelancer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true,
//   });
  return (
    <section class="home" id="home">
      <div class="max-width">
        <div class="home-content">
          <div class="text-1">Hello, my name is</div>
          <div class="text-2">Med Haroun Bouriga</div>
          <div class="text-3">
            This is my Project<span class="typing"></span>
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
