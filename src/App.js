import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.scss';

import Home from './components/home/home.js';
import NewTrip from './components/new-trip/new-trip.js';
import TripDetails from './components/trip-details/trip-details.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/new-trip/" component={NewTrip} />
          <Route path="/trip-details/" component={TripDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
