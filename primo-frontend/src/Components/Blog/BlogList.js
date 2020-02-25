import React from "react";
import "./BlogList.css";

import {Link} from "react-router-dom";

function BlogList() {
    return (
        <>
            <div className="blogListBody">
                <div className="blogListSubTitle">
                    <h1> Blog Posts</h1>
                </div>

                <div className="blogListBodySub">
                {/* For loop to load blog posts. Each will have a card. */}
                    <div className="blogListBlogCard">
                        <Link to="/Blog/Post" className="blogListBlogTitle">Blog Title</Link>
                        <p className="blogListBlogDescrip">
                            Put something relevant here
                        </p>
                    </div>
                    <div className="blogListBlogCard">
                        <h1 className="blogListBlogTitle">Blog Title</h1>
                        <p className="blogListBlogDescrip">
                            Put something relevant here
                        </p>
                    </div>
                    <div className="blogListBlogCard">
                        <h1 className="blogListBlogTitle">Blog Title</h1>
                        <p className="blogListBlogDescrip">
                            Put something relevant here
                        </p>
                    </div>
                    <div className="blogListBlogCard">
                        <h1 className="blogListBlogTitle">Blog Title</h1>
                        <p className="blogListBlogDescrip">
                            Put something relevant here
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BlogList;
