import React, { useState } from 'react';
 import portfolio from '../allProject/allProject.js';
import MenuItem from '../MenuItem.js/MenuItem.js';
import './Portfolio.css'

const Portfolio = () => {
    const [menuItem,setMenuItem] = useState(portfolio);
    return (
        <div class="portfolio-background" id="portfolio">
            <div className="container">
           <div class="pt-3">
               <h3 className="text-center" >All Of My Composition</h3>
               <h1 className="text-center" style={{marginBottom:"50px"}}>Let's See My Work</h1>
               </div>
           <MenuItem menuItem={menuItem}/> 
        </div>
        </div>
    );
};

export default Portfolio;