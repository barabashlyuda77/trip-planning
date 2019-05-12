import React, {Component} from 'react';
import './section-list.scss';

class sectionList extends Component {
  state = {
    readMoreState: {},
    listOfItems: []
  }

  componentDidMount() {
    const tableType = this.props.tableName.split('_').join('-');

    fetch(
      `http://localhost:8000/get-${tableType}-name-details/${this.props.tripId}/`,
      {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'GET'
      })
    .then(response => response.json())
    .then(data => {
      let newStateReadMore = {};
      if (Object.keys(data).length > 0) {
        data.forEach((key) => {
          newStateReadMore[key.name] = 'close';
        });
      }

      this.setState({ listOfItems: data, readMoreState: newStateReadMore })})
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

  render() {
    return (
      <div className="section-list-wrapper">
        {this.state.listOfItems.length === 0
          ? null
          : this.state.listOfItems.map((item) => {
            const maxLengthOfText = 87;

            if (item.details.length < maxLengthOfText) {
              return <div className="item-wrapper" key={item.name}>
                <div className="text-wrapper">
                  <h4>{item.name}</h4>
                  <p>{item.name}</p>
                </div>
                <img
                  className="img-delete"
                  alt="delete"
                  src="https://img.icons8.com/small/32/000000/delete-sign.png"
                />
              </div>
            }

            const detailsPart1 = item.details.substring(0, maxLengthOfText);
            const detailsPart2 = item.details.substring(maxLengthOfText);

            return <div className="item-wrapper" key={item.name}>
              <div className="text-wrapper">
                <h4>{item.name}</h4>
                <p>
                  <span className="details-part1">{detailsPart1}</span>
                  {
                    this.state.readMoreState[item.name] === 'open'
                    ? null
                    : <span>
                        <span className="dots">... </span>
                        <span className="read-more" onClick={() => this.headnlerReadMore(item.name)}>
                          read more
                        </span>
                      </span>
                  }
                  {
                    this.state.readMoreState[item.name] === 'close'
                    ? null
                    : <span>
                        <span className="details-part2">{detailsPart2} </span>
                        <span className="read-less" onClick={() => this.headnlerReadLess(item.name)}>
                          read less
                        </span>
                      </span>
                }

              </p>
            </div>
            <img
              className="img-delete"
              alt="delete"
              src="https://img.icons8.com/small/32/000000/delete-sign.png"
            />
          </div>
        })}
      </div>
    );
  }
}

export default sectionList;
