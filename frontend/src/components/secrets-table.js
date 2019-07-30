import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import SecretService from '../services/secret-service';

class SecretsTable extends Component {
  constructor(props) {
    super(props);
    this.secretService = new SecretService();
    this.state = { secrets: null };
  }

  componentDidMount() {
      this.getSecrets();
  }

  getSecrets() {
    this.secretService.retrieveSecrets().then(secrets => {
        this.setState({secrets: secrets});
      }
    );
  }

  render() {
    const secrets = this.state.secrets;
    if(!secrets) return null;

    return (
      <div className="App">
          <h1>Secrets</h1>

          <p>
            <Link to="/secrets/new">New Secret</Link>
          </p>

          <table className="secrets">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>User</th>
              </tr>
            </thead>

            <tbody>
              {secrets.map((secret) =>
                <tr key={secret.id}>
                  <td>{secret.name}</td>
                  <td>{secret.value}</td>
                  <td>{secret.user_id}</td>
                  <td><Link to={"/secrets/" + secret.id}>Show</Link></td>
                </tr>
              )}
            </tbody>
          </table>

      </div>

    );
  }
}
export default SecretsTable;
