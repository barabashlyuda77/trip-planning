import React from 'react';
import { Link } from "react-router-dom";

import './back.scss';

const back = () =>{
  return (
    <div className="back-wrapper">
      <Link to="/trip-details/:id/">
        <img
          alt="back button"
          src="https://img.icons8.com/windows/96/000000/back.png"
        />
        <p>Back</p>
      </Link>
    </div>
  );
}

export default back;
