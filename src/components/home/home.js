import React, { Component } from 'react';
import './home.scss';

import Search from '../search/search.js';
import Add from '../add/add.js';
import ListWrapper from '../list-wrapper/list-wrapper.js';

class home extends Component {
  render() {
    return (
      <div className="home">
        <Search />
        <Add />
        <ListWrapper />
      </div>
    );
  }
}

export default home;
