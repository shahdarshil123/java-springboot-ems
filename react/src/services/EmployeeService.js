import axios from "axios"

const BASE_API_URL = 'http://localhost:8080/api/employees';

class EmployeeService{
    getEmployees(){
        return axios.get(BASE_API_URL);
    }

    getEmployeeById(id){
        return axios.get(`${BASE_API_URL}/${id}`);
    }

    createEmployee(employee){
        return axios.post(BASE_API_URL, employee);
    }

}

export default new EmployeeService();