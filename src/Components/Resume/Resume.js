import React from 'react';
import './Resume.css';
import { IoSchool } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

const Resume = () => {
    return (
        <div class="resume-background">
          <div class="resume-header">
          <h6 class="text-center pt-5">RESUME</h6>
           <h3 class="text-center">Education & Skills</h3> 
          </div>
          <div class="row">
              <div class="col-md-6">
                  <h5 style={{marginLeft:"200px",marginTop:"50px"}}>Education</h5>
              <div  style={{marginLeft:"100px",marginTop:"30px"}}>
              <h3><IoSchool/>University Of Chittagong</h3>
               <p class="mx-4">Bsc engineering in Computer Science & Engineering</p>
               
              </div>
              <div  style={{marginLeft:"100px",marginTop:"50px"}}>
              <h3><FaUniversity/>Chittagong College</h3>
               <p class="mx-4">Higher Secondary School Certificate</p>
               
              </div>
              <div  style={{marginLeft:"100px",marginTop:"50px"}}>
              <h3><FaSchool/>Bangladesh Mohila Samity Girls High School</h3>
               <p class="mx-4">Secondary School Certificate</p>
               
              </div>
              </div>
              <div class="col-md-6">
              <h5 style={{marginLeft:"200px",marginTop:"50px"}}>Skills</h5>
              <div  style={{marginLeft:"100px",marginTop:"30px"}}>
              <h3><img src="/publicImage/structure.png" style={{width:"30px"}}/>Front-End Development</h3>
               <p class="mx-4">React js,Html,Css,Javascript(Es6),Bootstrap,C programming</p>
               
              </div>
              <div  style={{marginLeft:"100px",marginTop:"50px"}}>
              <h3><img src="/publicImage/backend.png" style={{width:"30px"}}/>Back-End Development</h3>
               <p class="mx-4">Node js,Express js,Mongo db,C++</p>
               
              </div>
              <div  style={{marginLeft:"100px",marginTop:"50px",marginBottom:"50px"}}>
              <h3><img src="/publicImage/python.png" style={{width:"30px"}}/>Familiar With</h3>
               <p class="mx-4">Python,Php,Mysql</p>
               </div>
                  
              </div>
          </div>
        </div>
    );
};

export default Resume;