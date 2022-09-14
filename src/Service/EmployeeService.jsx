import axios from 'axios';

const EMP_API_BASE_URL = "http://localhost:8080/api/v1";

class EmployeeService{
    getEmployees(){
        return axios.get(EMP_API_BASE_URL+"/")
    }

    createEmployee(employee)
    {
        return axios.post(EMP_API_BASE_URL+"/save", employee);
    }

    getEmployeebyId(employeeid)
    {
        return axios.get(EMP_API_BASE_URL + ' / ' + employeeid);
    }

    updateEmployee(employeeid,employee)
    {
        return axios.post(EMP_API_BASE_URL+"/update/"+employeeid , employee);
    }

    deleteEmployee(employeeid)
    {
        return axios.get(EMP_API_BASE_URL+"/delete/"+employeeid);
    }
}

export default new EmployeeService()