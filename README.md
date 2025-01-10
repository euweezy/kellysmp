# Kelly SPM Site

**this is basically a "document" for my own website so I actually understand what's going on and how it functions so I don't forget** *(because I always do)*

access it with these terminal commands:
---
```
1. 
~ master*
> cd kelly-smp-site

2.
~/kelly-smp-site main*
> code .
```

## Okay,,, so here it goes...

### 1. IMPORTS
```
import { useState, useEffect } from 'react';

import Announcement from './Announcement';

import PlayerList from './PlayerList';

import LocationsList from './Locations'

import { Tab, TabPanel } from './Tabs'

import discordLogo from '../icons/discord-logo-white.svg'

import SubmitForm from './SubmitForm';

import CustomButton from './CustomButton';

import { HiMenu } from 'react-icons/hi';
```

Think of imports like gathering your tools before starting a project. The code is bringing in different pieces it needs to work:

- `useState` and `useEffect` are React tools:
    - `useState` is like a memory system that helps the website remember things and update when those things change
    - `useEffect` is like setting up automatic actions that happen when the website loads or when certain things change
- The other imports are custom-made pieces (components) that will be used to build different parts of the website

hence we use useEffect:
```
function App() {

useEffect(() => {

document.body.style.backgroundColor = "#111827";

});
```

at the very beginning, meaning this backgroundColor gets applied immediately (basically so we still have a color to cover the overflow of the webpage (when you scroll too much and go past the page))

### 2. DATA STORAGE
```
const [announcements] = useState([
  {
    id: 1,
    title: "Welcome to Kelly SMP!",
    content: "Server rules: No griefing, be respectful, have fun!",
    date: "Dec 30, 2024",
  },
  // ...
]);
```

This is the method of data storage we're working with. We are initializing **arrays** of **objects**, each with their own properties such as `id`, `title`, `content`, and `date`

### so... why did we use a useState?
we used a `useState` rather unconventionally because we PLAN on updating the announcements array in the future, rather than just it being a plain object array.

### 3. INTERACTIVE FUNCTIONS
```
const [showForm, setShowForm] = useState(false);
const handleForm = () => {
  setShowForm((prev) => !prev);
};
```

Remember how useState is a memory system that updates the site and help it remember things? 

a typical useState hook would be: `const [state, setState] = useState(initialValue);` 

let's break this down one by one:

The **flexibility** of this hook comes from the:
- `initialValue` this could be a string, a boolean, an **object** (as we did with our data storage system), array, number, and even `null`.
- How we **update** the state with the `setState` function. In the example above it was `setShowForm`, set as a boolean value.

***It's basically like setting up a light switch.***

`state` 
- is the actual state of the switch. (is it on or off?)
`setState` 
- is like the switch itself (the thing you use to change the state)
`useSatate(false);` 
- configures the **default state*** of our switch (to make sure its turned off first).

```
const handleForm = () => {
  setShowForm((prev) => !prev);
};
```

**This** is what handles the toggling of the function on or off. When the button with `handleForm` is clicked, it sets `setShowForm` to its *opposite* value. Remember, we set up the `initialValue` as a **boolean**, which means it can only be true or false.

This **all** goes to 

`{showForm && <SubmitForm />}`

Remember that **`setShowForm`** was initialized as a **function** to change the state of `showForm`.

when `setShowForm` is true, `showForm` becomes true as well, and shows 
`<SubmitForm />`.

### 4. USEFUL FUNCTIONS
```
const handleLink = () => {
  navigator.clipboard.writeText('kellyisthegreatest.apexmc.co');
  alert('Server IP copied to clipboard!');
}
```

These are functions that do basic stuff like copying the server IP for us, and `handleDiscord` for opening the discord server in another tab. They become the `onClick` of buttons so the user actually gets to use them.

## Now, for the frontend

This is where I get confused a lot with all the parents and structure of things so I'm DEFINITELY keeping note of this.

So far this is the structure of our frontend:
```
App (the big boss) 💪
│
├── Header (flexin at the top)
│   ├── Title + Welcome (got that purple swag)
│   ├── Those Buttons (discord + ip, lined up like its a fashion show)
│   └── Menu Button (sneaking in the corner like a ninja)
│
└── Tab System (switching views like a DJ switches tracks)
    ├── Announcements Tab (where the tea gets spilled)
    │   ├── That Add Button
    │   ├── Form (playing peek-a-boo with useState)
    │   └── Announcement Cards
    │
    └── Locations Tab (minecraft coords central)
```

our main `div` container is:
`<div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 relative">`

**EVERYTHING** is wrapped in a gradient container with the size `min-h-screen`, meaning that the minimum HEIGHT is the size of the screen, or `100vh` (viewport height) to make sure it ALWAYS covers the whole thing.

the main gradient of the container is in `bg-gradient-to-b from-gray-900 to-gray-800` which means that theres a gradient from top to bottom, transitioning from the colors `gray-900` to `gray-800`. 

It's `relative` to make sure the elements with the `absolute` trait are positioned relative to their parent elements.

