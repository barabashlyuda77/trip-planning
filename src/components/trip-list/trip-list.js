import React from 'react';
import { Link } from "react-router-dom";

import './trip-list.scss';

const tripList = (props) => {
  return (
    <div className="tripList">
      {props.dataFromDb.map((trip) =>
        {
          return <Link to={`/trip-details/${trip.id}/`} key={trip.city}>
            {trip.city},{trip.country}
          </Link>
        }
      )}
    </div>
  );
}

export default tripList;
