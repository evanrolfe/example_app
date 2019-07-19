import React from 'react';
import '../App.css';
import SettingsService from '../services/settings-service';
import MoreSettings from "./more-settings";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.settingsService = new SettingsService();
    this.state = { settings: null, showMoreSettings: false };

    this.toggleMoreSetting = this.toggleMoreSetting.bind(this);
  }

  toggleMoreSetting() {
    this.setState({showMoreSettings: !this.state.showMoreSettings})
  }

  componentDidMount() {
    this.getSettings();
  }

  getSettings() {
    const accessToken = this.props.auth.getAccessToken();

    this.settingsService.getSettings('one', accessToken).then(settings => {
        this.setState({settings: settings});
      }
    );
  }

  render() {
    return (
      <div>
        <p>Hello World here are the settings one:</p>

        <p>{this.state.settings && this.state.settings.hello}</p>

        <p>
          Would you like to see more settings? <button onClick={this.toggleMoreSetting}>Yes, Show me!</button>
        </p>

        { this.state.showMoreSettings && <MoreSettings auth={this.props.auth} /> }
      </div>
    );
  }
}
export default Settings;
