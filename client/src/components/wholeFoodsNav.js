import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class WholeFoodsNav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-lite">
          <Link to={'/'} className="navbar-brand">Counter Active</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              {/*<li className="nav-item">*/}
              {/*  <Link to={'/outstanding'} className="nav-link">Create</Link>*/}
              {/*</li>*/}
            </ul>
          </div>
        </nav>
        <br/>
        <br/>
      </div>
    )
  }
}