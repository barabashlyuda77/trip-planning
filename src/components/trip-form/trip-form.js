import React, { Component } from 'react';
import './trip-form.scss';

class tripForm extends Component {

  redirectHome = () => {
    this.props.history.push('/');
  }

  inputClickHandler = () => {
    fetch('http://localhost:8000/add-data-to-db/', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify({
        country: 'Italy',
        city: 'Rome'
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
            type="text"
            placeholder="Italy"
          />
          <label>Destination City</label>
          <input
            type="text"
            placeholder="Rome"
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
