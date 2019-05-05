import React, { Component } from 'react';
import './new-trip-page.scss';

import TripForm from '../../components/trip-form/trip-form.js';
import HomeButton from '../../components/home-button/home-button.js';

class newTrip extends Component {
  render() {
    return (
      <div className="trip-wrapper">
        <HomeButton />
        <TripForm history={this.props.history} />
      </div>
    );
  }
}

export default newTrip;
