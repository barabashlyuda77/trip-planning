import React from 'react';
import './list-wrapper.scss';

import NothingFound from '../nothing-found/nothing-found.js';
import TripList from '../trip-list/trip-list.js';

const listWrapper = (props) => {
  const listOfTrips = props.listOfTrips;

  return (
    <div className="list-wrapper">
      {
        listOfTrips.length === 0 
        ? <NothingFound />
        : <TripList dataFromDb={listOfTrips}/>
      }
    </div>
  );
}

export default listWrapper;
