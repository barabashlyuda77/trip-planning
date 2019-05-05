import React, {Component} from 'react';
import './section-list.scss';

const listOfItems = [
  {
    name: 'Big Budda',
    details: 'Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day.'
  },
  {
    name: 'Big Budda2',
    details: 'Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day. Open every day.'
  }
]

class sectionList extends Component {
  constructor(props) {
    super(props);
    const readMoreState = {};
    listOfItems.forEach((key) => {
      readMoreState[key.name] = 'close';
    });
    this.state = {
      readMoreState
    }
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
        {listOfItems.map((item) => {
          const maxLengthOfText = 80;
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
                      <span className="details-part2">{detailsPart2}</span>
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
