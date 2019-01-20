// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react and react-router-dom to run react and render elemets
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// For the menu we will need an image for the logo
import sLogo from '../images/squabbleLogo.svg'
// Now we can import the style scheet for this element and needed elements that this element calls
import './Menu.css'

// Menu.js should enable navigation of the site by the user and manage what is displayed
class Menu extends Component {
  render () {
    return (
      <div className='Menu'>
        <header className='Menu-header'>
          <div className='logo'>
            <img src={sLogo} className='Menu-logo' alt='logo' />
          </div>
          <div className='links'>
            <NavLink to='/' className='link'>Topics</NavLink>
            <NavLink to='/convos' className='link'><a onClick={this.comvoClick}>Convos</a></NavLink>
            <NavLink to='/accounts' className='link'><a>Account</a></NavLink>
          </div>
        </header>
      </div>
    )
  }
}

// export default for simplicity
export default Menu
