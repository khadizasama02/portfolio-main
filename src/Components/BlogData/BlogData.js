import React from 'react';

const BlogData = ({blog}) => {
    return (
        <div class="col-md-4">
        <div class="card mb-5 box">
          <img src={blog.icon} class="card-img-top " style={{width:"200px",marginLeft:"auto",marginRight:"auto"}} alt="..." />
          <div class="card-body text-center">
              <h3 class="card-title">{blog.title}</h3>
            <p class="card-text">
             {blog.description}
            </p>
          </div>
        </div>
      </div>
    );
};

export default BlogData;