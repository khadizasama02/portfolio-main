import React from 'react';
import InfoData from '../InfoData/InfoData';


const resumeData = [{
    icon:"/publicImage/responsive-symbol-with-a-widescreen-monitor-a-cellphone-and-a-tablet.png",
    title:"Responsive Layout",
    description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small"
},
{
    icon:"/publicImage/code.png",
    title:"Code Customization",
    description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small"
},
{
    icon:"/publicImage/programming-language.png",
    title:"Standard Coding",
    description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small"
}
]

const ResumeMore = () => {
    return (
        <div >
           <div className="container">
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