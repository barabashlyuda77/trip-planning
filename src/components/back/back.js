import React from 'react';

import './back.scss';

const back = (props) =>{
  return (
    <div className="back-wrapper">
      <a href="#" onClick={props.goBack}>
        <img
          alt="back button"
          src="https://img.icons8.com/windows/96/000000/back.png"
        />
        <p>Back</p>
      </a>
    </div>
  );
}

export default back;
