import React from 'react';
import InfoData from '../InfoData/InfoData';


const resumeData = [{
    icon:"/publicImage/responsive-symbol-with-a-widescreen-monitor-a-cellphone-and-a-tablet.png",
    title:"Responsive Layout",
    description:"Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation"
},
{
    icon:"/publicImage/code.png",
    title:"Code Customization",
    description:"The Customization Code is a unique key provided by the customer. It makes every installation of the software unique and prevents a rogue user from taking control of the workstations running Deep Freeze using their own copy of administrative tools"
},
{
    icon:"/publicImage/programming-language.png",
    title:"Standard Coding",
    description:"A coding standard gives a uniform appearance to the codes written by different engineers. It improves readability, and maintainability of the code and it reduces complexity also"
}
]

const ResumeMore = () => {
    return (
        <div >
           <div className="container font-style">
               <h4 className="text-center" style={{marginTop:"50px"}}>Know More</h4>
           <div class="row" style={{marginTop:"50px"}}>
            {
                resumeData.map(info =><InfoData info={info}></InfoData>)
            }
            </div>
           </div>
            
        </div>
    );
};

export default ResumeMore;