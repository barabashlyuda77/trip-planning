import React from 'react';
import { Link } from "react-router-dom";

import './home-button.scss';

const homeButton = () =>{
  return (
    <div className="home-wrapper">
      <Link to="/">
        <img
          alt="home button"
          src="https://img.icons8.com/material/24/000000/home-page.png"
        />
        <p>Trip planing</p>
      </Link>
    </div>
  );
}

export default homeButton;
