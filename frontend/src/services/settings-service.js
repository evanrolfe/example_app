import Config from '../config/config';

class SettingsService {
  async getSettings(page) {
    let url = `http://localhost/api/settings/${page}.json`;
    let headers = {};

    return fetch(url, {headers: headers})
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then(json => {
        return json;
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async getSlowRequest(sleepFor) {
    let url = `http://localhost/api/slow_request.json?sleep_for=${sleepFor}`;
    let headers = {};

    return fetch(url, {headers: headers})
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then(json => {
        return json;
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  handleResponseError(response) {
      throw new Error("HTTP error, status = " + response.status);
  }

  handleError(error) {
    alert(error.message);
  }
}
export default SettingsService;
