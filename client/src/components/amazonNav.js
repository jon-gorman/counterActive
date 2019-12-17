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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">Counter Active</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
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