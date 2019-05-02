import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.scss';

import Home from './components/home/home.js';
import NewTrip from './components/new-trip/new-trip.js';
import TripDetails from './components/trip-details/trip-details.js';
import Section from './components/section/section.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/new-trip/" component={NewTrip} />
          <Route path="/trip-details/:id/" component={TripDetails} />
          <Route path="/section/" component={Section} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
