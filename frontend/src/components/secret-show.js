import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import SecretService from '../services/secret-service';

class SecretShow extends Component {
  constructor(props) {
    super(props);
    this.secretService = new SecretService();
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

    if(secretId == 'new') {
      return;
    }

    this.secretService.getSecret(secretId, this.props.auth.getAccessToken()).then(secret => {
        this.setState({
          secret: secret
        });
      }
    );
  }

  onDelete() {
    const secret = this.state.secret;
    if(window.confirm("Are you sure to delete secret: " + secret.title + " ?")) {
      const secretId = this.props.match.params.id;

      this.secretService.deleteSecret(secretId, this.props.auth.getAccessToken()).then(secret => {
          this.props.history.push('/secrets');
        }
      );
    }
  }

  render() {
    const secret = this.state.secret;
    if(!secret) return null;

    return (
      <div className="App">
        <h2>Viewing Secret</h2>

        <p>
          <b>Name:</b> {secret.name}
        </p>
        <p>
          <b>Value:</b> {secret.value}
        </p>
        <p>
          <b>User:</b> {secret.user_id}
        </p>

        <p>
          <Link to="/secrets">Back</Link> ||
          <Link to={"/secrets/" + secret.id + "/edit"}>Edit</Link> ||
          <a href="#" onClick={() => this.onDelete()}>Delete</a>
        </p>
      </div>
    );
  }
}
export default SecretShow;
