import Config from '../config/config';

class SecretService {
  constructor() {
    this.config = new Config();
  }

  async retrieveSecrets(accessToken) {
    let url = "http://localhost/api/secrets.json";
    let headers = {};
    if(accessToken !== undefined) {
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

  async getSecret(secretId, accessToken) {
    let url = "http://localhost/api/secrets/" + secretId + ".json";
    let headers = {};
    if(accessToken !== undefined) {
      headers['Authorization'] = accessToken;
    }

    return fetch(url, {headers: headers})
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .then(secret => {
          return secret;
        }
      )
      .catch(error => {
        this.handleError(error);
      });
  }

  async createSecret(secret, accessToken) {
    let url = "http://localhost/api/secrets.json";
    let headers = {"Content-Type": "application/json"};
    if(accessToken !== undefined) {
      headers['Authorization'] = accessToken;
    }

    return fetch(url, {
      method: "POST",
      mode: "cors",
      headers: headers,
      body: JSON.stringify(secret)
    })
      .then(response => {
       if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async deleteSecret(secretId, accessToken) {
    let url = "http://localhost/api/secrets/" + secretId + ".json";
    let headers = {};
    if(accessToken !== undefined) {
      headers['Authorization'] = accessToken;
    }

    return fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: headers
    })
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async updateSecret(secret, accessToken) {
    let url = "http://localhost/api/secrets/" + secret.id + ".json";
    let headers = {"Content-Type": "application/json"};
    if(accessToken !== undefined) {
      headers['Authorization'] = accessToken;
    }

    return fetch(url, {
      method: "PATCH",
      mode: "cors",
      headers: headers,
      body: JSON.stringify(secret)
    })
      .then(response => {
       if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
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
export default SecretService;
