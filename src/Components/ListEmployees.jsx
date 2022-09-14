import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../Service/EmployeeService";

const ListEmployees = () => {

    const [employeeList,setEmployeeList] = useState([]);
    useEffect(()=>{
        init();
    }, [])

    const init =() =>{
        EmployeeService.getEmployees().then((res)=>{
            setEmployeeList(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    }

    const deleteEmployee=(id) =>{
        EmployeeService.deleteEmployee(id).then(()=>{
            alert("Employee with id: "+id+" has been removed from database");
            init();
        })
    } 

  return (
    <div className="container">
      <h2 className="text-center text-success">List of Employees</h2>
      <hr />
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Employee Designation</th>
              <th scope="col">Employee Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.emailID}</td>
                <td>
                  <div className="btn-group">
                    <Link to={'/edit-employee/'+employee.id} class="btn btn-warning btn-sm">
                      Update
                    </Link>
                    <button type="button" class="btn btn-danger btn-sm ms-2" onClick={()=>deleteEmployee(employee.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>

      <div>
        <center>
          <Link to='/add-employee' className="btn btn-primary" >Add Employee</Link>
        </center>
      </div>
    </div>
  );
};

export default ListEmployees;
