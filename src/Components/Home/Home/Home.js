import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import Portfolio from '../../Portfolios/Portfolio';
import Resume from '../../Resume/Resume';
import ResumeMore from '../../ResumeMore/ResumeMore';
import Header from '../Header/Header/Header';
import Email from '../../Email/Email';
import './Home.css'
import Blog from '../../Blog/Blog';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
    return (
        <div>
           <div data-aos="fade-up" data-aos-duration="500">
               
            <Header/>
           </div>
           <div data-aos="fade-up" data-aos-duration="1000"> 
              <AboutMe/>
              </div>
              <div data-aos="fade-up" data-aos-duration="1500">
                  <Resume/>
              </div>
              <div data-aos="fade-up" data-aos-duration="1700">
                  <ResumeMore/>
              </div>
              <div data-aos="fade-up" data-aos-duration="1700">
                  <Portfolio/>
              </div>
              <div data-aos="fade-up" data-aos-duration="1700">
                  <Blog/>
              </div>
              <div data-aos="fade-up" data-aos-duration="1700">
                  <Email/>
              </div>


        </div>
    );
};

export default Home;