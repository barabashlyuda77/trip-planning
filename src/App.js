import React, { Component } from 'react';
import './App.scss';

import Home from './components/home/home.js';
import NewTrip from './components/new-trip/new-trip.js';

class App extends Component {
  render() {
    return (
      // <Home />
      <NewTrip />
    );
  }
}

export default App;
