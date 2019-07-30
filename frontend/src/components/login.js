import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
  constructor(props) {
    super(props);

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
    this.props.auth.login(this.state.user.email, this.state.user.password)
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
