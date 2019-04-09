import React, { Component } from 'react';
import './trip-form.scss';

class tripForm extends Component {
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
              className="cancel-button"
              type="button"
              value="Cancel"
            />
            <input
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
