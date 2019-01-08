// Xavier Hébert-Couturier, December 5th, 2018
// Let's import react and react-dom to run react and render elemets
import React from 'react'
import ReactDOM from 'react-dom'
// Now we can import the style scheet for this element and needed elements that this element calls
import './index.css'
import Menu from './Menu'
import Topics from './Topics'
import Footer from './Footer'

// index.js should initialize the components when the page is first loaded, for now we will load Menu and Topics by default
ReactDOM.render(<Menu />, document.getElementById('Menu'))
ReactDOM.render(<Topics />, document.getElementById('Main'))
ReactDOM.render(<Footer />, document.getElementById('Footer'))
