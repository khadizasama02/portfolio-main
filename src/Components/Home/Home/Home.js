import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import Portfolio from '../../Portfolios/Portfolio';
import Resume from '../../Resume/Resume';
import ResumeMore from '../../ResumeMore/ResumeMore';
import Header from '../Header/Header/Header';
import Email from '../../Email/Email';
import './Home.css'
import Blog from '../../Blog/Blog';

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
              <div>
                  <Blog/>
              </div>
              <div>
                  <Email/>
              </div>


        </div>
    );
};

export default Home;