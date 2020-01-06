import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import WholeFoodsNav from "./wholeFoodsNav";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeItemAdded = this.onChangeItemAdded.bind(this);
    this.onChangeItemDepartment = this.onChangeItemDepartment.bind(this);
    this.onChangeCounterPersonName = this.onChangeCounterPersonName.bind(this);
    this.onChangeItemWeight = this.onChangeItemWeight.bind(this);
    this.onChangeItemActual = this.onChangeItemActual.bind(this);
    this.onChangeItemAvailable = this.onChangeItemAvailable.bind(this);
    this.onChangeItemNotes = this.onChangeItemNotes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    //STATE
    this.state = {
      date: new Date(),
      counter_person_name: '',
      person_name: '',
      item_added: '',
      item_department: '',
      item_weight: 0,
      item_actual: 0,
      item_available: '',
      item_notes: ''
    }
  }
  componentDidMount() {
    // console.log(this.props.match.params.id);
    axios.get('/order/edit/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          date: response.data.date,
          person_name: response.data.person_name,
          item_department: response.data.item_department,
          item_added: response.data.item_added,
          item_weight: response.data.item_weight,
          item_actual: response.data.item_actual,

        });
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  //On Change Functions
  onChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }

  onChangeItemDepartment(e) {
    this.setState({
      item_department: e.target.value
    })
  }

  onChangeCounterPersonName(e) {
    this.setState({
      counter_person_name: e.target.value
    })
  }

  onChangeItemAvailable(e){
    this.setState({
      item_available: e.target.value
    })
  }

  onChangeItemAdded(e) {
    this.setState({
      item_added: e.target.value
    })
  }


  onChangeItemWeight(e) {
    this.setState({
      item_weight: e.target.value
    })
  }

  onChangeItemActual(e){
    this.setState({
      item_actual: e.target.value
    })
  }

  onChangeItemNotes(e){
    this.setState({
      item_notes: e.target.value
    })
  }


  routeToOutstanding(){
    return(
      <Link to={'/outstanding'}></Link>
    )
  }
//Date & Time
  dateTime() {
    let today = new Date();
    //.padStart
    let dd = String(today.getDate());
    let mm = String(today.getMonth() + 1);
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy
    return today;
  }

  clockTime() {
    let instant = new Date();
    let hour = String(instant.getHours() - 12);
    let min = String(instant.getMinutes()).padStart(2, '0');
    // let sec = String(instant.getSeconds());
    instant = hour + ':' + min;
    return instant;
  }

  //On Submit
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      date: this.state.date,
      counter_person_name: this.state.counter_person_name,
      person_name: this.state.person_name,
      item_added: this.state.item_added,
      item_department: this.state.item_department,
      item_weight: this.state.item_weight,
      item_actual: this.state.item_actual,
      item_available: this.state.item_available,
      item_notes: this.state.item_notes
    };
    axios.post('/order/update/' + this.props.match.params.id, obj)
      .then(function(res){
        return console.log(res.data);
        this.props.history.push('/outstanding')
      });


    this.setState({
      date: this.dateTime(),
      counter_person_name: '',
      person_name: '',
      item_added: '',
      item_department: '',
      item_weight: '',
      item_actual: '0',
      item_available: ''
    })
    return<Link to={'/outstanding'}> </Link>
  }

  render() {
    return (
      <div>
      <WholeFoodsNav/>
      <div style={{marginTop: 10}}>
        <h3 align="center">Order to Complete</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md mr-0">
              <label>Date of Order: </label>
              <input
                //make this auto fill with date and time javascript
                type="text"
                className="form-control col-md mr-0"
                // value={this.dateTime()
                // + ' @ ' + this.clockTime()
                //}
                value={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
            <div className="form-group col-md mr-0">
              <label>Name: </label>
              <input
                // id="inputState"
                type="text"
                className="form-control col-md mr-0"
                value={this.state.person_name}
                onChange={this.onChangePersonName}
              />
            </div>
            <div className="form-group col-md ml-0">
              <label>Department: </label>
              <select id="inputState"
                      type="text"
                      className="form-control col-md ml-0"
                      value={this.state.item_department}
                      onChange={this.onChangeItemDepartment}
              >
                <option className="form-control">Department...</option>
                <option className="form-control">Meat</option>
                <option className="form-control">Seafood</option>
                <option className="form-control">Deli</option>
              </select>
            </div>
            <div className="form-group col-md mr-0">
              <label>Team Member: </label>
              <input
                // id="inputState"
                type="text"
                className="form-control col-md mr-0"
                value={this.state.counter_person_name}
                onChange={this.onChangeCounterPersonName}
              />
            </div>
            <div>
            <label>Item Available: </label>
            <select id="inputState"
                    type="text"
                    className="form-control col-md ml-0"
                    value={this.state.item_available}
                    onChange={this.onChangeItemAvailable}
            >
              <option className="form-control"> </option>
              <option className="form-control">Yes</option>
              <option className="form-control">No</option>
            </select>
          </div>
            <div className="form-group col-md ml-0">
              <label>Item to Order: </label>
              <input id="inputState"
                     type="text"
                     className="form-control"
                     value={this.state.item_added}
                     onChange={this.onChangeItemAdded}
              >
              </input>
            </div>
            <div className="form-group col-md ml-0">
              <label>Weight Requested: </label>
              <input id="inputState"
                     type="text"
                     className="form-control"
                     value={this.state.item_weight}
                     onChange={this.onChangeItemWeight}
              >
              </input>
            </div>
            <div className="form-group col-md ml-0">
              <label>Actual Weight: </label>
              <input id="inputState"
                     type="text"
                     className="form-control"
                     // value={this.state.item_actual}
                     onChange={this.onChangeItemActual}
              >
              </input>
            </div>

          </div>
          <div className="form-row">
            <div className="form-group col-md mr-0">
              <label> Department Notes:  </label>
              <input
                type="textarea"
                className="form-control col-md mr-0"
                value={this.state.item_notes}
                onChange={this.onChangeItemNotes}
              />
            </div>

          </div>
          <div className="form-group">
            <input type="submit" value="Complete order" className="btn btn-primary" ></input>
          </div>
        </form>
      </div>
      </div>
    )
  }
}



