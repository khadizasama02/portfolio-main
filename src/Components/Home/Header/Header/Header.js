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
    <section class="background" id="header">
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-md 6 header" style={{color: '#303952'}}>
            <h2>
              Hello
            </h2>
            <h2>it's me</h2>
            <h1 style={{fontSize:"45px"}}>
               
               khadiza Morioum Sama
            </h1>
            <h2>
              I am a {' '} 
              <Typical
              loop={Infinity}
              wrapper="b"
              steps={['Web Developer', 1000, 'Web Designer', 1000]}
              />
            </h2>
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
