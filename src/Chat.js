// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react to run react
import React, { Component } from 'react';
// Now we can import the style scheet for this element and needed elements that this element calls
import './Chat.css';

// Convos should should the user's active conversations and let them access them
class Chat extends Component {
  // A dynamic bock creation should replace these default calls, rendering fresh blocks as the user scrolls downwards
  render() {
    return (
      <div className="Chat">
          <div className="ConvoFeed">
            Hello? this is chat element
          </div>
      </div>
    );
  }
}

// Export default for simplicity
export default Chat;