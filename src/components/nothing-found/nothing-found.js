import React, { Component } from 'react';
import './nothing-found.scss';

class nothingFound extends Component {
  render() {
    return (
      <div className="nothingFound">
        <h1>Nothing found</h1>
        <p>Sorry, but nothing planned for this destination</p>
        <img src="https://img.icons8.com/dotty/80/000000/nothing-found.png" />
      </div>
    );
  }
}

export default nothingFound;
