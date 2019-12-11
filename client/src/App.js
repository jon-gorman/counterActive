import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css"
import axios from 'axios'
import amazonLogo from './assets/prime_now_logo_Amazon.jpg';
import wholefoodsLogo from './assets/wholefoodsLogo.png';

import Create from './components/create';
import Edit from './components/edit';
import Outstanding from './components/outstanding';
import Completed from './components/completed';
import Team from './components/team'

// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

componentWillMount() {
}

  render() {
      return (
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-lite">
              <Link to={'/'} className="navbar-brand">Counter Active</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create'} className="nav-link">Create</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/outstanding'} className="nav-link">Outstanding</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/completed'} className="nav-link">Completed</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br/>
            <br/>
            <Switch>
              <Route exact path='/create' component={Create}/>
              <Route exact path='/edit/:id' component={Edit}/>
              <Route exact path='/outstanding' component={Outstanding}/>
              <Route exact path='/completed' component={Completed}/>
              {/*Only Display the JumboTron if on Home page :) */}
              <Route path='/' render={() => <Team/>}/>
            </Switch>
          </div>
        </Router>
      );
    }
}

export default App;
