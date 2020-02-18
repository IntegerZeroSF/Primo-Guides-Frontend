import React from 'react';
import './Header.css'

import * as Ons from 'react-onsenui'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import {Page, Toolbar, Button, ToolbarButton} from 'react-onsenui';

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
}

export default Header;