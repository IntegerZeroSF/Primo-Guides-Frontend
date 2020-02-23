import React from 'react';
import './Home.css'

import { useState, useEffect} from 'react';


function Home() {

    let [gameData, setGameData] = useState()
    let [blogData, setBlogData] = useState()
    let [isLogined, setLogin] = useState(false)
    let [user, setUser] = useState()

    useEffect(() => {
        fetch("www.ourAPIkek.lul/Games")
        .then(res => res.json())
        .then(gameRes => seGameData(gameRes.results))
    }, []);

    useEffect(() => {
        fetch("www.ourAPIkek.lul/blogs")
        .then(res => res.json())
        .then(blogRes => setBlogData(blogRes.results))
    }, []);

    return (
        <div className="homeBody">
            <div className="homeBodySub">
                <h1>White Space and enything extra</h1>
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
    )
}




export default Home;