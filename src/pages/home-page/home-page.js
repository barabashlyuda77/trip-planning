import React, { Component } from 'react';
import './home-page.scss';

import Search from '../../components/search/search.js';
import Add from '../../components/add/add.js';
import ListWrapper from '../../components/list-wrapper/list-wrapper.js';

class home extends Component {
  state = {
    listOfTrips: [],
    dataFromDb: []
  }

  componentDidMount() {
    fetch('http://localhost:8000/get-country-city/', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => this.setState({ listOfTrips: data, dataFromDb: data }))
  }

  updateListOfTrips = (data) => {
    this.setState({ listOfTrips: data })
  }

  render() {
    return (
      <div className="home">
        <Search
          dataFromDb={this.state.dataFromDb}
          updateData={this.updateListOfTrips}
        />
        <Add />
        <ListWrapper listOfTrips={this.state.listOfTrips}/>
      </div>
    );
  }
}

export default home;