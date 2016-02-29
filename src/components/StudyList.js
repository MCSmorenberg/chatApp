import React from 'react';

class StudyList extends React.Component {
  constructor() {
    super();

    this.state = {
      studies: []
    };
  }

  componentDidMount() {
    this.studies = this.props.model;
    console.log(this.studies);
    this.studies.subscribe(this.updateList.bind(this));
  }

  updateList() {
    this.setState({
      studies: this.studies.resources
    });
  }

  render() {
    console.log(this.state.studies);
    return (
      <div className="well">
        <ul>
          {this.state.studies.map((study) => {
            return (<li key={study._id}>{study.title}</li>);
          })}
        </ul>
      </div>
    );
  }
}

export default StudyList;
