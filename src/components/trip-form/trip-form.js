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

  handledAdd = () => {
    const isCountryValid = this.validateCountry();
    const isCityValid = this.validateCity();

    if (isCountryValid && isCityValid) {
      fetch('http://localhost:8000/add-data-to-db/', {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify({
          country: this.state.country,
          city: this.state.city
        })
      });
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
