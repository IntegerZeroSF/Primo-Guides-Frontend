import React from 'react';

import * as Ons from 'react-onsenui';
import {Page, Button} from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

function Footer(){
    return(
        <>
            <Ons.Button>Hit me!</Ons.Button>
            <footer>But like no really, this footer is proof...</footer>
        </>
    )
}

export default Footer;