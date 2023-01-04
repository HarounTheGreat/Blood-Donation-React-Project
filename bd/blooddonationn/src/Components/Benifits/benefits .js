import React, { useState } from "react";
import "./Benifits.css"
import blood1 from './img/Blood1.png'
import blood2 from './img/Blood2.jpg'
import blood3 from './img/Blood3.jpg'

function Benifits() {
  return (
      <div class="container course pb-5 pt-5">
        <h1 class="h1-responsive font-weight-bold text-center my-4">
          benefits from donating blood
        </h1>
        <hr />
        <p class="text-center w-responsive mx-auto mb-5">
          10 reasons to donate blood
        </p>
        <div class="row">
          <div class="col-md-4">
            <div class="work__img">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={blood1} class="img-fluid" />
                </div>
              <div class="card-body">
                <h5 class="card-title">Help Sickle Cell Patients</h5>
                <p class="card-text">
                  Blood donors who are Black play a critical role in helping
                  sickle cell disease patients receive the most compatible blood
                  match. Donors needed to meet this urgent need.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="work__img">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={blood2} class="img-fluid" />
                </div>
              <div class="card-body">
                <h5 class="card-title">Help Sickle Cell Patients</h5>
                <p class="card-text">
                  Blood donors who are Black play a critical role in helping
                  sickle cell disease patients receive the most compatible blood
                  match. Donors needed to meet this urgent need.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="work__img">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={blood3} class="img-fluid" />
                </div>
              <div class="card-body">
                <h5 class="card-title">Help Sickle Cell Patients</h5>
                <p class="card-text">
                  Blood donors who are Black play a critical role in helping
                  sickle cell disease patients receive the most compatible blood
                  match. Donors needed to meet this urgent need.
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>
  );
}

export default Benifits;
