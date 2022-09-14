import React, { useState } from "react";
import { Card } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import EmployeeService from '../Service/EmployeeService.jsx' 

const CreateEmployee = () => {

  const [employee,setEmployee] = useState({
    name:'',
    designation: '',
    emailID: ''
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]:value})
  }

  const saveEmployee = (e) =>{
    e.preventDefault();

    EmployeeService.createEmployee(employee).then((res)=>{
      alert("Employee has been added");
      document.location.href='/employees';
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div>
      <div className="container container-fluid">
        <div className="row">
          <Card className="card col-md-6 offset-md-3 mt-5 bg-primary">
            <div className="card-header text-center text-dark">
              <strong><i>Add Employee</i></strong>
            </div>
            <br></br>
            <Card.Body>
              <form className="form-group" onSubmit={(e)=>saveEmployee(e)}>
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
                    <button className="btn btn-success">Submit</button>
                    <button type="Reset" className="btn btn-danger ms-2">Reset</button>
                  </center>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
