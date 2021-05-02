import React from "react";
import "./MenuItems.css";

const MenuItem = ({ menuItem }) => {
  return (
    <div className="row">
      {menuItem.map((item) => {
        return (
          <div className="col-md-4" key={item.id}>
            <div className="wrapper" style={{ marginBottom: "40px" }}>
              <div class="card card-style">
                <img
                  src={item.image}
                  class="card-img-top image-style"
                  alt="..."
                />
                <div className="info">
                  <div class="card-body">
                    <h5>{item.title}</h5>
                    <p class="card-text">{item.description}</p>
                    <div className="d-flex justify-content-between">
                    <a href={item.link1}><button class="btn btn-outline">{item.icon1}</button></a>
                        <a href={item.link2} class="left-side">
                        <button class="btn btn-outline" style={{margin:"10px"}}>{item.icon2}</button>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItem;
