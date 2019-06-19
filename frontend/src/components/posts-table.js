import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import PostService from '../services/post-service';

class PostsTable extends Component {
  constructor(props) {
    super(props);
    this.postLink = this.postLink.bind(this);
    this.postService = new PostService();
    this.state = { posts: null };
  }

  componentDidMount() {
      this.getPosts();
  }

  getPosts() {
    this.postService.retrievePosts().then(posts => {
          this.setState({posts: posts});
        }
    );
  }

  postLink(postId) {
    return "/posts/" + postId;
  }

  render() {
    const posts = this.state.posts;
    if(!posts) return null;

    return (
      <div className="App">
          <h1>Posts</h1>

          <table className="posts">
            <thead>
              <tr>
                <th>Title</th>
                <th>Body</th>
                <th>User</th>
              </tr>
            </thead>

            <tbody>
              {posts.map((post) =>
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>{post.user_id}</td>
                  <td><Link to={this.postLink(post.id)}>Show</Link></td>
                </tr>
              )}
            </tbody>
          </table>
      </div>
    );
  }
}
export default PostsTable;

