import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './add.scss';

class add extends Component {
  render() {
    return (
      <div className="wrapper">
        <Link to="/new-trip/">
          <img
            alt="add trip"
            src="https://img.icons8.com/material/24/000000/plus-math.png"
            className="plus"
          />
          <p>add new trip</p>
        </Link>
      </div>
    );
  }
}

export default add;
