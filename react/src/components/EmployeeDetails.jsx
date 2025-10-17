import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';

const EmployeeDetails = () =>{

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    const [employeeId, setEmployeeId] = useState(1);

    function handleEmployeeId(event){
        setEmployeeId(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        
        EmployeeService.getEmployeeById(employeeId).then((response)=>{
        console.log(response);

        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        

        document.getElementById('id').value = employeeId;
        document.getElementById('firstName').value = firstName;
        document.getElementById('lastName').value = lastName;
        document.getElementById('email').value = email;
            
        }).catch(error=>{
            console.log("Error adding employee ", error);
        });
    }

    return(
        <div>
        <h2>Employee Details</h2>
        <form onSubmit={handleSubmit}>
                <input type="text" name="id" id="id" placeholder="0" value = {employeeId} onChange = {handleEmployeeId} className="form-control mb-2" />
                <input type="text" name="firstName" id="firstName" placeholder="First Name" value = {firstName}  className="form-control mb-2" />
                <input type="text" name="lastName" id="lastName" placeholder="Last Name" value = {lastName}  className="form-control mb-2" />
                <input type="email" name="email" id="email" placeholder="Email"  value = {email} className="form-control mb-2" />
                <button className="btn btn-success" type="submit">Fetch Details</button>
        </form>
        </div>
        
    )

}

export default EmployeeDetails;