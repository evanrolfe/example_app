import Config from '../config/config';

class PostService {
  constructor() {
    this.config = new Config();
  }

  async retrievePosts() {
    return fetch(this.config.ITEM_COLLECTION_URL)
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then(json => {
        console.log("Retrieved posts:");
        console.log(json);
        return json;
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async getPost(postId) {
    console.log("PostService.getPost():");
    console.log("Post: " + postId);
    return fetch("http://localhost:3001/posts/" + postId + ".json")
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .then(post => {
          return post;
        }
      )
      .catch(error => {
        this.handleError(error);
      });
  }

  async createPost(post) {
    console.log("PostService.createPost():");
    console.log(post);
    return Promise.resolve(post);
  }

  async deletePost(postId) {
    console.log("PostService.deletePost():");
    console.log("post ID:" + postId);
  }

  async updatePost(post) {
    console.log("PostService.updatePost():");
    console.log(post);
  }

  handleResponseError(response) {
      throw new Error("HTTP error, status = " + response.status);
  }
  handleError(error) {
    console.log(error.message);
  }
}
export default PostService;
