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
            <Link to="/posts" id="posts_link">Posts</Link>
          </li>
          <li>
            <Link to="/secrets/">Secrets</Link>
          </li>
          {
            !this.props.auth.isAuthenticated() && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )
          }
          {
            this.props.auth.isAuthenticated() && (
              <li>
                <a href="#" onClick={this.props.auth.logout} id="logout-link">Log Out</a>
              </li>
            )
          }
        </ul>
      </nav>
    );
  }
}
export default Nav;
