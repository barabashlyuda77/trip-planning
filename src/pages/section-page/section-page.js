import React, {Component} from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import './section-page.scss';
import regex from '../../helpers/regex-input.js';

import Back from '../../components/back/back.js';
import SectionList from '../../components/section-list/section-list.js';

const db = [];
console.log(db);

class tripDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.notificationDOMRef = React.createRef();
  }

  state = {
    name: '',
    details: '',
    inputNameError: '',
    inputDetailsError: ''
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
      isInputValid ? null : 'Input is not valid'
    });

    return isInputValid;
  }

  validateDetailsInput = () => {
    const { details } = this.state;
    const isInputValid = regex.test(details);

    this.setState({
      inputDetailsError:
      isInputValid ? null : 'Input is not valid'
    });

    return isInputValid;
  }

  addDataToDb = ({ name, details }) => {
    db.push({ name, details })
  }

  handledAdd = () => {
    const isNameInputValid = this.validateNameInput(this.state.name)
    const isDetailsInputValid = this.validateDetailsInput(this.state.details);

    if (!(isNameInputValid && isDetailsInputValid)) {
      console.log('error');
      return
    }
    this.addDataToDb(this.state)
    this.addNotification()
  }

  render() {
    return (
      <div className="component-wrapper">
        <Back goBack={this.props.history.goBack} />
        <div className="section-wrapper">
          <h1>Things to do</h1>
          <div className="form-wrapper">
            <form>
              <div className="input-wrapper">
                <input
                  className={`name input-info ${this.state.inputNameError ? 'is-invalid' : ''}`}
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handerChangeName}
                />
                <div className='invalid-feedback'>{this.state.inputNameError}</div>
              </div>
              <div className="input-wrapper">
                <input
                  className={`details input-info ${this.state.inputDetailsError ? 'is-invalid' : ''}`}
                  type="text"
                  placeholder="Details..."
                  value={this.state.details}
                  onChange={this.handerChangeDetails}
                />
                <div className='invalid-feedback'>{this.state.inputDetailsError}</div>
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
          <SectionList />
        </div>
      </div>
    );
  }
}

export default tripDetails;
