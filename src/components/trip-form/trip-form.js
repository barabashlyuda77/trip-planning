import React, { Component } from 'react';
import './trip-form.scss';

class tripForm extends Component {

  redirectHome = () => {
    this.props.history.push('/');
  }

  inputClickHandler = () => {
    fetch('/add-data-to-db/', {
      method: 'POST',
      body: JSON.stringify({
        country: 'Italy',
        city: 'Rome',
      })
    })
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))
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
              type="submit"
              value="Add Trip"
            />
          </div>
        </form>
    </div>
    );
  }
}

export default tripForm;
