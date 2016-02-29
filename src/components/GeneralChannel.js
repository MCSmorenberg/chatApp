import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import GeneralModel from '../models/GeneralModel';
import GeneralForm from './GeneralForm';
import GeneralList from './GeneralList';

class GeneralChannel extends React.Component {

  constructor() {
    super();

    this.generals = new GeneralModel();
  }

  render() {
        return (
            <div className="generals-app">
              <GeneralForm model={this.generals} />
              <GeneralList model={this.generals} />
            </div>
        );
    }
}

export default GeneralChannel;
