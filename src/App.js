import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/home';
import Search from './components/search';
import Info from './components/info';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <div className="router-wrapper">
            <header>
              <ul>
                <li>
                  <NavLink title="Homepage" exact className='nav-link' activeClassName='navlink-active' to='/'><i className="fa fa-home" aria-hidden="true"></i></NavLink>
                </li>
                <li>
                  <NavLink title="Searchpage" className="nav-link" activeClassName="navlink-active" to="/search"><i className="fa fa-search" aria-hidden="true"></i></NavLink>
                </li>
                <li>
                  <NavLink title="Infopage" className="nav-link" activeClassName="navlink-active" to="/info"><i className="fa fa-info-circle" aria-hidden="true"></i></NavLink>
                </li>
              </ul>
            </header>
            <main>
              <Route exact path='/' component={Home} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/info' component={Info} />
            </main>
          </div>  
        </Router>  
      </div>
    );
  }
}

export default App;
