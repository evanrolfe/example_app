import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nav from './nav';
import PostsTable from "./posts-table";
import PostShow from "./post-show";
import PostEdit from "./post-edit";
import PostNew from "./post-new";
import SecretsTable from "./secrets-table";
import SecretShow from "./secret-show";
import SecretEdit from "./secret-edit";
import SecretNew from "./secret-new";
import Home from "./home";
import About from "./about";
import Login from "./login";
import Auth from '../services/auth';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

class AppRouter extends React.Component {
  render() {
    const auth = new Auth();

    return (
      <div>
        <Router>
        <header>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">React Example App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              {
                !auth.isAuthenticated() && (
                  <Navbar.Text>
                    <Link to="/login">Login</Link>
                  </Navbar.Text>
                )
              }
              {
                auth.isAuthenticated() && (
                  <Navbar.Text>
                    Signed in as: {auth.currentUser()} | <a href="#" onClick={auth.logout} id="logout-link">Log Out</a>
                  </Navbar.Text>
                )
              }
            </Navbar.Collapse>
          </Navbar>
        </header>

        <Container>

              <Route path="/" render={(props) => <Nav auth={auth} {...props} />} />
              <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
              <Route exact path="/about" render={(props) => <About auth={auth} {...props} />} />
              <Route exact path="/login" render={(props) => <Login auth={auth} {...props} />} />
              <Route exact path="/posts" render={(props) => <PostsTable auth={auth} {...props} />} />
              <Route exact path="/posts/new" render={(props) => <PostNew auth={auth} {...props} />} />
              <Route exact path="/posts/:id" render={(props) => <PostShow auth={auth} {...props} />} />
              <Route exact path="/posts/:id/edit" render={(props) => <PostEdit auth={auth} {...props} />} />
              <Route exact path="/secrets/" render={(props) => <SecretsTable auth={auth} {...props} />} />
              <Route exact path="/secrets/new" render={(props) => <SecretNew auth={auth} {...props} />} />
              <Route exact path="/secrets/:id" render={(props) => <SecretShow auth={auth} {...props} />} />
              <Route exact path="/secrets/:id/edit" render={(props) => <SecretEdit auth={auth} {...props} />} />
        </Container>
        </Router>
      </div>
    );
  }
}
export default AppRouter;
