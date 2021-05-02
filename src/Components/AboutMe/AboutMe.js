import React from "react";
import Typical from "react-typical";

const AboutMe = () => {
  return (
    <div>
      <div class="container " style={{marginTop:"150px",marginBottom:"150px"}}>
        <div class="row">
          <div class="col-md-4">
            <h5>About Me</h5>
            <h1>
              Code Is{" "}
              <Typical loop={Infinity} wrapper="b" steps={["Poetry", 1000]} />
            </h1>
          </div>
          <div class="col-md-4">
            <p>
              wamall river named Duden flows by their place and supplies it with
              the which roasted parts of sentences fly into your mouth. ven the
              all-powerful Pointing has no control about the blind texts it is
              an almost northographic life One day however a small line of blind
              text by the name of Lorem Ipsum decided to leave for the far
            </p>
          </div>
          <div class="col-md-4">
          
           <h6>
              React JS{" "}
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </h6>
            <h6>
              javascript
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </h6>
            <h6>
              HTML
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-success progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </h6>
            <h6>
              CSS
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
