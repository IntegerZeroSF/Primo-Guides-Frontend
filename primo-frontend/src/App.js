import React from 'react';


import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Home from './Home/Home.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <Home />
      </header>
      <Footer/>
    </div>
  );
}

export default App;
