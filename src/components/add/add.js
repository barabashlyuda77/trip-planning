import React, { Component } from 'react';
import './add.scss';

class add extends Component {
  render() {
    return (
      <div className="wrapper">
        <img
          src="https://img.icons8.com/material/24/000000/plus-math.png"
          className="plus"
        />
        <p>add new trip</p>
      </div>
    );
  }
}

export default add;
