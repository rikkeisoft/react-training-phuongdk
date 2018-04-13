import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './components/home'
import Search from './components/search'
import Info from './components/info'
import Detail from './components/detail'
import Bookmark from './components/bookmark'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/animate.css/animate.min.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bookMarkQty: window.localStorage.length
    }
    this.updateBookMark = this.updateBookMark.bind(this)
  }

  updateBookMark (bookMarkQty) {
    this.setState({
      bookMarkQty: bookMarkQty
    })
  }

  render () {
    const bookMarkQty = this.state.bookMarkQty
    return (
      <div className='App'>
        <Router>
          <div className='router-wrapper'>
            <header>
              <ul>
                <li>
                  <NavLink title='Homepage' exact className='nav-link' activeClassName='navlink-active' to='/'>
                    <i className='fa fa-home' aria-hidden='true' />
                  </NavLink>
                </li>
                <li>
                  <NavLink title='Searchpage' className='nav-link' activeClassName='navlink-active' to='/search'>
                    <i className='fa fa-search' aria-hidden='true' />
                  </NavLink>
                </li>
                <li>
                  <NavLink title='bookmarkpage' className='nav-link nav-link' activeClassName='navlink-active' to='/bookmark'>
                    <i className='fa fa-bookmark' aria-hidden='true'>
                      <div className='bookmarkQty'>{bookMarkQty}</div>
                    </i>
                  </NavLink>
                </li>
                <li>
                  <NavLink title='Infopage' className='nav-link' activeClassName='navlink-active' to='/info'>
                    <i className='fa fa-info-circle' aria-hidden='true' />
                  </NavLink>
                </li>
              </ul>
            </header>
            <main>
              <Route exact path='/' component={Home} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/detail/:id' render={(props) => <Detail {...props} callbackFromParent={this.updateBookMark} />} />
              <Route exact path='/bookmark' component={Bookmark} />
              <Route exact path='/info' component={Info} />
            </main>
          </div>
        </Router>
      </div>
    )
  }
}
export default App
