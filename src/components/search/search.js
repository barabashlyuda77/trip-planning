import React, { Component } from 'react';
import './search.scss';

class search extends Component {
  state = {
    query: ''
  }

  handleInputChange = event => {
    this.setState({
      query: this.search.value // Where come from?
    });
  }


  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Where do you go?"
          value={this.state.query}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default search;
