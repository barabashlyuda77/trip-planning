import React, { Component } from 'react';
import './list-wrapper.scss';

// import NothingFound from '../nothing-found/nothing-found.js';
import TripList from '../trip-list/trip-list.js';

class listWrapper extends Component {
  render() {
    return (
      <div className="list-wrapper">
        {/* <NothingFound /> */}
        <TripList dataFromDb={this.props.dataFromDb}/>
      </div>
    );
  }
}

export default listWrapper;
