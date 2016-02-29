import React from 'react';

class StudyForm extends React.Component {
  componentDidMount() {
    this.studies = this.props.model;
  }

  createStudy(event) {
    event.preventDefault();
    console.log("Create Study Called!");
    let newTitle = this.refs.newTitle.value;
    this.studies.addResource({
      title: newTitle
    });
    this.refs.newTitle.value = "";
  }

  render() {
    return(
      <div>
        <form onSubmit={this.createStudy.bind(this)}>
          <input type="text" ref="newTitle" placeholder="New message"></input>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default StudyForm;
