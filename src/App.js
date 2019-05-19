import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.scss';

import HomePage from './pages/home-page/home-page.js';
import NewTripPage from './pages/new-trip-page/new-trip-page.js';
import TripDetailsPage from './pages/trip-details-page/trip-details-page.js';
import SectionPage from './pages/section-page/section-page.js';
import EditTripPage from './pages/edit-trip-page/edit-trip-page.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/new-trip/" component={NewTripPage} />
          <Route path="/trip-details/:id/" component={TripDetailsPage} />
          <Route path="/things-to-do/:id/"
                 render={(props) => <SectionPage type="things_to_do" {...props} />}
          />
          <Route path="/food-drink/:id/"
                 render={(props) => <SectionPage type="food_drink" {...props} />}
          />
          <Route path="/beaches/:id/"
                 render={(props) => <SectionPage type="beaches" {...props} />}
          />
          <Route path="/accommodation/:id/"
                 render={(props) => <SectionPage type="accommodation" {...props} />}
          />
          <Route path="/edit-trip-details/:id/" component={EditTripPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
