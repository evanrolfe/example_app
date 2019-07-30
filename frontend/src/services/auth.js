import history from '../services/history';

export default class Auth {
  constructor() {
    this.login = this.login.bind(this);
    this._loginRequest = this._loginRequest.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.currentUser = null;
  }

  async login(email, password) {
    const user = await this._loginRequest(email, password)
    localStorage.setItem('currentUser', user);
    console.log(`Logged in as: ${user.email}`)

    // TODO: Why does this redirect not work?
    history.push('/');
  }

  async _loginRequest(email, password) {
    return fetch('http://localhost/api/users/sign_in.json', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      mode: "cors",
      body: JSON.stringify({
        'user': {
          'email': email,
          'password': password
        }
      })
    })
      .then(response => {
       if (!response.ok) {
          console.log(response.json());
        }
        return response.json();
      })
      .catch(error => {
        alert(error);
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    history.replace('/');
  }

  isAuthenticated() {
    const currentUser = localStorage.getItem('currentUser');
    return (currentUser !== null);
  }

  currentUser() {
    return localStorage.getItem('currentUser');
  }
}
