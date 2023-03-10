import axios from "axios";

const EMPLOYEE_SERVICE_URL= "http://localhost:8080/api/v1/employees";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_SERVICE_URL);
    }
    addEmployee(employee){
        return axios.post(EMPLOYEE_SERVICE_URL,employee);
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEE_SERVICE_URL+"/"+id);
    }
    updateEmployee(employee,id){
        return axios.put(EMPLOYEE_SERVICE_URL+"/"+id,employee);
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_SERVICE_URL+"/"+id);
    }
}

export default new EmployeeService()