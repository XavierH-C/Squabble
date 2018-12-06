// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react to run react
import React, { Component } from 'react';
// We'll need to manually import an image for now, in the future any images should be sourced from a database
import placeholderImg from './pineappleImg.jpg';
// Now we can import the style scheet for this element and needed elements that this element calls
import './TopicFeedBlock.css';

// TopicFeedBlock displays a specific topic for the Topics feed, each block includes the topic's name, description, an image for context and two buttons for the user to choose their position
class TopicFeedBlock extends Component {
  constructor() {
    super();
    // The contructor is where you should fetch data to populate block, for now let's pass placeholder values.
    this.state = {title: "Pineapple does go on pizza", description: "Many people say that pineapple has no place on a pizza. By agreeing, you are defending a citizen's right to have the pleasure of covering their pizza pies with pineapple."};
    // TopicFeedBlock has functions, in react you must bind the functions to the instance of the element during initialisation
    this.agreeClick = this.agreeClick.bind(this);
    this.disagreeClick = this.disagreeClick.bind(this);
  }
  // Confirmation of the running of the function for development purposes, should be removed before launch
  agreeClick() {
    alert("New conversation started! Topic: Pineapple Position: agree");
  }
  // Confirmation of the running of the function for development purposes, should be removed before launch
  disagreeClick() {
    alert("New conversation started! Topic: Pineapple Position: disagree");
  }
  // For now, static elements are created, in the future state variables will be written below and sourced from a database
  render() {
    return (
      <div className="topicFeedBlock">
        <p className="convoName">
          {this.state.title}
        </p>
        <p className="convoDescription">
          {this.state.description}
        </p>
        <img src={placeholderImg} className="feedImage" alt="logo" />
        <button className="buttons" onClick={this.agreeClick}>
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