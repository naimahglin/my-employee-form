import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeDetail from './Components/EmployeeDetail';  // If you have a detail component
import './Components/EmployeeForm.css';  // Ensure this path is correct

function App() {
  const [employees, setEmployees] = useState([
    { EmployeeId: 1, name: 'John Russell', email: 'john.russell@example.com', phone: '123-456-7890' },
    { EmployeeId: 2, name: 'Steve Rodgers', email: 'steve.rodgers@example.com', phone: '987-654-3210' },
  ]);

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, EmployeeId: employees.length + 1 };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EmployeeList employees={employees} />} />
          <Route path="/add-employee" element={<EmployeeForm addEmployee={addEmployee} />} />
          <Route path="/employees/:id" element={<EmployeeDetail employees={employees} />} />  {/* If you want a detail view */}
        </Routes>
        <EmployeeForm addEmployee={addEmployee} />
      </div>
    </Router>
  );
}

export default App;
