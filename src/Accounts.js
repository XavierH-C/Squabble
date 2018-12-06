// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react to run react 
import React, { Component } from 'react';
// Now we can import the style scheet for this element and needed elements that this element calls
import './Accounts.css';

// Accounts.js should allow the user to access settings and their account preferences. For now let's display default test while in development
class Accounts extends Component {
  render() {
    return (
      <div className="Accounts">
          <div className="AccountsFeed">
            <p className="Placeholder">
              Accounts:
              This is where the user may set settings and manage their account.
              This is where the user may set settings and manage their account.
              This is where the user may set settings and manage their account.
              This is where the user may set settings and manage their account.
              This is where the user may set settings and manage their account.
              This is where the user may set settings and manage their account.
              This is where the user may set settings and manage their account.
              This is where the user may set settings and manage their account.
              This is where the user may set settings and manage their account.
              This is where the user may set settings and manage their account.
              This is where the user may set settings and manage their account.
            </p>            
          </div>
      </div>
    );
  }
}

// Export default for simplicity
export default Accounts;
