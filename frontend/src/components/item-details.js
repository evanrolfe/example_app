import React, { Component } from 'react';
import '../App.css';

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  render() {
    const item = this.props.item;
    return (
      <div className="input-panel">
      <span className="form-caption">{ item.name}</span>
      <div><span className="field-name">Title:</span><br/> {item.title}</div>
      <div><span className="field-name">Body:</span><br/> {item.body}</div>
      <div><span className="field-name">User:</span><br/> {item.user_id}</div>
      <br/>
      <button onClick={() => this.onDelete()}>Delete</button>
      </div>
    );
  }

  onDelete() {
    const item = this.props.item;
    if(window.confirm("Are you sure to delete item: " + item.name + " ?")) {
      this.props.onDelete(item.link);
    }
  }
}
export default ItemDetails;
