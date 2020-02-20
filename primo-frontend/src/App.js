import React from 'react';


import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Components/Home/Home.js';

import GamesList from './Components/Games/GamesList.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <Home />
      </header>
      <Footer/>
      <GamesList/>
    </div>
  );
}

export default App;
