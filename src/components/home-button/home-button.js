import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './home-button.scss';

class homeButton extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <Link to="/">
          <img src="https://img.icons8.com/material/24/000000/home-page.png" />
          <p>Trip planing</p>
        </Link>
      </div>
    );
  }
}

export default homeButton;
