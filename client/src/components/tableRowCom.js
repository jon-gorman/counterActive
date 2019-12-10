
import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class tableRowCom extends Component {
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
          {this.props.obj.item_added}
        </td>
        <td>
          {this.props.obj.item_weight}
        </td>
        <td>
          {this.props.obj.item_actual}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
      </tbody>
    )
  }
}
export default tableRowCom;