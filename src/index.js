// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react and react-dom to run react and render elemets
import React from 'react'
import ReactDOM from 'react-dom'
// Now we can import the style scheet for this element and needed elements that this element calls
import './index.css'
import App from './App'

// Let's render the App component
ReactDOM.render(<App />, document.getElementById('App'))
