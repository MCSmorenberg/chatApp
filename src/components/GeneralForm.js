import React from 'react';

class GeneralForm extends React.Component {
  componentDidMount() {
    this.generals = this.props.model;

  }

  createGeneral(event) {
    event.preventDefault();
    console.log("Create general called");
    let newTitle = this.refs.newTitle.value;
    this.generals.addResource({
      title: newTitle
    });
    this.refs.newTitle.value = ""
  }

  render() {
    return (
        <div>
          <form onSubmit={this.createGeneral.bind(this)}>
            <div>
              <input type='text' className="form-control" ref="newTitle" />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      );
  }
}

export default GeneralForm;
