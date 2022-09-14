import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditEmployee(){
    
    const [employee,setEmployee] = useState({})
      
      const navigate = useNavigate();

      const {id} = useParams();

      useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/${id}`).then((res)=>{
          setEmployee(res.data);
      }).catch((error)=>{
          console.log(error);
      })
  },[]);


      const handleChange = (e) => {
        const {name,value} = e.target;
        setEmployee({...employee, [name]:value})
      }
    
      const updateEmployee = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:8080/api/v1/update/${id}`, employee)
        .then((res)=>{
            alert("Employee Updated Successfully")
            navigate('/employees');
        }).catch((error)=>{
            console.log(error);
        });
        
      }
  return (
    
        <div>
      <div className="container container-fluid">
        <div className="row">
          <Card className="card col-md-6 offset-md-3 mt-5 bg-primary">
            <div className="card-header text-center text-dark">
              <strong><i>Edit Employee</i></strong>
            </div>
            <br></br>
            <Card.Body>
              <form className="form-group" onSubmit={(e)=>updateEmployee(e)}>
                <div>
                  <FloatingLabel controlId="floatingInput" label="Name" className="form-label" >
                    <Form.Control type="text" placeholder="Name" name="name" value={employee.name} onChange={(e)=>handleChange(e)} />
                  </FloatingLabel>
                </div>
                <br></br>
                <div>
                  <FloatingLabel controlId="floatingInput" label="Designation" className="form">
                    <Form.Control type="text" placeholder="Designation" name="designation" value={employee.designation} onChange={(e)=>handleChange(e)}/>
                  </FloatingLabel>
                </div>
                <br></br>
                <div>
                  <FloatingLabel controlId="floatingInput" label="Email ID" className="form-label mb-3">
                    <Form.Control type="email" placeholder="name@example.com" name="emailID" value={employee.emailID} onChange={(e)=>handleChange(e)}/>
                  </FloatingLabel>
                </div>
                <br></br>
                <div>
                  <center>
                    <button className="btn btn-success me-2" type='submit'>Submit</button>
                    <button type="Reset" className="btn btn-danger ms-2">Reset</button>
                  </center>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
