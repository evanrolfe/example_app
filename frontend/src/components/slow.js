import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import SettingsService from '../services/settings-service';

class Slow extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.settingsService = new SettingsService();

    this.settingsService.getSlowRequest(this.props.sleepFor).then(response => {
      this.setState({message: response.message});
    }
  );
  }

  render() {
    return (
      <div className="App">
          <h1>A page that queries a very slow request</h1>

          <p>The request should take {this.props.sleepFor} seconds to complete. Have fun waiting!</p>

          <p>{this.state.message && this.state.message}</p>
      </div>

    );
  }
}
export default Slow;
