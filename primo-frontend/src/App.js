import React from 'react';


import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Components/Home/Home.js';

import GamesList from './Components/Games/GamesList.js'
import GameGuidesList from './Components/Games/GameGuidesList/GameGuidesList.js'
import GameGuideDetails from './Components/Games/GameGuidesList/GameGuideDetails/GameGuideDetails.js'

import BlogList from './Components/Blog/BlogList.js'
import BlogDetails from './Components/Blog/BlogDetails/BlogDetails.js'

function App() {
  return (
    <div className="App">
      <Header/>
        {/* <Home /> */}
      {/* <GamesList/> */}
      <GameGuidesList/>
      <Footer/>
    </div>
  );
}

export default App;
