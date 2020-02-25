import React from "react";
import "./Header.css";
import {Switch} from "react-router-dom";

// import { Page, Toolbar, Button, ToolbarButton } from "react-onsenui";

function Header() {
  return (
    <>
      <Switch>
        <div className="headerDiv">
          <h1 className="headerTitle">
            <strong>
              <a className="headerLink" href="/">Primo Guides</a>
            </strong>
          </h1>
          <div className="headerButtonDiv">
            <span className="headerButton">
              <a className="headerLink" href="/Blog">Blog</a>
            </span>
            <span className="headerButton">
              <a className="headerLink" href="/Games">Guides</a>
            </span>
            <span className="headerButton">
              <a className="headerLink" href="/Login">Login</a>
            </span>
          </div>
          <span className="headerSignUp">
            Not a user yet? <a className="headerLink" href="/Signup">Sign up here!</a>
          </span>
        </div>
      </Switch>
    </>
  );
}

export default Header;
