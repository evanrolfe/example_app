import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import SecretService from '../services/secret-service';

class SecretNew extends Component {
  constructor(props) {
    super(props);
    this.secretService = new SecretService();
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      secret: {
        name: '',
        value: '',
      },
    }
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    const newState = Object.assign({ [name]: value }, this.state);
    newState.secret[name] = value;

    this.setState(newState);
  }

  onSubmit() {
    this.secretService.createSecret(this.state.secret).then(secret => {
        this.props.history.push('/secrets/' + secret.id);
      }
    );
  }

  render() {
    const secret = this.state.secret;

    return (
      <div className="App">
        <h1>New Secret</h1>

        <p>
          <b>Name:</b>
          <input name="name" value={secret.name} maxLength="40" required onChange={this.handleInputChange} />
        </p>

        <p>
          <b>Value:</b>
          <textarea name="value" value={secret.value} onChange={this.handleInputChange}></textarea>
        </p>

        <p>
          <button onClick={() => this.onSubmit()}>Save</button>
          <br/>
        </p>

        <p>
          <Link to={"/secrets"}>Back</Link>
        </p>
      </div>
    );
  }
}
export default SecretNew;
