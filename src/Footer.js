// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react to run react 
import React, { Component } from 'react';
// We'll need to manually import an image for now, in the future any images should be sourced from a database
import fbIcon from './fbIcon.png';
// Now we can import the style scheet for this element and needed elements that this element calls
import './Footer.css';

// Footer.js displays information at the bottom of the site
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="footerText">
          Squabble™ is owned and operated by Xavier Hébert-Couturier, and was created in 2018.
        </p>
        <p className="footerText">
          Contact us at xhebertc@unb.ca
        </p>
        <a href="https://www.facebook.com/Squabble.in/">
          <img className="facebookLink" src={fbIcon} alt="facebookIcon"></img>
        </a>
      </div>
    );
  }
}

// Export default
export default Footer;
