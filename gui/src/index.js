import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Abort from './Abort';
import Logo  from './Logo';

import Images  from './Images';
import Gmail from './Gmail';
import About from './About';
import Settings  from './Settings';

import Privacy  from './Privacy';
import Terms from './Terms';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Gmail />
    <Images />
    <Logo />
    <Abort />
    <About />
    <Settings />
    <Privacy />
    <Terms/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
