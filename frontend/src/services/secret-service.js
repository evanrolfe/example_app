import Config from '../config/config';

class SecretService {
  constructor() {
    this.config = new Config();
  }

  async retrieveSecrets(accessToken) {
    let url = "http://localhost:3001/secrets.json";
    if(accessToken != undefined) {
      url += '?access_token=' + accessToken;
    }

    return fetch(url)
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
    let url = "http://localhost:3001/secrets/" + secretId + ".json"
    if(accessToken != undefined) {
      url += '?access_token=' + accessToken;
    }

    return fetch(url)
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
    let url = "http://localhost:3001/secrets.json"
    if(accessToken != undefined) {
      url += '?access_token=' + accessToken;
    }

    return fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
            "Content-Type": "application/json"
        },
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
    let url = "http://localhost:3001/secrets/" + secretId + ".json"
    if(accessToken != undefined) {
      url += '?access_token=' + accessToken;
    }

    return fetch(url, {
      method: "DELETE",
      mode: "cors"
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
    let url = "http://localhost:3001/secrets/" + secret.id + ".json"
    if(accessToken != undefined) {
      url += '?access_token=' + accessToken;
    }

    return fetch(url, {
      method: "PATCH",
      mode: "cors",
      headers: {
            "Content-Type": "application/json"
        },
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
