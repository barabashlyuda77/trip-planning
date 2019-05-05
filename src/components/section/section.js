import React, {Component} from 'react';
import './section.scss';

import Back from '../back/back.js';
import SectionList from '../section-list/section-list.js';

class tripDetails extends Component {
  state = {
    name: '',
    details: ''
  }

  handerChangeName = (event) => {
    this.setState({ name: event.target.value})
  }

  handerChangeDetails = (event) => {
    this.setState({ details: event.target.value})
  }

  // addDataToDb = ({ name, details }) => {
  //   return fetch('http://localhost:8000/add-section-details-to-db/', {
  //     headers: { 'Content-Type': 'application/json; charset=utf-8' },
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name,
  //       details
  //     })
  //   });
  // }

  handledAdd = () => {
    // this.addDataToDb(this.state)
    console.log('add', this.state);
  }

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
                value={this.state.name}
                onChange={this.handerChangeName}
              />
              <input
                className="details input-info"
                type="text"
                placeholder="Details..."
                value={this.state.details}
                onChange={this.handerChangeDetails}
              />
              <input
                className="add-button"
                type="button"
                value="add"
                onClick={this.handledAdd}
              />
            </form>
          </div>
          <SectionList />
        </div>
      </div>
    );
  }
}

export default tripDetails;
