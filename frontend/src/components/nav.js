import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/secrets/">Secrets</Link>
          </li>
          {
            !this.props.auth.isAuthenticated() && (
              <li>
                <a href="#" onClick={this.props.auth.login}>Log In</a>
              </li>
            )
          }
          {
            this.props.auth.isAuthenticated() && (
              <li>
                <a href="#" onClick={this.props.auth.logout}>Log Out</a>
              </li>
            )
          }
        </ul>
      </nav>
    );
  }
}
export default Nav;
