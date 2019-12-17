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
import AmazonNavBar from "./components/amazonNav";
import LandingNav from "./components/landingNav";
import WholeFoodsNav from './components/wholeFoodsNav'

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
        <div>
        <Router>
            <Switch>
              <Route path='/create' render={() =>
                <div className='container'>
                  <AmazonNavBar/>
                  <Create/>
                </div> }/>
              <Route path='/completed' render={() =>
                <div>
                  <AmazonNavBar/>
                  <Completed/>
                </div>
              }/>
              <Route path='/outstanding' render={() =>
                <div>
                  <WholeFoodsNav/>
                  <Outstanding/>
                </div>
              }/>
              {/*<Route path='/edit/ + this.props.match.id' render={() =>*/}
              {/*  <div>*/}
              {/*    <WholeFoodsNav/>*/}
              {/*    <Edit/>*/}
              {/*  </div>*/}
              {/*}/>*/}
              <Route exact path='/create' component={Create}/>
              <Route exact path='/edit/:id' component={Edit}/>
              <Route exact path='/outstanding' component={Outstanding}/>
              <Route exact path='/completed' component={Completed}/>
              {/*Only Display the JumboTron if on Home page :) */}
              <Route path='/' render={() =>
                <div className="container">
                <LandingNav/>
                <Team/>
              </div>}/>


            </Switch>
          {/*</div>*/}
        </Router>
        </div>
      );
    }
}

export default App;
