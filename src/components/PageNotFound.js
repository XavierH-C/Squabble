// Xavier Hébert-Couturier, January 19th, 2019
// Let's import react to run react
import React, { Component } from 'react'
// Now we can import the style scheet for this element and needed elements that this element calls
import './PageNotFound.css'

// Accounts.js should allow the user to access settings and their account preferences. For now let's display default test while in development
class PageNotFound extends Component {
  render () {
    return (
      <div className='Error'>
        <p className='Placeholder'>
            Error 404, path does not exist :(
        </p>
      </div>
    )
  }
}

// Export default for simplicity
export default PageNotFound
