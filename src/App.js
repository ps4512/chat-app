import React, { Component } from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import './App.css';

function Title() {
  return <p class="title">Chat</p>
}

class App extends Component {

  constructor() {
    super()
    let DUMMY_DATA = [
        'fefe', 'fefe'
    ];
    this.state = {
      messages: DUMMY_DATA
    }
      this.state.messages.push('jjj')
  }

  render() {
    return (
      <div className="App">
          <Title />
          <Title />
          <MessageList messages={this.state.messages}/>
          <SendMessageForm />
      </div>
    );
  }
}

export default App;
