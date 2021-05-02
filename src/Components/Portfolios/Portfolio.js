import React, { useState } from 'react';
 import portfolio from '../allProject/allProject.js';
import MenuItem from '../MenuItem.js/MenuItem.js';
import './Portfolio.css'

const Portfolio = () => {
    const [menuItem,setMenuItem] = useState(portfolio);
    return (
        <div class="portfolio-background">
            <div className="container">
           <h1 className="text-center" style={{marginTop:"100px",marginBottom:"50px"}}>Some Of My Work</h1>
           <MenuItem menuItem={menuItem}/> 
        </div>
        </div>
    );
};

export default Portfolio;