import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostsTable from "./posts-table";
import PostDetails from "./post-details";
import SecretsTable from "./secrets-table";

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
        <Route exact path="/posts/:id" component={PostDetails} />
        <Route exact path="/secrets/" component={SecretsTable} />
      </div>
    </Router>
  );
}

export default AppRouter;
