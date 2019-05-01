import React, {Component} from 'react';
import './trip-details.scss';

import HomeButton from '../home-button/home-button.js';

class tripDetails extends Component {
  render() {
    return (
      <div className="component-wrapper">
        <HomeButton className="home-button"/>
        <div className="trip-details">
          <div className="header-wrapper">
            <h1>Rome, Italy</h1>
            <img
              className="img-edit"
              alt="edit"
              src="https://img.icons8.com/small/16/000000/edit.png"
            />
          </div>
          <div className="details-wrapper">
            <div className="box-wrapper section-1">
              <div className="things-to-do box">Things to do</div>
              <div className="beaches box">Beaches</div>
            </div>
            <div className="box-wrapper section-2">
              <div className="food-drink box">Food & Drink</div>
              <div className="accommodation box">Accommodation</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default tripDetails;
