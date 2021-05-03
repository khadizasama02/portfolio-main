import React from "react";
import emailjs from "emailjs-com";
import './Email.css'

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g2gtzj5",
        "template_o4kijzl",
        e.target,
        "user_K3IBHWDVqWlRreb5mjjzM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div class="contact-background" id="contactMe">
      <div className="container">
        <div className="p-3" >
        <h1 class="text-center" ><span >Already Impressed!!</span></h1>
        <h3 class="text-center">Contact Me</h3>
        </div>
        <div className="row">
          <div class="col-md-6 ">
              <div style={{marginTop:"150px"}} class="text-center"> 
                  <h3>Wanna Start A New Project With Me</h3>
                  <h2>Let's Get In Touch With Me</h2>
              </div >
              <div className="d-flex justify-content-center " style={{marginTop:"20px"}}>
              <a href="https://www.facebook.com/saama23/"><img src="/publicImage/fb.png" style={{width: "50px",padding: "10px"}}/></a>
              <a href="https://www.linkedin.com/in/khadizamorioumsama/"><img src="/publicImage/in.png" style={{width: "50px",padding: "10px"}}/></a>
              <a href="https://instagram.com/samairasama?igshid=1em9u2eh9dng2"><img src="/publicImage/ig.png" style={{width: "50px",padding: "10px"}}/></a>
              </div>

          </div>
          <div class="col-md-6">
            <form onSubmit={sendEmail}>
              <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                  />
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <textarea
                    className="form-control"
                    id=""
                    cols="30"
                    rows="8"
                    placeholder="Your message"
                    name="message"
                  ></textarea>
                </div>
                <div className="col-8 pt-3 mx-auto">
                  <input
                    type="submit"
                    className="btn btn-info"
                    value="Send Message"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer>
         <h6  class="text-center p-3" > <small>© 2021 Copyright.All rights reserved.</small></h6>
        </footer>
      </div>
    </div>
  );
}

// export default Email;
