import React from 'react';
import './BlogList.css';

function BlogList() {
    return (
        <>
            <div className="blogListBody">
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
                <div className="blogListBlogCard">
                    <h1 className="blogListBlogTitle">Blog Title</h1>
                    <p className="blogListBlogDescrip">
                        Put something relevant here
                    </p>
                </div>
            </div>
        </>
    )
}

export default BlogList;