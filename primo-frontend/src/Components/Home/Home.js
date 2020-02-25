import React from "react";
import "./Home.css";

function Home() {


  return (
    <div className="homeBody">
      <div className="homeBodySub">
        <h1>White Space and anything extra</h1>
      </div>
      <div className="gameCarousel">
        {/* for loop with a .map function for game data */}
        <h1>Carousel</h1>
      </div>
      <div className="homeBlogPosts">
        {/* for loop with a .map function for blog data */}
        <h1>Blog</h1>
      </div>
    </div>
  );
}

export default Home;
