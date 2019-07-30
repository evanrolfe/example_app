import auth0 from 'auth0-js';
import history from '../services/history';

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    domain: 'onescan.eu.auth0.com',
    clientID: 'GU0FMwPO5dgiQSHl76J47l3IqB7LoJYL',
    redirectUri: 'http://localhost:3000/auth_callback',
    responseType: 'token id_token',
    scope: 'openid profile',
    audience: 'https://onescan.eu.auth0.com/api/v2/'
  });

  login() {
    this.auth0.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.loadSession = this.loadSession.bind(this);
    //this.renewSession = this.renewSession.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        console.log(authResult);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        console.log("handleAuthentication()")
        document.cookie = `expiresIn=${authResult.expiresIn};`;
        document.cookie = `accessToken=${authResult.accessToken};`;
        document.cookie = `idToken=${authResult.idToken};`;

        this.setSession(authResult);
        resolve();
      });
    })
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  loadSession() {
    const expiresIn = this.getCookie('expiresIn');
    const accessToken = this.getCookie('accessToken');
    const idToken = this.getCookie('idToken');

    if(expiresIn !== undefined && expiresIn !== '') {
      const authResult = {expiresIn: expiresIn, accessToken: accessToken, idToken: idToken};
      this.setSession(authResult);
    }
  }

  getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
  }
/*
  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.setSession(authResult);
       } else if (err) {
         this.logout();
         console.log(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }
*/
  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Delete all cookies for this domain
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

    this.auth0.logout({
      returnTo: 'http://localhost/api'
    });

    // navigate to the home route
    history.replace('/posts');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}
