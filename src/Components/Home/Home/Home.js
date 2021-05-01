import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import Header from '../Header/Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
           <div>
               
            <Header/>
           </div>
           <div> 
              <AboutMe/>
              </div>

        </div>
    );
};

export default Home;