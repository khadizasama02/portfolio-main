import React from "react";
import Navbar from "../Navbar/Navbar";
import './Header.css';
import { FaFileDownload } from 'react-icons/fa';
import { GrContactInfo } from 'react-icons/gr';

import Typical from 'react-typical'

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Header = () => {
  return (
    <section class="background">
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-md 6 header">
            <h3>
              Welcome
            </h3>
            <h4>
              I am khadiza Morioum Sama
            </h4>
            <h4>
              I am a {' '} 
              <Typical
              loop={Infinity}
              wrapper="b"
              steps={['Web Developer', 1000, 'Web Designer', 1000]}
              />
            </h4>
           <div class="d-flex">
           <a href="/publicImage/Resume.pdf" download>
              <button class="btn btn-outline"><FaFileDownload/>My CV</button>

            </a>
            <button class="btn btn-outline mx-2"><GrContactInfo/>Contact me</button>
           </div>
          </div>
          <div class="col-md 6 image">
              <img src="/publicImage/headerImage.png" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
