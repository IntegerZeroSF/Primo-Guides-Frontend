import React from 'react';
import './BlogDetails.css';

function BlogDetails() {
    return (
        <>
            <div className="blogDetailsBody">
                <div className="blogDetailsBreadcrumbs">
                    <h4>Breadcrumbs...</h4>
                </div>
                <div className="blogDetailsTitle">
                    <h1>Blog Title</h1>
                </div>
                <div className="blogDetailsMain">
                    <p>
                        Hey, VSAUCE here! Did you know we make cool things!
                        <br/>
                        Find out more later. LEL
                    </p>
                    <div className="blogDetailsRelated">
                        <p>Related content...</p>
                    </div>
                </div>
                <div className="blogDetailsSub">
                    <h3>Picture/Extra</h3>
                </div>
            </div>
        </>
    )
}

export default BlogDetails;