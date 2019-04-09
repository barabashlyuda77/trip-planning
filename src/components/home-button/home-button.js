import React, { Component } from 'react';
import './home-button.scss';

class homeButton extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <img src="https://img.icons8.com/material/24/000000/home-page.png" />
        <p>Trip planing</p>
      </div>
    );
  }
}

export default homeButton;
