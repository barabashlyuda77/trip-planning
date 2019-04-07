import React, { Component } from 'react';
import './home.scss';

import Search from '../search/search.js';
import Add from '../add/add.js';

class home extends Component {
  render() {
    return (
      <div className="home">
        <Search />
        <Add />
        <p>Wrapper for the list ot nothing found components</p>
      </div>
    );
  }
}

export default home;
