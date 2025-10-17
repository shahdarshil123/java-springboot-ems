import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import './EmployeeList.css';

const EmployeeList = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data);
        }, []).catch(error => {
            console.log("Error: ", error);
        });
    })

    return (
        <div>
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th><th>Last Name</th><th>Email</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td>
                                <button className="btn">Edit</button>
                                <button className="btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList