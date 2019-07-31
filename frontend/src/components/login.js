import React, { Component } from 'react';
import '../App.css';
import Alert from 'react-bootstrap/Alert';
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {user: {}, incorrectLogin: false};
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    const newState = Object.assign({}, this.state);
    newState.user[name] = value;

    this.setState(newState);
  }

  async onSubmit() {
    const response = await this.props.auth.login(this.state.user.email, this.state.user.password);

    if(response.error != undefined) {
      this.setState({user: {}, incorrectLogin: true});
    } else {
      const newState = Object.assign({}, this.state);
      newState.user = { name: response.name };
      this.setState(newState);
      this.props.history.push(`/secrets`);
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Login</h2>

        {this.state.incorrectLogin && <Alert variant="danger">Incorrect login.</Alert>}

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
