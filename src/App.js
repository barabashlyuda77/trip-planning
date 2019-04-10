import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.scss';

import Home from './components/home/home.js';
import NewTrip from './components/new-trip/new-trip.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/new-trip/" component={NewTrip} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
