import React, { Component } from 'react';
import './trip-list.scss';

class tripList extends Component {
  state = {
    listOfTrips: []
  }

  componentDidMount() {
    fetch('http://localhost:8000/get-country-city/', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => this.setState({ listOfTrips: data}))
  }

  render() {
    return (
      <div className="tripList">
        {this.state.listOfTrips.map((trip) =>
          <a href="#" key={trip.city}>{trip.city}, {trip.country}</a>
        )}
      </div>
    );
  }
}

export default tripList;
