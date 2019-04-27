import React from 'react';
import './trip-list.scss';

const tripList = (props) => {
  return (
    <div className="tripList">
      {props.dataFromDb.map((trip) =>
        <a href="#" key={trip.city}>{trip.city}, {trip.country}</a>
      )}
    </div>
  );
}

export default tripList;
