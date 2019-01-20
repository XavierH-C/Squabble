// Xavier Hébert-Couturier, January 19th, 2019
// Let's import react and react-router-dom to run react and render elemets
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Now we can import the needed elements that this element calls
import Menu from './components/Menu'
import Topics from './components/Topics'
import Convos from './components/Convos'
import Chat from './components/Chat'
import Accounts from './components/Accounts'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'

// Let's render the components that make up the app, with React-Router paths
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Switch>
            <Route path='/' component={Topics} exact />
            <Route path='/convos' component={Convos} />
            <Route path='/chat' component={Chat} />
            <Route path='/accounts' component={Accounts} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
