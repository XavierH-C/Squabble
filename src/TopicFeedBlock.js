// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react to run react
import React, { Component } from 'react';
// Now we can import the style scheet for this element and needed elements that this element calls
import './TopicFeedBlock.css';

// TopicFeedBlock displays a specific topic for the Topics feed, each block includes the topic's name, description, an image for context and two buttons for the user to choose their position
class TopicFeedBlock extends Component {
  constructor() {
    super();
    // TopicFeedBlock has functions, in react you must bind the functions to the instance of the element during initialisation
    this.agreeClick = this.agreeClick.bind(this);
    this.disagreeClick = this.disagreeClick.bind(this);
  }
  // Confirmation of the running of the function for development purposes, should be removed before launch
  agreeClick() {
    alert("New conversation started! Topic: "+this.props.title+", Position: agree");
  }
  // Confirmation of the running of the function for development purposes, should be removed before launch
  disagreeClick() {
    alert("New conversation started! Topic: "+this.props.title+", Position: disagree");
  }
  // Elements passed from the parent Topics.js
  render() {
    return (
      <div className="topicFeedBlock">
        <p className="convoName">
          {this.props.title}
        </p>
        <p className="convoDescription">
          {this.props.description}
        </p>
        <img src={this.props.feedImage} className="feedImage" alt="logo" />
        <button className="buttons agreeButton" onClick={this.agreeClick}>
          Agree
        </button>
        <button className="buttons" onClick={this.disagreeClick}>
          Disagree
        </button>
      </div>
    );
  }
}

// Export default for simpicity, will change once content is sourced from database
export default TopicFeedBlock;