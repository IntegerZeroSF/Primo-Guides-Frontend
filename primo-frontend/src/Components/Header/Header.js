import React from "react";
import "./Header.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

<<<<<<< HEAD

function Header(){
    return(
        <> 
            <div className="headerDiv">
                <h1 className="headerTitle"><strong>Primo Guides</strong></h1>
                <div className="headerButtonDiv">
                    <span className="headerButton">
                        Blog
                    </span>
                    <span className="headerButton">
                        Guides
                    </span>                
                    <span className="headerButton">
                        Login
                    </span>
                </div>
                    <span className="headerSignUp">
                        Not a user yet? Sign up here!
                    </span>
            </div>
        </>
    )
=======
import { Page, Toolbar, Button, ToolbarButton } from "react-onsenui";

function Header() {
  return (
    <>
      <Switch>
        <div className="headerDiv">
          <h1 className="headerTitle">
            <strong>
              <a href="/">Primo Guides</a>
            </strong>
          </h1>
          <div className="headerButtonDiv">
            <span className="headerButton">
              <a href="/Blog">Blog</a>
            </span>
            <span className="headerButton">
              <a href="/Guides">Guides</a>
            </span>
            <span className="headerButton">
              <a href="/Login">Login</a>
            </span>
          </div>
          <span className="headerSignUp">
            Not a user yet? <a href="/Signup">Sign up here!</a>
          </span>
        </div>
      </Switch>
    </>
  );
>>>>>>> routes
}

export default Header;
