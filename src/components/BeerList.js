import React from 'react';

class BeerList extends React.Component {
  constructor() {
    super();

    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    this.beers = this.props.model;
    this.beers.subscribe(this.updateList.bind(this));
  }

  updateList() {
    this.setState({
      beers: this.beers.resources
    });
  }

  render() {
    console.log(this.state.beers);
    return (
      <div className="well">
        <ul>
          {this.state.beers.map((beer) => {
            return (<li key={beer._id}>{beer.title}</li>);
          })}
        </ul>
      </div>
    );
  }
}

export default BeerList;
