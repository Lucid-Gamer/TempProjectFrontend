import React, { Component } from 'react'
import TicketService from '../Service/TicketService'


export default class TicketRecord extends Component {

    deleteHandler=()=>{
        TicketService.deleteTicket(this.props.obj.ticketID)
        .then((res)=>{
            alert("Deletion Successfull")
            console.log(res.data);
            window.location.reload(true);
        }).catch(err=>{
            alert("Deletion Unsuccessfull");
            console.log(err);
        })
    } 

  render() {
    return (
        <tr style={{textAlign: 'center'}}>
        <td>{this.props.obj.ticketID}</td>
        <td>{this.props.obj.employeeID}</td>
        <td>{this.props.obj.problemText}</td>
        <td>{this.props.obj.isSolved}</td>
        <td>
          <button  className='btn btn-warning me-2'>Edit</button> 
          <button className='btn btn-danger' onClick={(e)=>{this.deleteHandler(e)}}>Delete</button>
        </td>
        {/* */}
      {/* to={'/edit/'+this.props.obj._id} */}
      </tr>
      
    )
  }
}
