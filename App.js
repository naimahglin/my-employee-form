import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);

  // Function to add an employee to the state
  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  };

  // Function to save the employees array to local storage
  const saveData = (data) => {
    try {
      localStorage.setItem('employees', JSON.stringify(data));
      console.log('Employees saved to local storage:', data);
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };
