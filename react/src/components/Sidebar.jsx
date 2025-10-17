import React from "react";
import './Sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
    <div className="sidebar">
      <h2>EMS</h2>
      <ul>
        <li><Link to="/employees">Employees</Link></li>
        <ul className="submenu">
          <li><Link to="/employees/add">➕ Add Employee</Link></li>
          <li><Link to="/employees/search">🔍 Search Employee</Link></li>
        </ul>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/payroll">Payroll</Link></li>
        <li><Link to="/leave">Leave</Link></li>
        <li><Link to="/timesheet">Timesheet</Link></li>
      </ul>
    </div>
    );
};

export default Sidebar;
