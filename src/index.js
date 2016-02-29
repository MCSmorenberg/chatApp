import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import Home from './components/Home';
import GeneralChannel from './components/GeneralChannel';
import StudyChannel from './components/StudyChannel';
import BeerChannel from './components/BeerChannel';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/generalchannel" component={GeneralChannel} />
      <Route path="/studychannel" component={StudyChannel} />
      <Route path="/beerchannel" component={BeerChannel} />
    </Route>
  </Router>
), document.getElementById('root'));
