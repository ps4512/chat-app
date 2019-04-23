import React, { Component } from 'react';

class MessageList extends React.Component {
  render() {
    return(
      <ul className="message-list">
        {
          this.props.messages.map(message => {
            return (
              <li >
                <div>
                  {message}
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default MessageList;
