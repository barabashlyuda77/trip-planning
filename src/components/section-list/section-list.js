import React, {Component} from 'react';
import './section-list.scss';

import getConfig from '../../helpers/config.js';

class sectionList extends Component {
  state = {
    readMoreState: {}
  }

  headnlerReadMore = (key) => {
    const newState = this.state;
    newState.readMoreState[key] = 'open';
    this.setState(newState);
  }

  headnlerReadLess = (key) => {
    const newState = this.state;
    newState.readMoreState[key] = 'close';
    this.setState(newState);
  }

  showAllItem = (item) => {
    return <div className="item-wrapper" key={item.name}>
      <div className="text-wrapper">
        <h4>{item.name}</h4>
        <p>{item.details}</p>
      </div>
      <img
        className="img-delete"
        alt="delete"
        src="https://img.icons8.com/small/32/000000/delete-sign.png"
      />
    </div>
  }

  getDetails = (item) => {
    const { name, details} = item;

    const maxLengthOfText = 87;

    if (details.length < maxLengthOfText) {
      return details;
    }

    const detailsPart1 = details.substring(0, maxLengthOfText);
    const detailsPart2 = details.substring(maxLengthOfText);

    return <>
        <span className="details-part1">{detailsPart1}</span>
        {
          this.state.readMoreState[name] === 'open'
          ? <span>
              <span className="details-part2">{detailsPart2} </span>
              <span className="read-less" onClick={() => this.headnlerReadLess(name)}>
                read less
              </span>
            </span>
          : <span>
              <span className="dots">... </span>
              <span className="read-more" onClick={() => this.headnlerReadMore(name)}>
                read more
              </span>
            </span>
        }
    </>
  }

  deteteFromDb = (id) => {
    return fetch(`${getConfig().backend_url}/delete-item`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'DELETE',
      body: JSON.stringify({
        id,
        tableName: this.props.tableName
      })
    })
    .then(response => response.json());
  }

  clickHandler = (id) => {
    this.deteteFromDb(id)
    .then((data)=> this.props.updateListOfItems(data))
  }

  render() {
    return (
      <div className="section-list-wrapper">
        {this.props.listOfItems.length === 0
          ? null
          : this.props.listOfItems.map((item) => {
            return <div className="item-wrapper" key={item.name}>
              <div className="text-wrapper">
                <h4>{item.name}</h4>
                <p>{this.getDetails(item)}</p>
              </div>
              <img
                className="img-delete"
                alt="delete"
                src="https://img.icons8.com/small/32/000000/delete-sign.png"
                onClick={() => this.clickHandler(item.id)}
              />
            </div>
        })}
      </div>
    );
  }
}

export default sectionList;
