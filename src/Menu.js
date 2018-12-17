// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react and react-dom to run react and render elemets
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// For the menu we will need an image for the logo
import sLogo from './squabbleLogo.svg';
// Now we can import the style scheet for this element and needed elements that this element calls
import './Menu.css';
import Topics from './Topics';
import Convos from './Convos';
import Accounts from './Accounts';
import Chat from './Chat';

// Menu.js should enable navigation of the site by the user and manage what is displayed in the "main" html div
class Menu extends Component {
  constructor() {
    super();
    // Menu has functions, in react you must bind the functions to the instance of the element during initialisation
    this.topicClick = this.topicClick.bind(this);
    this.convoClick = this.convoClick.bind(this);
    this.accountClick = this.accountClick.bind(this);
    this.agreeClick = this.agreeClick.bind(this);
    // The state attribute page keeps track of the currently diplayed page element so you do not needlessly reload elements
    this.state = {page: 0};
  }
  agreeClick() {
    this.setState({
      page : 4
    });
    ReactDOM.render(<Chat convoName={this.convoName} convoUser={this.convoUser} />, document.getElementById('Main'));
  }
  // topicClick is ran when the Topics button is clicked, if not already dispaying the Topic element then display the Topics element
  topicClick() {
    if (this.state.page !== 0) {
      this.setState({
        page: 0
      });
      // render Topics element
      ReactDOM.render(<Topics agreeClick={this.agreeClick}/>, document.getElementById('Main'));
    }
    // Confirmation of the running of the function for development purposes, should be removed before launch
    console.log("topicClick clicked!");
  }
  // convoClick is ran when the Convos button is clicked, if not already dispaying the Convos element then display the Convos element
  convoClick() {
    if (this.state.page !== 1) {
      this.setState({
        page: 1
      });
      // render Convos element
      ReactDOM.render(<Convos/>, document.getElementById('Main'));
    }
    // Confirmation of the running of the function for development purposes, should be removed before launch
    console.log("convoClick clicked!");
  }
    // accountClick is ran when the Account button is clicked, if not already dispaying the Account element then display the Account element
  accountClick() {
    if (this.state.page !== 2) {
      this.setState({
        page: 2
      });
      // render Account element
      ReactDOM.render(<Accounts/>, document.getElementById('Main'));
    }
    // Confirmation of the running of the function for development purposes, should be removed before launch
    console.log("accountClick clicked!");
  }
  render() {
    return (
      <div className="Menu">
        <header className="Menu-header">
          <div className="logo">
            <img src={sLogo} className="Menu-logo" alt="logo" />
          </div>
          <div className="links">
            <button className="link" onClick={this.topicClick}>Topics</button>
            <button className="link" onClick={this.convoClick}><a onClick={this.comvoClick}>Convos</a></button>
            <button className="link" onClick={this.accountClick}><a>Account</a></button>
          </div>
        </header>
      </div>
    );
  }
}

// export default for simplicity
export default Menu;