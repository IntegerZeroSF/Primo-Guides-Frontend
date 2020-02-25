import React from "react";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Home from "./Components/Home/Home.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";

import BlogList from "./Components/Blog/BlogList";
import BlogDetails from "./Components/Blog/BlogDetails/BlogDetails.js"

import GamesList from "./Components/Games/GamesList.js";
import GamesGuidesList from "./Components/Games/GameGuidesList/GameGuidesList.js";
import GameGuideDetails from "./Components/Games/GameGuidesList/GameGuideDetails/GameGuideDetails.js";


import { useState, useEffect } from "react";


function App() {

  let [gameData, setGameData] = useState();
  let [blogData, setBlogData] = useState();
  let [isLogined, setLogin] = useState(false);
  let [user, setUser] = useState();

  // useEffect(() => {
  //   fetch("localhost:8000/games")
  //     .then(res => res.json())
  //     .then(gameRes => setGameData(gameRes.results));
  // }, []);

  // useEffect(() => {
  //   fetch("www.ourAPIkek.lul/blogs")
  //     .then(res => res.json())
  //     .then(blogRes => setBlogData(blogRes.results));
  // }, []);

  console.log(gameData)

  return (
    <div className="App">
      <Helmet>
        <title>Primo-Guides</title>
      </Helmet>
      <Header />
      <header className="App-header" />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Blog" exact component={BlogList} />
        <Route path="/Blog/Post" exact component={BlogDetails} />
        <Route path="/Games" exact component={GamesList} />
        <Route path="/Games/Guides" exact component={GamesGuidesList} />
        <Route path="/Games/Guides/Guide" exact component={GameGuideDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
