import {Link} from "react-router-dom";
import amazonLogo from "../assets/prime_now_logo_Amazon.jpg";
import wholefoodsLogo from "../assets/wholefoodsLogo.png";
import React, {Component} from "react";


export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

    render() {
      return(
        <div className="jumbotron" style={{textAlign: "center"}}>
          <h1 className="display-4">Welcome to Counter Active</h1>
          <p className="lead">.</p>
          <hr className="my-4"/>
          <div className="" >
            <p>Select your department to get started</p>
            <div className="card " style={{width: "18rem"}}>
              <Link to={'/create'}><img src={amazonLogo} className="card-img-top" alt=""/></Link>
              <div className="card-body">
                <h5 className="card-title">Prime Now Shopper</h5>
                <Link to={'/create'} className="btn btn-primary">Prime Now</Link>
              </div>
            </div>
            <div className="card " style={{width: "18rem"}}>
              <Link to={'/outstanding'}><img src={wholefoodsLogo} className="card-img-top" alt=""/></Link>
              <div className="card-body">
                <h5 className="card-title">Whole Foods Employee</h5>
                <Link to={'/outstanding'} className="btn btn-primary">Whole Foods</Link>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };


