import React from 'react';
import BlogData from '../BlogData/BlogData';

const blogData = [{
    icon:"/publicImage/portfolio.jfif",
    title:"8 Free Portfolio Websites for Creatives",
    description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small"
},
{
    icon:"/publicImage/ux.jfif",
    title:"6 Amazing UX Design Examples from Across the Internet",
    description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small"
},
{
    icon:"/publicImage/seo2c.jfif",
    title:"6 SEO Examples to Imitate on Your Business Website",
    description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small"
}
]

const Blog = () => {
    return (
        <div id="blog">
           <div className="container font-style">
               <h5 className="text-center" style={{marginTop:"50px"}}>You Can Read</h5>
               <h1 className="text-center">Latest News & Blog</h1>
           <div class="row" style={{marginTop:"50px"}}>
            {
                blogData.map(blog =><BlogData blog={blog}/>)
            }
            </div>
           </div> 
        </div>
    );
};

export default Blog;