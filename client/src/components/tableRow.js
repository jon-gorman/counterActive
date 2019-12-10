
import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class tableRow extends Component {
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
          {this.props.obj.item_added}
        </td>
        <td>
          {this.props.obj.item_weight}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Accept</Link>
        </td>
        <td>
          {/*<button onClick={this.delete} className="btn btn-danger">Delete</button>*/}
        </td>
      </tr>
      </tbody>
    )
  }
}
export default tableRow;