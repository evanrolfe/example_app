import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nav from './nav';
import AuthCallback from './auth-callback';
import PostsTable from "./posts-table";
import PostShow from "./post-show";
import PostEdit from "./post-edit";
import PostNew from "./post-new";
import SecretsTable from "./secrets-table";
import SecretShow from "./secret-show";
import SecretEdit from "./secret-edit";
import SecretNew from "./secret-new";
import Home from "./home";
import Auth from '../services/auth';

class AppRouter extends React.Component {
  render() {
    const auth = new Auth();

    return (
      <Router>
          <Route path="/" render={(props) => <Nav auth={auth} {...props} />} />
          <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route exact path="/posts" render={(props) => <PostsTable auth={auth} {...props} />} />
          <Route exact path="/posts/new" render={(props) => <PostNew auth={auth} {...props} />} />
          <Route exact path="/posts/:id" render={(props) => <PostShow auth={auth} {...props} />} />
          <Route exact path="/posts/:id/edit" render={(props) => <PostEdit auth={auth} {...props} />} />
          <Route exact path="/secrets/" render={(props) => <SecretsTable auth={auth} {...props} />} />
          <Route exact path="/secrets/new" render={(props) => <SecretNew auth={auth} {...props} />} />
          <Route exact path="/secrets/:id" render={(props) => <SecretShow auth={auth} {...props} />} />
          <Route exact path="/secrets/:id/edit" render={(props) => <SecretEdit auth={auth} {...props} />} />
          <Route exact path='/auth_callback' render={() => (<AuthCallback auth={auth}/>)} />
      </Router>
    );
  }
}
export default AppRouter;
