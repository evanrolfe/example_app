class ItemService {
  constructor() {
    this.items = [
      {
        "id": 1,
        "title": "Hello World",
        "body": "How are you today?",
        "user_id": 1,
        "created_at": "2019-06-19T10:44:27.073Z",
        "updated_at": "2019-06-19T10:44:27.073Z",
        "url": "http://localhost:3001/posts/1.json"
      },
      {
        "id": 2,
        "title": "My first post!",
        "body": "asdff sdfa sfdasfasf",
        "user_id": 1,
        "created_at": "2019-06-19T12:30:28.475Z",
        "updated_at": "2019-06-19T12:30:28.475Z",
        "url": "http://localhost:3001/posts/2.json"
      },
      {
        "id": 3,
        "title": "WHat an amazing site!",
        "body": "Bla bla bla",
        "user_id": 1,
        "created_at": "2019-06-19T12:31:19.464Z",
        "updated_at": "2019-06-19T12:31:19.464Z",
        "url": "http://localhost:3001/posts/3.json"
      }
    ];
  }
  async retrieveItems() {
      return Promise.resolve(this.items);
  }
  async getItem(itemId) {
    for(var i = 0; i < this.items.length; i++) {
      if ( this.items[i].id === itemId) {
        return Promise.resolve(this.items[i]);
      }
    }
    return null;
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
}
export default ItemService;
