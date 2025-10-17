import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import './EmployeeList.css';

const EmployeeForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');


    function handleChangeFirstName(event) {
        setFirstName(event.target.value);
    }

    function handleChangeLastName(event) {
        setLastName(event.target.value);
    }

    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }

    function resetDetails() {
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        const employee =
        {
            "firstName": firstName,
            "lastName": lastName,
            "email": email
        }
        EmployeeService.createEmployee(employee).then(() => {
            console.log("Employee Details Added are: ", employee);
            resetDetails();
        }).catch(error => {
            console.log("Error adding employee ", error);
            resetDetails();
        });
    }

    return (
        <div className="container">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={handleChangeFirstName}
                        className="form-control"
                    />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={handleChangeLastName}
                        className="form-control"
                    />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleChangeEmail}
                        className={"form-control"}
                    />
                </div>

                <button className="btn btn-success mt-2" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
}

export default EmployeeForm;