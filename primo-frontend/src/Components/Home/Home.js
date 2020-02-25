import React from "react";
import "./Home.css";

import {Link} from "react-router-dom";


function Home() {


  return (
    <div className="homeBody">
      <div className="homeBodySub">
        
      </div>
      <div className="gameCarousel">
        {/* for loop with a .map function for game data */}
        <h1>Carousel</h1>
      </div>
      <div className="homeBlogPostsDiv">
        <h1 className="homeBlogPostTitle">Recent Blog Posts</h1>
        {/* for loop with a .map function for blog data */}
        <div className="homeBlogPostCard">
          <Link to="/Blog/Post" className="homeBlogTitle">Blog Title</Link>
        </div>
        <div className="homeBlogPostCard">
          <Link to="/Blog/Post" className="homeBlogTitle">Blog Title</Link>
        </div>
        <div className="homeBlogPostCard">
          <Link to="/Blog/Post" className="homeBlogTitle">Blog Title</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
