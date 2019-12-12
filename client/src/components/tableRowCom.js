
import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import axios from "axios";


class tableRowCom extends Component {
  constructor(props){
    super(props);
    this.delete = this.delete.bind(this)
  }
  delete(){
    axios.get('/order/delete/' + this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
  }
  render() {
    return(
      <tbody>
      <tr>
        <td>
          {this.props.obj.date}
        </td>
        <td>
          {this.props.obj.person_name}
        </td>
        <td>
          {this.props.obj.item_department}
        </td>
        <td>
          {this.props.obj.counter_person_name}
        </td>
        <td>
          {this.props.obj.item_available}
        </td>
        <td>
          {this.props.obj.item_added}
        </td>
        <td>
          {this.props.obj.item_weight}
        </td>
        <td>
          {this.props.obj.item_actual}
        </td>
        <td>
          {this.props.obj.item_notes}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
      </tbody>
    )
  }
}
export default tableRowCom;