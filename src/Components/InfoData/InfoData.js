import React from "react";
import './InfoData.css'

const InfoData = ({ info }) => {
   
  return (
    <div class="col-md-4">
      <div class="card mb-5 box">
        <img src={info.icon} class="card-img-top " style={{width:"200px",marginLeft:"auto",marginRight:"auto"}} alt="..." />
        <div class="card-body text-center">
            <h3 class="card-title">{info.title}</h3>
          <p class="card-text">
           {info.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoData;
