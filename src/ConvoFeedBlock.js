// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react to run react
import React, { Component } from 'react';
// Now we can import the style scheet for this element and needed elements that this element calls
import './ConvoFeedBlock.css';

// ConvoFeedBlock displays all active conversations and let's the user choose which they want to open
class ConvoFeedBlock extends Component {
  constructor() {
    super();
    // TopicFeedBlock has functions, in react you must bind the functions to the instance of the element during initialisation
   this.convoClicked = this.convoClicked.bind(this);
  }
  // When a Convo is clicked on, open the chat massage in "main" div
  convoClicked() {
    alert("Conversation was clicked, open message chat with "+this.props.convoUser+"!");
  }
  // Elements passed from the parent Convo.js
  render() {
    return (
      <button className="convoFeedBlock" onClick={this.convoClicked}>
        <p className="convoName">
          {this.props.title}
        </p>
        <p className="lastConvoMessage">
          {this.props.convoUser} : {this.props.lastMessage}
        </p>
      </button>
    );
  }
}

// Export default for simpicity, will change once content is sourced from database
export default ConvoFeedBlock;