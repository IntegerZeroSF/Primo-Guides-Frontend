import React from "react";
import "./Header.css";
import {Switch, Link} from "react-router-dom";

// import { Page, Toolbar, Button, ToolbarButton } from "react-onsenui";

function Header() {
  return (
    <>
      <Switch>
        <div className="headerDiv">
          <h1 className="headerTitle">
            <strong>
              <Link className="headerLink" to="/">Primo Guides</Link>
            </strong>
          </h1>
          <div className="headerButtonDiv">
            <span className="headerButton">
              <Link className="headerLink" to="/Blog">Blog</Link>
            </span>
            <span className="headerButton">
              <Link className="headerLink" to="/Games">Guides</Link>
            </span>
            <span className="headerButton">
              <Link className="headerLink" to="/Login">Login</Link>
            </span>
          </div>
          <span className="headerSignUp">
            Not a user yet? <Link className="headerLink" to="/Signup">Sign up here!</Link>
          </span>
        </div>
      </Switch>
    </>
  );
}

export default Header;
