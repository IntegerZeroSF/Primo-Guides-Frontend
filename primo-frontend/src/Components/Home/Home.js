import React from 'react';
import './Home.css'

import * as Ons from 'react-onsenui'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import {Page, Button} from 'react-onsenui';


function Home() {
    return (
        <div className="homeBody">
            <div className="homeBodySub">
                <h1>White Space and enything extra</h1>
            </div>
            <div className="gameCarousel">
                <h1>Carousel</h1>
            </div>
            <div className="homeBlogPosts">
                <h1>Blog</h1>
            </div>
        </div>
    )
}




export default Home;