import React from 'react';
import '../App.css';
import { w3cwebsocket as W3CWebSocket } from "websocket";

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentMessage: '', messages: [] };
    this.client = new W3CWebSocket('ws://localhost:3002');

    this.sendMessage = this.sendMessage.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    this.client.onmessage = (message) => {
      const messageLog = {data: message.data, direction: 'incoming'};
      this.addMessage(messageLog);
    };
  }

  addMessage(message) {
    this.setState(prevState => {
      const newMessages = JSON.parse(JSON.stringify(prevState.messages));
      newMessages.push(message);
      console.log(`Adding a new message`)
      console.log(message);
      return {messages: newMessages};
    })
  }

  sendMessage() {
    const data = this.state.currentMessage;

    const message = {data: data, direction: 'outgoing'};
    this.client.send(data)
    this.addMessage(message);
  }

  renderMessage(message) {
    const colour = (message.direction === 'outgoing') ? 'green' : 'red';

    return <p style={{color: colour}}>
      {message.data}
    </p>;
  }

  handleInputChange(event) {
    const value = event.target.value;

    this.setState({currentMessage: value})
  }

  render() {
    const messages = this.state.messages;
    const currentMessage = this.state.currentMessage;

    return (
      <>
        <div>
          <p>Welcome to the chat room!</p>

          <input name="name" value={currentMessage} onChange={this.handleInputChange} />
          <button onClick={this.sendMessage}>Send Message</button>
        </div>

        <br/>

        <div>
          <b>Message Log:</b>
          {messages.map(this.renderMessage)}
        </div>
      </>
    );
  }
}
export default Chat;
