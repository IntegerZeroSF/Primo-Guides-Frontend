# Primo-Guides-Frontend
Mockups: https://xd.adobe.com/view/16576ce4-127c-49e1-6485-436cca097d07-6066/

Are you stuck in a game? Gotta look something up but don't want to watch a 20minute let's play with some rando on youtube? Tired of slogging through IGN's hard to navigate guide pages? Well don't you worry! Our users will create guides and be able to publish them and have them categorized for how you want to complete your game!


## Models
- User
  -name
  -pw
- Favorites
- Game
  - Title
  - Publisher
  - Guides (arr)
  - Genre
- Guide
  - Title
  - Publisher
  - Author
  - Game
  - Skill Level
  - Tags
  - Content


## React

https://reactjs.org/

The primary framework behind our front-end.

## Color theme

https://colorhunt.co/palette/172306

 #381460
 #b21f66
 #fe346e
 #ffbd69

## Onsen UI

https://onsen.io/

You import componenets like you would react-bootstrap. A few key differences however.

### Import this!

import * as Ons from 'react-onsenui';

As well as this!

### Webpack CSS import

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

You need both for elements to show properly.