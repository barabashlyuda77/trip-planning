import React, { Component } from 'react';
import './home.scss';

import Search from '../search/search.js';

class home extends Component {
  render() {
    return (
      <div className="home">
        <Search />
        <p>Add new trip component</p>
        <p>Wrapper for the list ot nothing found components</p>
      </div>
    );
  }
}

export default home;
