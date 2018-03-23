

import React from 'react';
import ReactDom from 'react-dom';
import PictureBookCore from './core/PictureBookCore';

import About from './about/About';

import { BrowserRouter, Route } from 'react-router-dom';

//eslint-disable-next-line
const getConfirmation = () => {
   window.confirm('Are you sure?')
};

ReactDom.render((
    <BrowserRouter basename=''>{/*   /ergret/demo  */}
      <div>
        <Route exact path="/" component={PictureBookCore} />
        <Route path="/about" component={About}/>
      </div>
    </BrowserRouter>
    ),document.getElementById('root')
);

