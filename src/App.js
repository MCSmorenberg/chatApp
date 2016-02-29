import React from 'react';
import { Link } from 'react-router';
import Home from './components/Home';
import GeneralChannel from './components/GeneralChannel';
import StudyChannel from './components/StudyChannel';
import BeerChannel from './components/BeerChannel';

class App extends React.Component {
  render() {
        return (
          <div className="container">
        <nav className="main">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/generalchannel">General</Link></li>
            <li><Link to="/studychannel">Studies</Link></li>
            <li><Link to="/beerchannel">Beers</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
        );
    }
}

export default App;
