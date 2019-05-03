import React, {Component} from 'react';
import './section-list.scss';

const listOfItems = [{
  name: 'Big Budda',
  details: 'Open every day. Open every day.'
}]

class sectionList extends Component {
  render() {
    return (
      <div className="section-list-wrapper">
        <div className="item-wrapper">
          <div className="text-wrapper">
            <h4>Big Budda</h4>
            <p>Open every day. Open every day.Open every day.Open every day.Open every day.Open every day.Open every day.Open every day.Open every day.Open every day.Open every day.Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. Open every day.Open every day. </p>
          </div>
          <img
            className="img-delete"
            alt="delete"
            src="https://img.icons8.com/small/32/000000/delete-sign.png"
          />
        </div>
        <div className="item-wrapper">
          <div className="text-wrapper">
            <h4>Big Budda</h4>
            <p>Nice place</p>
          </div>
          <img
            className="img-delete"
            alt="delete"
            src="https://img.icons8.com/small/32/000000/delete-sign.png"
          />
        </div>
      </div>
    );
  }
}

export default sectionList;
