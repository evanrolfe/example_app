import Config from '../config/config';
class ItemService {
  constructor() {
    this.config = new Config();
  }

  async retrieveItems() {
    return fetch(this.config.ITEM_COLLECTION_URL)
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then(json => {
        console.log("Retrieved items:");
        console.log(json);
        return json;
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async getItem(itemId) {
    console.log("ItemService.getItem():");
    console.log("Item: " + itemId);
    return fetch("http://localhost:3001/posts/" + itemId + ".json")
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .then(item => {
          return item;
        }
      )
      .catch(error => {
        this.handleError(error);
      });
  }

  async createItem(item) {
    console.log("ItemService.createItem():");
    console.log(item);
    return Promise.resolve(item);
  }

  async deleteItem(itemId) {
    console.log("ItemService.deleteItem():");
    console.log("item ID:" + itemId);
  }

  async updateItem(item) {
    console.log("ItemService.updateItem():");
    console.log(item);
  }

  handleResponseError(response) {
      throw new Error("HTTP error, status = " + response.status);
  }
  handleError(error) {
    console.log(error.message);
  }
}
export default ItemService;
