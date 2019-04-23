import React, { Component } from 'react';
import './trip-form.scss';

const regex = /^[a-zA-Z][a-zA-Z ]*[a-zA-Z]$/;

class tripForm extends Component {
  state = {
    country: '',
    city: '',
    countryError: '',
    cityError: ''
  };

  handlerChangeCountry = (event) => {
    this.setState({ country: event.target.value})
  }

  handlerChangeCity = (event) => {
    this.setState({ city: event.target.value})
  }

  validateCountry = () => {
    const { country } = this.state;
    const isInputValid = regex.test(country);

    this.setState({
      countryError:
      isInputValid ? null : 'Country name is not valid'
    });

    return isInputValid;
  }

  validateCity = () => {
    const { city } = this.state;
    const isInputValid = regex.test(city);

    this.setState({
      cityError:
      isInputValid ? null : 'City name is not valid'
    });

    return isInputValid;
  }

  redirectHome = () => {
    this.props.history.push('/');
  }

  doesCityExist = (city) => {
    return fetch('http://localhost:8000/is-city-exist/', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify({
        city
      })
    });
  }

  addDataToDb = ({ city, country }) => {
    return fetch('http://localhost:8000/add-data-to-db/', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify({
        country,
        city
      })
    });
  }

  handledAdd = () => {
    const isCountryValid = this.validateCountry();
    const isCityValid = this.validateCity();

    if (isCountryValid && isCityValid) {
      this.doesCityExist(this.state.city)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          return Promise.reject('City name is already exist.');
        }
      })
      .catch((err) => {
        this.setState({
          cityError: err
        });
        return Promise.reject(err);
      })
      .then(() => this.addDataToDb(this.state))
      .then(() => this.redirectHome())
      .catch((err) => {})
    }
  }

  render() {
    return (
      <div className="wrapper-box">
        <h2>Trip Details</h2>
        <form>
          <label>Destination Country</label>
          <input
            type="text"
            placeholder="Italy"
            value={this.state.country}
            onChange={this.handlerChangeCountry}
            className={`form-control ${this.state.countryError ? 'is-invalid' : ''}`}
          />
          <div className='invalid-feedback'>{this.state.countryError}</div>
          <label>Destination City</label>
          <input
            type="text"
            placeholder="Rome"
            value={this.state.city}
            onChange={this.handlerChangeCity}
            className={`form-control ${this.state.cityError ? 'is-invalid' : ''}`}
          />
          <div className='invalid-feedback'>{this.state.cityError}</div>
          <div>
            <input
              onClick={this.redirectHome}
              className="cancel-button"
              type="button"
              value="Cancel"
            />
            <input
              onClick={this.handledAdd}
              className="submit-button"
              type="button"
              value="Add Trip"
            />
          </div>
        </form>
    </div>
    );
  }
}

export default tripForm;
