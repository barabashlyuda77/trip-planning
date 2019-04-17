import React, { Component } from 'react';
import './trip-form.scss';

class tripForm extends Component {
  state = {
    country: '',
    city: ''
  };

  handlerChangeCountry = (event) => {
    this.setState({ country: event.target.value})
  }

  handlerChangeCity = (event) => {
    this.setState({ city: event.target.value})
  }

  redirectHome = () => {
    this.props.history.push('/');
  }

  inputClickHandler = () => {
    fetch('http://localhost:8000/add-data-to-db/', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify({
        country: this.state.country,
        city: this.state.city
      })
    });
  }

  render() {
    return (
      <div className="wrapper-box">
        <h2>Trip Details</h2>
        <form>
          <label>Destination Country</label>
          <input
             required="required"
            type="text"
            placeholder="Italy"
            value={this.state.country}
            onChange={this.handlerChangeCountry}
          />
          <label>Destination City</label>
          <input
            required={true}
            type="text"
            placeholder="Rome"
            value={this.state.city}
            onChange={this.handlerChangeCity}
          />
          <div>
            <input
              onClick={this.redirectHome}
              className="cancel-button"
              type="button"
              value="Cancel"
            />
            <input
              onClick={this.inputClickHandler}
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
