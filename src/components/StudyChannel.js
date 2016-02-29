import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import StudyModel from '../models/StudyModel';
import StudyForm from './StudyForm';
import StudyList from './StudyList';

class StudyChannel extends React.Component {

  constructor() {
    super();

    this.studies = new StudyModel();
  }

  render() {
    console.log("this.studies");
    console.log(this.studies);
    return (
      <div className="generals-app">
        <StudyForm model={this.studies} />
        <StudyList model={this.studies} />
      </div>
    );
  }
}

export default StudyChannel;
