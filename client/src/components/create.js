import React, { Component } from 'react';

export default class Create extends Component {
  constructor(props){
    super(props);
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeItemAdded = this.onChangeItemAdded.bind(this);
    this.onChangeItemDepartment = this.onChangeItemDepartment.bind(this);
    this.onChangeItemWeight = this.onChangeItemWeight.bind(this);


    //STATE
    this.state = {
      date: '',
      person_name: '',
      item_added: '',
      item_department: '',
      item_weight: '' ,
    }
  }

  //On Change Functions
  onChangeDate(e){
    this.setState({
      date: e.target.value
    })
  }

  onChangePersonName(e){
    this.setState({
      person_name: e.target.value
    });
  }

  onChangeItemAdded(e){
    this.setState({
      item_added: e.target.value
    })
  }
  onChangeItemDepartment(e){
    this.setState({
      item_department: e.target.value
    })
  }
  onChangeItemWeight(e){
    this.setState({
      item_weight: e.target.value
    })
  }

//Date & Time
  dateTime(){
    let today = new Date();
    //.padStart
    let dd = String(today.getDate());
    let mm = String(today.getMonth() + 1);
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy
    return today;
  }
  clockTime(){
    let instant = new Date();
    let hour = String(instant.getHours() - 12);
    let min = String(instant.getMinutes()).padStart(2, '0');
    // let sec = String(instant.getSeconds());
    instant = hour + ':' + min;
    return instant;
  }

  //On Submit
  onSubmit(e){
    e.preventDefault();
    console.log(`The values are ${this.state.date}, ${this.state.person_name}, 
    ${this.state.item_added}, ${this.state.item_department}, ${this.state.item_weight}`);
    this.setState({
      date: '',
      person_name: '',
      item_added: '',
      item_department: '',
      item_weight: '',
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Add an Order to the Que</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md mr-0">
              <label>Date of Order:  </label>
              <input
                //make this auto fill with date and time javascript
                type="text"
                className="form-control col-md mr-0"
                value={this.dateTime()
                // + ' @ ' + this.clockTime()
                }

                // onChange={this.onChangeShiftDate}
              />
            </div>
            <div className="form-group col-md mr-0">
              <label>Name:  </label>
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
              <label>Weight: </label>
              <input id="inputState"
                      type="text"
                      className="form-control"
                      value={this.state.item_weight }
                      onChange={this.onChangeItemWeight}
              >
              </input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md mr-0">
              {/*<Label> Jon's Shift Notes:  </Label>*/}
              {/*<Input*/}
              {/*  type="textarea"*/}
              {/*  className="form-control col-md mr-0"*/}
              {/*  value={this.state.shift_notes}*/}
              {/*  onChange={this.onChangeShiftNotes}*/}
              {/*/>*/}
            </div>
          </div>
        </form>
      </div>
    )
  }
}