import React from 'react';
import { useParams } from 'react-router-dom';

function EmployeeDetail({ employees }) {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.EmployeeId === parseInt(id));

  if (!employee) {
    return <h2>Employee not found</h2>;
  }

  return (
    <div className="employee-detail">
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>ID: {employee.EmployeeId}</p>
      <p>Position: {employee.position}</p>
      <p>Email: {employee.email}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default EmployeeDetail;
