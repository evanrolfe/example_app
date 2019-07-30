import Config from '../config/config';

class SettingsService {
  async getSettings(page, accessToken) {
    let url = `http://localhost/api/settings/${page}.json`;
    let headers = {};
    if(accessToken !== undefined && accessToken !== null) {
      headers['Authorization'] = accessToken;
    }

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
