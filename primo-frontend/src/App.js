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
        <h1>We exist because Gamefaqs sucks!</h1>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
