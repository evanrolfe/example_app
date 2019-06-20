import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostsTable from "./posts-table";
import PostShow from "./post-show";
import PostEdit from "./post-edit";
import PostNew from "./post-new";
import SecretsTable from "./secrets-table";
import SecretShow from "./secret-show";
import SecretEdit from "./secret-edit";
import SecretNew from "./secret-new";

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/secrets/">Secrets</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/posts" component={PostsTable} />
        <Route exact path="/posts/new" component={PostNew} />
        <Route exact path="/posts/:id" component={PostShow} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route exact path="/secrets/" component={SecretsTable} />
        <Route exact path="/secrets/new" component={SecretNew} />
        <Route exact path="/secrets/:id" component={SecretShow} />
        <Route exact path="/secrets/:id/edit" component={SecretEdit} />
      </div>
    </Router>
  );
}

export default AppRouter;
