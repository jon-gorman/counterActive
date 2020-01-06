import React, { Component } from 'react';
import axios from 'axios';
import TableRowCom from './tableRowCom';

export default class Completed extends Component {
  constructor(props) {
    super(props);
    this.state = {order: []};
  }
  componentDidMount(){
    console.log()
    this.getURL();
    this.interval = setInterval(() => {
      this.getURL();
    }, 3000)
  }
//Keep Completed component from populating until an actual weight has been given.
//And auto update on an interval
  getURL(){
    const actualArray = [];
    axios.get('/order')
      .then(response => {
        console.log(response.data, "this is the object");
        response.data.map((objMapped, ) => {
          if(objMapped.item_actual){
            actualArray.push(objMapped)
            console.log(objMapped, "this is the object that has item_actual")
            this.setState({order: actualArray});
          }
        })
      }).catch(function (error) {
      console.log(error)
    })
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tabRowCom(){
    return this.state.order.map(function(object, i){
      return <TableRowCom obj={object} key={i} />
    })
  }
  render() {
    return (
      <div>
        <h3 align="center">Completed Orders</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
          <tr>
            <th>Date</th>
            <th>Shopper</th>
            <th>Department</th>
            <th>Team Member</th>
            <th>Availability</th>
            <th>Item</th>
            <th>Requested Weight</th>
            <th>Actual Weight</th>
            <th>Notes</th>
            {/*<th>Edit</th>*/}
            <th>Delete</th>
          </tr>
          </thead>

          { this.tabRowCom() }

        </table>
      </div>
    )
  }
}