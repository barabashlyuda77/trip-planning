import React from 'react';
import { Link } from "react-router-dom";

import './add.scss';

const add = () => {
  return (
    <div className="wrapper">
      <Link to="/new-trip/">
        <img
          className="plus"
          alt="add trip"
          src="https://img.icons8.com/material/24/000000/plus-math.png"
        />
        <p className="add-button-text">add new trip</p>
      </Link>
    </div>
  );
}

export default add;
