import React from 'react';
import './App.css';
import ItemDetails from './components/item-details';
import NewItem from './components/new-item';
import ItemService from './services/item-service';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.itemService = new ItemService();
    this.onSelect = this.onSelect.bind(this);
    this.onNewItem = this.onNewItem.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onCreateItem = this.onCreateItem.bind(this);
    this.onUpdateItem = this.onUpdateItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.state = {
      showDetails: false,
      selectedItem: null,
      newItem: null
    }
  }
  componentDidMount() {
      this.getItems();
  }
  render() {
    const items = this.state.items;
    if(!items) return null;
    const showDetails = this.state.showDetails;
    const selectedItem = this.state.selectedItem;
    const newItem = this.state.newItem;

    return (
      <div className="App">
          <h1>Posts</h1>

          <table className="items">
            <thead>
              <tr>
                <th>Title</th>
                <th>Body</th>
                <th>User</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) =>
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>{item.user_id}</td>
                  <td><a href="#" onClick={() => this.onSelect(item.id)}>Show</a></td>
                </tr>
              )}
            </tbody>

          </table>
          <br/>
          <button type="button" name="button" onClick={() => this.onNewItem()}>New Item</button>

          <br/>

          {newItem && <NewItem onSubmit={this.onCreateItem} onCancel={this.onCancel}/>}
          {showDetails && selectedItem && <ItemDetails item={selectedItem} onDelete={this.onDeleteItem} />}
      </div>
    );
  }
  getItems() {
    this.itemService.retrieveItems().then(items => {
          this.setState({items: items});
        }
    );
  }
  onSelect(itemId) {
    this.clearState();
    this.itemService.getItem(itemId).then(item => {
      this.setState({
          showDetails: true,
          selectedItem: item
        });
      }
    );
  }
  onCancel() {
    this.clearState();
  }
  onNewItem() {
    this.clearState();
    this.setState({
      newItem: true
    });
  }
  onUpdateItem(item) {
    this.clearState();
    this.itemService.updateItem(item).then(item => {
        this.getItems();
      }
    );
  }
  onCreateItem(newItem) {
    this.clearState();
    this.itemService.createItem(newItem).then(item => {
        this.getItems();
      }
    );
  }
  onDeleteItem(itemLink) {
    this.clearState();
    this.itemService.deleteItem(itemLink).then(res => {
        this.getItems();
      }
    );
  }
  clearState() {
    this.setState({
      showDetails: false,
      selectedItem: null,
      newItem: null
    });
  }
}
export default App;
