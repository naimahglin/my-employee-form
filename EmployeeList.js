import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeForm.css';  // Ensure the path is correct and points to the same CSS file

function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <Link to={`/employees/${employee.EmployeeId}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
