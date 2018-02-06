import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Main from './view/Main';
import Splash from './view/Splash';

const routes = (
  <Router >
    <div>
      <Route exact path="/" component={Splash} />
      <Route path="/main" component={Main} />
    </div>

  </Router>
);

export default routes;