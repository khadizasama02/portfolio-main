import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import Portfolio from '../../Portfolios/Portfolio';
import Resume from '../../Resume/Resume';
import ResumeMore from '../../ResumeMore/ResumeMore';
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
              <div>
                  <Resume/>
              </div>
              <div>
                  <ResumeMore/>
              </div>
              <div>
                  <Portfolio/>
              </div>

        </div>
    );
};

export default Home;