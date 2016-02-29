import React from 'react';

class BeerForm extends React.Component {
  componentDidMount() {
    this.beers = this.props.model;
  }

  createBeer(event) {
    event.preventDefault();
    console.log("Create Beer Called!");
    let newTitle = this.refs.newTitle.value;
    this.beers.addResource({
      title: newTitle
    });
    this.refs.newTitle.value = "";
  }

  render() {
    return(
      <div>
        <form onSubmit={this.createBeer.bind(this)}>
          <input type="text" ref="newTitle" placeholder="New message"></input>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default BeerForm;
