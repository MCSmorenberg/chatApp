import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import BeerModel from '../models/BeerModel';
import BeerForm from './BeerForm';
import BeerList from './BeerList';

class BeerChannel extends React.Component {

  constructor() {
    super();

    this.beers = new BeerModel();
  }

  render() {
        return (
            <div className="generals-app">
              <BeerForm model={this.beers} />
              <BeerList model={this.beers} />
            </div>
        );
    }
}

export default BeerChannel;
