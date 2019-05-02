import React, {Component} from 'react';
import './trip-details.scss';

import HomeButton from '../home-button/home-button.js';

class tripDetails extends Component {
  state = {
    country: '',
    city: ''
  }
  componentDidMount() {
    fetch('http://localhost:8000/get-country-city-by-id/', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify({
        id: parseInt(this.props.match.params.id)
      })
    })
    .then(response => response.json())
    .then(data => this.setState({ country: data.country, city: data.city }))
  }
  render() {
    return (
      <div className="component-wrapper">
        <HomeButton className="home-button"/>
        <div className="trip-details">
          <div className="header-wrapper">
            <h1>{this.state.city}, {this.state.country}</h1>
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
