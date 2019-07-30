export default class AuthService {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    return true;
  }

  logout() {
    return true;
  }

  isAuthenticated() {
    return true;
  }
}
