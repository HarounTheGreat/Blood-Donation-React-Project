import React, { useState } from "react";
import "./videos.css";
import project_video from './V/bd_vidoe.mp4'

function Video_fun() {
//   var typed = new Typed(".typing", {
//     strings: ["Developer", "Designer", "Freelancer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true,
//   });
  const urll="https://i.pinimg.com/564x/48/bf/c9/48bfc9ae0a10418849a3f50d57c08897.jpg"
  return (
    <section class="my_video" id="My videos">
      <div class="max-width">
        <h2 class="title">Explanation Video</h2>
        <video width="1000" height="500" controls>
          <source src={project_video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Video_fun;