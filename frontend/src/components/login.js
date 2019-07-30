import React, { Component } from 'react';
import '../App.css';
import AuthService from '../services/auth-service';

class Login extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user: {}
    };
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    const newState = Object.assign({}, this.state);
    newState.user[name] = value;

    this.setState(newState);
  }

  onSubmit() {
    return fetch('http://localhost/api/users/sign_in.json', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      mode: "cors",
      body: JSON.stringify({
        'user': {
          'email': this.state.user.email,
          'password': this.state.user.password
        }
      })
    })
      .then(response => {
       if (!response.ok) {
          console.log(response.json());
        }
        return response.json();
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h2>Login</h2>

        <p>
          <b>Email:</b>
          <input name="email" required onChange={this.handleInputChange} />
        </p>
        <p>
          <b>Password:</b>
          <input name="password" type="password" required onChange={this.handleInputChange} />
        </p>

        <p>
        <button onClick={() => this.onSubmit()}>Login</button>
        </p>
      </div>
    );
  }
}
export default Login;
