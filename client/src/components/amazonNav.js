import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class AmazonNav extends Component {
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
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'/completed'} className="nav-link">Completed</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <br/>
      </div>
    )
  }
}