import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './trip-details-page.scss';

import HomeButton from '../../components/home-button/home-button.js';

import config from '../../config/config.json';

class tripDetails extends Component {
  state = {
    country: '',
    city: ''
  }

  componentDidMount() {
    fetch(`${config.backend_url}/get-country-city-by-id/`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify({
        id: parseInt(this.props.match.params.id)
      })
    })
    .then(response => response.json())
    .then(data => this.setState({ country: data.country, city: data.city }))
  }

  redirectHome = () => {
    this.props.history.push('/');
  }

  deleteTrip = () => {
    return fetch(`${config.backend_url}/delete-trip/`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'DELETE',
      body: JSON.stringify({
        tripId: parseInt(this.props.match.params.id)
      })
    })
  }

  imageClickHandler = () => {
    if (window.confirm('Are you sure you want to delete this trip?')){
      this.deleteTrip()
      .then(()=> this.redirectHome());
    }
  }
  render() {
    return (
      <div className="component-wrapper">
        <HomeButton className="home-button"/>
        <div className="trip-details">
          <div className="header-wrapper">
            <h1>{this.state.city}, {this.state.country}</h1>
            <img
              className="img-delete"
              alt="delete"
              src="https://img.icons8.com/small/16/000000/trash.png"
              onClick={this.imageClickHandler}
            />
          </div>
          <div className="details-wrapper">
            <div className="box-wrapper section-1">
              <Link
                className="things-to-do box"
                to={`/things-to-do/${this.props.match.params.id}/`}>
                Things to do
              </Link>
              <Link
                className="beaches box"
                to={`/beaches/${this.props.match.params.id}/`}>
                Beaches
              </Link>
            </div>
            <div className="box-wrapper section-2">
              <Link
                className="food-drink box"
                to={`/food-drink/${this.props.match.params.id}/`}>
                Food & Drink
              </Link>
              <Link
                className="accommodation box"
                to={`/accommodation/${this.props.match.params.id}/`}>
                Accommodation
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default tripDetails;
