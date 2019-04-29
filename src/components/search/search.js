import React, { Component } from 'react';
import './search.scss';

class search extends Component {
  handleInputChange = event => {
    const query = event.target.value.toLowerCase();
    if (!query) {
      this.props.updateData(this.props.dataFromDb);
      return;
    }

    const filteredData = this.props.dataFromDb.filter((trip) => {
      const city = trip.city.toLowerCase();
      const country = trip.country.toLowerCase();
      return country.includes(query) || city.includes(query);
    });

    this.props.updateData(filteredData);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Where do you go?"
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default search;
