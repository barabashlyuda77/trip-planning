import React, {Component} from 'react';
import './section.scss';

import Back from '../back/back.js';

class tripDetails extends Component {
  render() {
    return (
      <div className="component-wrapper">
        <Back />
        <div className="section-wrapper">
          <h1>Things to do</h1>
          <div className="form-wrapper">
            <form>
              <input
                className="name input-info"
                type="text"
                placeholder="Name"
              />
              <input
                className="details input-info"
                type="text"
                placeholder="Details..."
              />
              <input
                className="add-button"
                type="button"
                value="add"
              />
            </form>
          </div>
          <div className="items-wrapper"> List</div>
        </div>
      </div>
    );
  }
}

export default tripDetails;
