import React, { Component } from 'react';
import './new-trip.scss';

import TripForm from '../trip-form/trip-form.js';
import HomeButton from '../home-button/home-button.js';

class newTrip extends Component {
  render() {
    return (
      <div className="trip-wrapper">
        <HomeButton />
        <TripForm />
      </div>
    );
  }
}

export default newTrip;
