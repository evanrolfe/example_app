import React from 'react';
import '../App.css';
import SettingsService from '../services/settings-service';
import { Link } from "react-router-dom";

class MoreSettings extends React.Component {
  constructor(props) {
    super(props);
    this.settingsService = new SettingsService();
    this.state = { moreSettings: null };
  }

  componentDidMount() {
    this.getSettings();
  }

  getSettings() {
    this.settingsService.getSettings('two').then(settings => {
        this.setState({moreSettings: settings});
      }
    );
  }

  render() {
    return (
      <div>
        <p>Hello World here are the settings two:</p>

        <p>{this.state.moreSettings && this.state.moreSettings.hello}</p>

        <p>Don't forget to read our <Link to="/about">about us</Link> page!</p>
      </div>
    );
  }
}
export default MoreSettings;
