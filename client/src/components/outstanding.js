import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './tableRow';

export default class Outstanding extends Component {
  constructor(props) {
    super(props);
    this.state = {order: []};
  }

  componentDidMount(){
    this.getURL()
    this.interval = setInterval(() => {
      this.getURL();
    }, 3000)

  }
//Keep Outstanding component from populating orders that have been set for completion.
//And auto update on an interval
  getURL(){
    const actualArray = [];
    axios.get('/order')
      .then(response => {
        console.log(response.data, "this is the object");
        response.data.map((objMapped, ) => {
          if(!objMapped.item_actual ){
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


  tabRow(){
  return this.state.order.map(function(object, i){
    return <TableRow obj={object} key={i} />
  })
}

  render() {
    return (
      <div>
        <h3 align="center">Order List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
          <tr>
            <th>Date</th>
            <th>Shopper</th>
            <th>Department</th>
            <th>Item</th>
            <th>Weight</th>
            <th>Accept</th>
          </tr>
          </thead>

          { this.tabRow() }

        </table>
      </div>
    )
  }
}