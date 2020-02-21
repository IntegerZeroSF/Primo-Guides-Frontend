import React from 'react';


import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Components/Home/Home.js';

import GamesList from './Components/Games/GamesList.js'

function App() {
  return (
    <div className="App">
      <Header/>
        {/* <Home /> */}
      <GamesList/>
      <Footer/>
    </div>
  );
}

export default App;
