import React from "react";
import Link from "next/link";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Home from "./Components/Home/Home.js";
import BlogList from "./Components/Blog/BlogList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GamesList from "./Components/Games/GamesList.js";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header" />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Blog" exact component={BlogList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
