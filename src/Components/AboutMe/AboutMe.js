import React from "react";
import Typical from "react-typical";
import './AboutMe.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AboutMe = () => {
  return (
    <div class="font-style" id="aboutMe">
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
              I'm a university student who love to develop new sites.I have proficiencies in React Js,JavaScript,HTML,Css,Bootstrap and some other programming languages.I am a creative person who love to deisgn as well.I love to learn new thing.Learning something new gives me immense joy. 
            </p>
          </div>
          <div class="col-md-4" >
          <div data-aos="fade-left" data-aos-duration="1000" >
          <h6>
              React JS{" "}
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </h6>
          </div>
           <div data-aos="fade-left" data-aos-duration="1500" >
           <h6>
              javascript
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </h6>
           </div>
            <div data-aos="fade-left" data-aos-duration="2000" >
            <h6>
              HTML
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-success progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </h6>
            </div>
            <div data-aos="fade-left" data-aos-duration="2500" >
            <h6>
              CSS
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </h6>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
