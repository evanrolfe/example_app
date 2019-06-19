import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import PostService from '../services/post-service';

class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.postService = new PostService();
    this.state = {
      post: null,
    }
  }

  componentDidMount() {
    this.getPost();
  }

  componentDidUpdate(previousProps) {
    if (this.props.match.params.id !== previousProps.match.params.id) {
      this.getPost();
    }
  }

  getPost() {
    const postId = this.props.match.params.id;

    this.postService.getPost(postId).then(post => {
        this.setState({
          post: post
        });
      }
    );
  }

  render() {
    const post = this.state.post;
    if(!post) return null;

    return (
      <div className="App">
        <h2>Viewing Post</h2>

        <p>
          <b>Title:</b> {post.title}
        </p>
        <p>
          <b>Body:</b> {post.body}
        </p>
        <p>
          <b>User:</b> {post.user_id}
        </p>

        <p><Link to="/posts">Back</Link></p>
      </div>
    );
  }
}
export default PostDetails;
