import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import SecretService from '../services/secret-service';

class SecretEdit extends Component {
  constructor(props) {
    super(props);
    this.secretService = new SecretService();
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      secret: null,
    }
  }

  componentDidMount() {
    this.getSecret();
  }

  componentDidUpdate(previousProps) {
    if (this.props.match.params.id !== previousProps.match.params.id) {
      this.getSecret();
    }
  }

  getSecret() {
    const secretId = this.props.match.params.id;

    this.secretService.getSecret(secretId).then(secret => {
        this.setState({ secret: secret });
      }
    );
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    const newState = Object.assign({}, this.state);
    newState.secret[name] = value;

    this.setState(newState);
  }

  onSubmit() {
    this.secretService.updateSecret(this.state.secret).then(secret => {
        this.props.history.push('/secrets/' + this.state.secret.id);
      }
    );
  }

  render() {
    const secret = this.state.secret;
    if(!secret) return null;

    return (
      <div className="App">
        <h1>Edit Secret</h1>

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
          <Link to={"/secrets/" + secret.id}>Back</Link>
        </p>
      </div>
    );
  }
}
export default SecretEdit;
