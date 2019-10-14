import React, {Component} from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import './section-page.scss';
import regex from '../../helpers/regex-input.js';

import Back from '../../components/back/back.js';
import SectionList from '../../components/section-list/section-list.js';

import getConfig from '../../helpers/config.js';

class tripDetails extends Component {
  constructor(props) {
    super(props);
    this.notificationDOMRef = React.createRef();
  }

  state = {
    name: '',
    details: '',
    inputNameError: '',
    inputDetailsError: '',
    listOfItems: []
  }

  componentDidMount() {
    fetch(
        `${getConfig().backend_url}/get-name-details/${this.props.type}/${this.props.match.params.id}/`,
      {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'GET'
      })
    .then(response => response.json())
    .then(data => this.setState({ listOfItems: data }))
  }

  addNotification = () => {
    this.notificationDOMRef.current.addNotification({
      message: "Added to the list",
      type: "added",
      insert: "top",
      container: "top-right",
      dismiss: { duration: 2000 },
    });
  }

  handerChangeName = (event) => {
    this.setState({ name: event.target.value})
  }

  handerChangeDetails = (event) => {
    this.setState({ details: event.target.value})
  }

  validateNameInput = () => {
    const { name } = this.state;
    const isInputValid = regex.test(name);

    this.setState({
      inputNameError:
      isInputValid ? null : 'Name is not valid'
    });

    return isInputValid;
  }

  validateDetailsInput = () => {
    const { details } = this.state;
    const isInputValid = /^\S.*$/.test(details);

    this.setState({
      inputDetailsError:
      isInputValid ? null : 'Details field cannot be empty'
    });

    return isInputValid;
  }

  addDataToDb = ({ name, details }) => {
    return fetch(`${getConfig().backend_url}/add-section-details-to-db/`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify({
        name,
        details,
        id: this.props.match.params.id,
        type: this.props.type
      })
    })
    .then(response => response.json())
    .then(data => this.setState({ listOfItems: data }))
  }

  handledAdd = () => {
    const isNameInputValid = this.validateNameInput(this.state.name)
    const isDetailsInputValid = this.validateDetailsInput(this.state.details);

    if (!(isNameInputValid && isDetailsInputValid)) {
      console.log('error');
      return
    }

    this.addDataToDb(this.state);
    this.addNotification();
    this.setState({
      name: '',
      details: '',
      inputNameError: '',
      inputDetailsError: ''
    });
  }

  getSectionTitle = (name) => {
    const sectionTitles = {
      things_to_do: 'Things to do',
      food_drink: 'Food & Drink',
      beaches: 'Beaches',
      accommodation: 'Accommodation'
    };
    return sectionTitles[name];
  }

  updateListOfItems = (data) => this.setState({ listOfItems: data });

  render() {
    return (
      <div className="component-wrapper">
        <Back goBack={this.props.history.goBack} />
        <div className="section-wrapper">
          <h1>{this.getSectionTitle(this.props.type)}</h1>
          <div className="form-wrapper">
            <form>
              <div className="input-wrapper">
                <div className='invalid-feedback'>
                  {this.state.inputNameError}
                </div>
                <input
                  className={`name input-info ${this.state.inputNameError ? 'is-invalid' : ''}`}
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handerChangeName}
                />
              </div>
              <div className="input-wrapper">
                <div className='invalid-feedback'>
                  {this.state.inputDetailsError}
                </div>
                <input
                  className={`details input-info ${this.state.inputDetailsError ? 'is-invalid' : ''}`}
                  type="text"
                  placeholder="Details..."
                  value={this.state.details}
                  onChange={this.handerChangeDetails}
                />
              </div>
              <ReactNotification
                types={[{
                  htmlClasses: ["notification-added"],
                  name: "added"
                }]}
                ref={this.notificationDOMRef} />
              <input
                className="add-button"
                type="button"
                value="add"
                onClick={this.handledAdd}
              />
            </form>
          </div>
          <SectionList
            listOfItems={this.state.listOfItems}
            updateListOfItems={this.updateListOfItems}
            tableName={this.props.type}
          />
        </div>
      </div>
    );
  }
}

export default tripDetails;
