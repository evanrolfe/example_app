import Config from '../config/config';

class SecretService {
  constructor() {
    this.config = new Config();
  }

  async retrieveSecrets() {
    return fetch("http://localhost:3001/secrets.json")
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then(json => {
        console.log("Retrieved secrets:");
        console.log(json);
        return json;
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async getSecret(secretId) {
    console.log("SecretService.getSecret():");
    console.log("Secret: " + secretId);
    return fetch("http://localhost:3001/secrets/" + secretId + ".json")
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

  async createSecret(secret) {
    console.log("SecretService.createSecret():");
    console.log(secret);
    const url = "http://localhost:3001/secrets.json"

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

  async deleteSecret(secretId) {
    console.log("SecretService.deleteSecret():");
    console.log("secret ID:" + secretId);

    const url = "http://localhost:3001/secrets/" + secretId + ".json"

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

  async updateSecret(secret) {
    console.log("SecretService.updateSecret():");
    console.log(secret);

    const url = "http://localhost:3001/secrets/" + secret.id + ".json"

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
    console.log(error.message);
  }
}
export default SecretService;
